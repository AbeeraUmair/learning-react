'use client';

import Link from 'next/link';
import { useState } from 'react';

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

type Props = {
    initialBooks: Book[];
};

export default function SearchClient({ initialBooks }: Props) {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [books, setBooks] = useState<Book[]>(initialBooks);
    const [loading, setLoading] = useState<boolean>(false);

    // Fetch books dynamically when searching 
    const fetchBooks = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
                    searchTerm
                )}&maxResults=10&key=${process.env.NEXT_PUBLIC_BOOKS_API_KEY}`
            );
            const data = await response.json();
            setBooks(data.items || []);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
        setLoading(false);
    };

    return (
        <>
            <div className="max-w-md mx-auto flex gap-2">
                <input
                    type="text"
                    placeholder="Enter book title or keyword..."
                    className="w-full p-2 border rounded"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={fetchBooks}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Search
                </button>

            </div>

            {loading && <p className="text-center mt-4">Loading...</p>}
            <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                {books.map((book) => {
                    const info = book.volumeInfo;
                    return (
                        <Link href={`/${book.id}`}>
                            <div key={book.id} className="bg-white shadow-md rounded-lg p-4">
                                <img
                                    src={info.imageLinks?.thumbnail || '/placeholder.jpg'}
                                    alt={info.title}
                                    className="w-full h-40 object-cover mb-4"
                                />
                                <h2 className="text-xl font-semibold">{info.title}</h2>
                                <p className="text-sm text-gray-500">
                                    {info.authors ? info.authors.join(', ') : 'Unknown Author'}
                                </p>
                                <p className="text-gray-700 mt-2 line-clamp-3">
                                    {info.description || 'No description available.'}
                                </p>
                                <p className="text-sm text-gray-500 mt-4">
                                    Published: {info.publishedDate || 'Unknown'}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {!loading && books.length === 0 && searchTerm && (
                <p className="text-center mt-4 text-gray-500">
                    No books found. Try another search.
                </p>
            )}
        </>
    );
}