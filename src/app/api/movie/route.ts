import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!TMDB_API_KEY) {
    return NextResponse.json({ error: "API key is missing" }, { status: 500 });
  }

  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response.data)
    return NextResponse.json({ results: response.data.results || [] });
  } catch (error) {
    console.error("Error fetching TMDB API:", error);
    return NextResponse.json(
      { error: "Failed to fetch movies", details: error },
      { status: 500 }
    );
  }
}
