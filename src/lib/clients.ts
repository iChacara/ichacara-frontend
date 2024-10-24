import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const viaCepClient = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
