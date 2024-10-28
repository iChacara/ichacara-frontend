import { NextResponse } from "next/server";
import { apiClient } from "@/lib/clients";
import { farmSchema, imagesSchema } from "@/lib/zodSchemas";

export async function POST(request: Request) {
  const { type, ...body } = await request.json();
  // const body = await request.json();

  // if (type === "images") {
  //   try {
  //     const parsedData = imagesSchema.safeParse(body);
  //     if (!parsedData.success) {
  //       return NextResponse.json(
  //         {
  //           errors: parsedData.error.issues.map((issue) => issue.message),
  //         },
  //         { status: 400 }
  //       );
  //     }

  //     await apiClient.post(
  //       `/farm/upload-farm-pics?farmId=${1}`,
  //       parsedData.data
  //     );

  //     return NextResponse.json({ message: "Chácara criada com sucesso!" });
  //   } catch (error: any) {
  //     return NextResponse.json(
  //       {
  //         message:
  //           error.response?.data?.message ||
  //           error.message ||
  //           "Ocorreu um erro!",
  //       },
  //       { status: error.response?.data?.statusCode || 500 }
  //     );
  //   }
  // }

  try {
    const parsedData = farmSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        {
          errors: parsedData.error.issues.map((issue) => issue.message),
        },
        { status: 400 }
      );
    }

    const {
      address,
      accommodation,
      services,
      highlights,
      propertyInfo,
      pricing,
    } = parsedData.data;

    const formattedData = {
      title: propertyInfo.title,
      name: propertyInfo.name,
      description: propertyInfo.description,
      cep: address.cep,
      street: address.street,
      number: address.number,
      complement: address.complement,
      district: address.district,
      city: address.city,
      state: address.state,
      numRooms: parseInt(accommodation.numRooms),
      numBeds: parseInt(accommodation.numBeds),
      numBathrooms: parseInt(accommodation.numBathrooms),
      maxOccupancy: parseInt(accommodation.maxOccupancy),
      services: services.services,
      highlights: highlights.highlights,
      dailyPrice: pricing.dailyPrice,
    };

    const response = await apiClient.post(`/farm`, formattedData);
    const farmId = response.data.id;

    return NextResponse.json({
      message: "Chácara criada com sucesso!",
      farmId,
    });
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
