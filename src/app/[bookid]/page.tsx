import Link from 'next/link';
import React from 'react';

interface Param{
    params:{
        bookid:string
    }
}

const BookPage =async ({params}:Param) => {
    const {bookid} =await params;

    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${bookid}?key=${process.env.NEXT_PUBLIC_BOOKS_API_KEY}`
      );
      
      const data = await response.json();
      
      const {volumeInfo} = data ;

      return (
        <div className="p-8">
          <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
            <img
              src={volumeInfo.imageLinks?.thumbnail || '/placeholder.jpg'}
              alt={volumeInfo.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">{volumeInfo.title}</h1>
            <p className="text-gray-700 mb-4">
              {volumeInfo.authors ? `By ${volumeInfo.authors.join(', ')}` : 'Unknown Author'}
            </p>
            <p className="text-gray-500 mb-4">{volumeInfo.description || 'No description available.'}</p>
            <p className="text-sm text-gray-400">
              Published: {volumeInfo.publishedDate || 'Unknown'}
            </p>
            <p className="text-sm text-gray-400">
              Publisher: {volumeInfo.publisher || 'Unknown'}
            </p>
            <Link href="/">
              <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Back to Search
              </button>
            </Link>
          </div>
        </div>
      );
    } 
  
  
  export default BookPage;
   
  