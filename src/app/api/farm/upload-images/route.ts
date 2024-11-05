import { NextResponse } from "next/server";
import { apiClient } from "@/lib/clients";
import getCookie from "@/hooks/useCookie";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const farmId = formData.get("farmId");

    formData.delete("farmId");

    const data: any = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const token = getCookie("ichacara_token");

    await apiClient.post(`/farm/upload-farm-pics?farmId=${farmId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return NextResponse.json({ message: "Chácara criada com sucesso!" });
  } catch (error: any) {
    return NextResponse.json(
      {
        message:
          error.response?.data?.message || error.message || "Ocorreu um erro!",
      },
      { status: error.response?.data?.statusCode || 500 }
    );
  }
}
