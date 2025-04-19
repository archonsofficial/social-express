import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { AxiosError } from "axios";

// Define the structure of your user
interface AuthUser {
  id: string;
  name: string;
  email: string;
  instaPref: string[];
  xPref: string[];
  fbPref: string[];
  token?: string;
}

// Zustand store definition
interface AuthStore {
  authUser: AuthUser | null;
  isLoading: boolean;
  signup: (data: Omit<AuthUser, "id" | "token"> & { password: string }) => Promise<void>;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  updatePreferences: (prefs: Partial<Pick<AuthUser, "instaPref" | "xPref" | "fbPref">>) => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  authUser: JSON.parse(localStorage.getItem("authUser") || "null"),
  isLoading: false,

  signup: async (data) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post<AuthUser>("/auth/signup", data);
      Cookies.set("token", res.data.token!, { secure: true });
      localStorage.setItem("authUser", JSON.stringify(res.data));
      set({ authUser: res.data });
      toast.success("Signup successful!");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "Signup failed");
      }
    } finally {
      set({ isLoading: false });
    }
  },

  login: async (data) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post<AuthUser>("/auth/login", data, { withCredentials: true });
      Cookies.set("token", res.data.token!, { secure: true });
      localStorage.setItem("authUser", JSON.stringify(res.data));
      set({ authUser: res.data });
      toast.success("Login successful!");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "Login failed");
      }
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      Cookies.remove("token");
      localStorage.removeItem("authUser");
      set({ authUser: null });
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Logout failed");
    }
  },

  updatePreferences: async (prefs) => {
    try {
      const res = await axiosInstance.put<AuthUser>("/user/preferences", prefs);
      localStorage.setItem("authUser", JSON.stringify(res.data));
      set({ authUser: res.data });
      toast.success("Preferences updated!");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "Failed to update preferences");
      }
    }
  },

  checkAuth: async () => {
    try {
      if (!Cookies.get("token")) {
        set({ authUser: null });
        localStorage.removeItem("authUser");
        return;
      }
      const res = await axiosInstance.get<AuthUser>("/auth/profile");
      localStorage.setItem("authUser", JSON.stringify(res.data));
      set({ authUser: res.data });
    } catch {
      set({ authUser: null });
      localStorage.removeItem("authUser");
    }
  },
}));
