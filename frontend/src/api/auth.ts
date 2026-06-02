import { api } from "./client";
import type { RegisterData, LoginData } from "../types/auth";

export const registerUser = async (
  data: RegisterData
) => {
  const response = await api.post(
    "/auth/register",
    data
  );

  return response.data;
};

export const loginUser = async (
  data: LoginData
) => {
  const response = await api.post(
    "/auth/login",
    data
  );

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");

  return response.data;
};