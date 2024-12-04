import getCookie from "@/hooks/useCookie";
import { apiClient } from "@/lib/clients";

export async function getUser() {
  try {
    const token = getCookie("ichacara_token");

    const response = await apiClient.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Erro ao retornar usuário"
    );
  }
}
