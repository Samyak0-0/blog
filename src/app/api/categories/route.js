import prisma from "@/utilities/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {

  const searchParams = req.nextUrl.searchParams;
  const cat = searchParams.get('cat_no');
  const cat_no = parseInt(cat);

  try {
    const categories = await prisma.category.findMany({
      take: cat_no,
      orderBy: {
        id: 'asc',
      }
    });

    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
