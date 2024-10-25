import { NextResponse } from "next/server";
import { apiClient } from "@/lib/clients";
import { announcementSchema } from "@/lib/zodSchemas";

export async function POST(request: Request) {
  const body = await request.json();
  const parsedData = announcementSchema.safeParse(body);

  console.log(body);


  // try {
  //   const body = await request.json();
  //   const parsedData = announcementSchema.safeParse(body);
  //   if (!parsedData.success) {
  //     return NextResponse.json(
  //       {
  //         errors: parsedData.error.issues.map((issue) => issue.message),
  //       },
  //       { status: 400 }
  //     );
  //   }

  //   await apiClient.post(`/farm`, parsedData.data);

  //   return NextResponse.json({ message: "Chácara criada com sucesso!" });
  // } catch (error: any) {
  //   return NextResponse.json(
  //     {
  //       message:
  //         error.response?.data?.message || error.message || "Ocorreu um erro!",
  //     },
  //     { status: error.response?.data?.statusCode || 500 }
  //   );
  // }
}
