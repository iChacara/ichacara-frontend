import { NextResponse } from "next/server";
import { apiClient } from "@/lib/clients";
import { bookingSchema } from "@/lib/zodSchemas";
import getCookie from "@/hooks/useCookie";

export async function POST(request: Request) {
  const { ...body } = await request.json();

  try {
    const parsedData = bookingSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        {
          errors: parsedData.error.issues.map((issue) => issue.message),
        },
        { status: 400 }
      );
    }

    const token = getCookie("ichacara_token");

    const response = await apiClient.post("/booking", parsedData.data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json({ message: "Agendmento feito com sucesso!" });
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
