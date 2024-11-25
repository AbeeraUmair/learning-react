import SearchClient from '@/app/components/google-books-app/GoogleClientSide'; 

type VolumeInfo = { 
  title: string; 
  authors?: string[]; 
  description?: string; 
  imageLinks?: { 
    thumbnail?: string; 
  }; 
  publishedDate?: string; 
}; 
type Book = { 
  id: string; 
  volumeInfo: VolumeInfo; 
}; 
// Fetch static data at build time 
async function fetchBooks(searchTerm: string): Promise<Book[]> { 
  const response = await fetch( 
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent( 
      searchTerm 
    )}&maxResults=10&key=${process.env.NEXT_PUBLIC_BOOKS_API_KEY}`, 
    { cache: 'force-cache' } // Static fetching 
  ); 
  const data = await response.json(); 
  return data.items || []; 
} 
export default async function GoogleBooksApi() { 
  const initialBooks = await fetchBooks('autism'); // Build-time fetch 
  return (
    <div className="min-h-screen bg-gray-100 p-6"> 
      <h1 className="text-3xl font-bold text-center mb-6">Google Books Search</h1> 
      {/* Pass the static data to the client-side component */} 
      <SearchClient initialBooks={initialBooks} /> 
    </div>
  ); 
} 