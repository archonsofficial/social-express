import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

interface InstaStore {
  accessToken: string;
  isLoading: boolean;
  imageUrl: string;
  caption: string;
  scheduledDate: string | null;

  // Setters
  setAccessToken: (token: string) => void;
  setImageUrl: (url: string) => void;
  setCaption: (caption: string) => void;
  setScheduledDate: (date: string | null) => void;

  // Actions
  initiateOAuth: () => void;
  handleOAuthCallback: (code: string) => Promise<void>;
  createPostNow: () => Promise<void>;
}

export const useInstaStore = create<InstaStore>((set, get) => ({
  accessToken: "",
  isLoading: false,
  imageUrl: "",
  caption: "",
  scheduledDate: null,

  setAccessToken: (token: string) => set({ accessToken: token }),
  setImageUrl: (url: string) => set({ imageUrl: url }),
  setCaption: (caption: string) => set({ caption }),
  setScheduledDate: (date: string | null) => set({ scheduledDate: date }),

  initiateOAuth: () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/instagram/auth`;
  },

  handleOAuthCallback: async (code: string) => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.get("/instagram/auth/callback", {
        params: { code },
      });
      const { accessToken } = response.data;
      set({ accessToken });
      toast.success("Authenticated with Instagram!");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.error || "OAuth callback failed.");
      }
    } finally {
      set({ isLoading: false });
    }
  },

  createPostNow: async () => {
    const { accessToken, imageUrl, caption } = get();

    if (!accessToken || !imageUrl || !caption) {
      toast.error("Missing required fields.");
      return;
    }

    try {
      set({ isLoading: true });
      await axiosInstance.post("/instagram/create-post", {
        accessToken,
        imageUrl,
        caption,
      });
      toast.success("Post created successfully!");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.error || "Failed to post on Instagram.");
      }
    } finally {
      set({ isLoading: false });
    }
  },
}));
