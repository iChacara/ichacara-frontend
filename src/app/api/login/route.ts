import { NextResponse } from "next/server";
import { LoginSchema } from "@/lib/zodSchemas";
import { apiClient } from "@/lib/clients";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsedData = LoginSchema.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json(
        {
          errors: parsedData.error.issues.map((issue) => issue.message),
        },
        { status: 400 }
      );
    }

    const response = await apiClient.post(`/user/auth`, parsedData.data);

    console.log(response);

    // const token = response.data.access_token;

    // const responseCookie = NextResponse.json({
    //   message: "Login feito com sucesso!",
    // });

    // responseCookie.cookies.set("ichacara_token", token, {
    //   httpOnly: true,
    //   secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
    //   sameSite: "strict",
    //   path: "/",
    //   maxAge: 60 * 60 * 24 * 7, // Expira em 1 semana
    // });

    // return responseCookie;
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
