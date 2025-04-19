import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { AxiosError } from "axios";

// User type from your Prisma schema + token for session
interface AuthUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  instaPref: string[];
  xPref: string[];
  fbPref: string[];
  token?: string;
}

interface AuthStore {
  authUser: AuthUser | null;
  isLoading: boolean;
  signup: (data: Omit<AuthUser, "id" | "token" | "instaPref" | "xPref" | "fbPref"> & { password: string }) => Promise<void>;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  updatePreferences: (prefs: Partial<Pick<AuthUser, "instaPref" | "xPref" | "fbPref">>) => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  authUser: JSON.parse(localStorage.getItem("authUser") || "null"),
  isLoading: false,

  signup: async (data) => {
    set({ isLoading: true });
    try {
      console.log(data);
      const res = await axiosInstance.post<AuthUser>("/auth/register", data);
      const { token } = res.data;
      console.log("Token:", token);

      // Cookies.set("token", token!, { secure: true });
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("authUser", JSON.stringify(res.data));
      // set({ authUser: res.data });
      set({ authUser: res.data });
      console.log("step2");
      toast.success("Signup successful!");
    } catch (error) {
      const axiosErr = error as AxiosError;
      const msg = (axiosErr.response?.data as { message?: string })?.message || "Signup failed";
    } finally {
      set({ isLoading: false });
    }
  },

  login: async (data) => {
    set({ isLoading: true });
    try {
      console.log(data);
      const res = await axiosInstance.post<AuthUser>("/auth/login", data, { withCredentials: true });
      Cookies.set("token", res.data.token!, { secure: true });
      localStorage.setItem("authUser", JSON.stringify(res.data));
      set({ authUser: res.data });
      toast.success("Login successful!");
    } catch (error) {
      const axiosErr = error as AxiosError;
const msg = (axiosErr.response?.data as { message?: string })?.message || "Signup failed";

      toast.error(msg);
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
    } catch (error) {
      toast.error("Logout failed");
    } finally {
      Cookies.remove("token");
      localStorage.removeItem("token");
      localStorage.removeItem("authUser");
      set({ authUser: null });
      toast.success("Logged out successfully!");
    }
  },

  updatePreferences: async (prefs) => {
    try {
      const currentUser = get().authUser;
      if (!currentUser) throw new Error("User not logged in");

      const res = await axiosInstance.put<AuthUser>("/user/preferences", prefs);
      localStorage.setItem("authUser", JSON.stringify(res.data));
      set({ authUser: res.data });
      toast.success("Preferences updated!");
    } catch (error) {
      const axiosErr = error as AxiosError;
const msg = (axiosErr.response?.data as { message?: string })?.message || "Signup failed";

      toast.error(msg);
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
