import { NextResponse } from "next/server";
import { RegisterSchema } from "@/lib/zodSchemas";
import { apiClient } from "@/lib/clients";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsedData = RegisterSchema.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json(
        {
          errors: parsedData.error.issues.map((issue) => issue.message),
        },
        { status: 400 }
      );
    }

    const filteredData = {
      name: parsedData.data.name,
      email: parsedData.data.email,
      password: parsedData.data.password,
    };

    await apiClient.post(`/${parsedData.data.type}`, filteredData);

    return NextResponse.json({ message: "Cadastro feito com sucesso!" });
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
