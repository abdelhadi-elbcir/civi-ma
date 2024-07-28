"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Preloader from '../components/Preloader';
import Image from 'next/image';

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://www.googleapis.com/blogger/v3/blogs/3410082751808130936/posts?key=AIzaSyBRVgTsABIBG6nUVs8BHdWXJhfn_nsNAZw')
            .then(response => {
                setArticles(response.data.items);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    }, []);

    // Function to extract the first image URL from the content
    const extractFirstImage = (content) => {
        const match = content.match(/<img[^>]+src="([^">]+)"/);
        return match ? match[1] : '';
    };

    // Function to extract a brief description from the content
    const extractDescription = (content, length = 150) => {
        // Strip HTML tags from content
        const text = content.replace(/<[^>]*>/g, '');
        // Return a truncated version of the text
        return text.length > length ? text.substring(0, length) + '...' : text;
    };

    return (
        <section className="flex w-full bg-white">
            {
                loading ?
                    <Preloader />
                    :
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-8 py-8 md:grid-cols-2">
                        {articles.map(article => (
                            <div
                                key={article.id}
                                className="p-4 border rounded-md shadow-sm"
                            >
                                {extractFirstImage(article.content) && (
                                    <Image
                                        src={extractFirstImage(article.content)}
                                        alt={article.title}
                                        className="w-full h-auto mb-2"
                                        width={400}
                                        height={400}
                                    />
                                )}
                                <h2 className="text-xl font-bold mb-2">
                                    {article.title}
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    {extractDescription(article.content)}
                                </p>
                                <button
                                    onClick={() => router.push(article.url)}
                                    className="text-blue-500 hover:underline"
                                >
                                    Voir plus
                                </button>
                            </div>
                        ))}
                    </div>
            }
        </section>
    );
}
