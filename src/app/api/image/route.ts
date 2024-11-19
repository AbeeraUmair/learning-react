import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("query");

  if (!term) {
    return NextResponse.json(
      { error: "Query parameter 'query' is required." },
      { status: 400 }
    );
  }


// // Define the response type based on Unsplash API documentation (example structure)
// interface UnsplashResponse {
//   results: Array<{
//     id: string;
//     urls: {
//       small: string;
//       full: string;
//     };
//     description: string | null;
//     alt_description: string | null;
//   }>;
// }

// const searchImage = async (term: string): Promise<UnsplashResponse> => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}`,
            },
      params: {
        query: term,
      },
    });

    console.log(response.data);
    return NextResponse.json(response.data);
    } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Unsplash." },
      { status: 500 }
    );
  }
};

// export default searchImage;
