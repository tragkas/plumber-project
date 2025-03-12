"use client";

import { FaStar } from "react-icons/fa";
import { useState } from "react";

interface Review {
  id: number;
  text: string;
  rating: number;
  author: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    text: "The plumber arrived quickly and fixed the issue with our leaking pipe in no time! Very professional and efficient. Highly recommend this service!",
    rating: 5,
    author: "Mark Thompson",
  },
  {
    id: 2,
    text: "Had a clogged drain and needed emergency service. The technician was super helpful, and the problem was resolved within an hour. Excellent service!",
    rating: 5,
    author: "Lisa Reynolds",
  },
  {
    id: 3,
    text: "I had a water heater issue, and the technician was able to repair it the same day. He was knowledgeable and explained everything to me. Happy with the service!",
    rating: 4,
    author: "Brian Sanders",
  },
  {
    id: 4,
    text: "We had a burst pipe in the middle of the night. The emergency service was fantastic. They arrived quickly and did an excellent job fixing the problem.",
    rating: 5,
    author: "Samantha Williams",
  },
  {
    id: 5,
    text: "The plumber came to inspect my home for leaks, and I felt they were very thorough. However, I had to wait a little longer than expected for the service to be completed.",
    rating: 4,
    author: "Tom Harris",
  },
  {
    id: 6,
    text: "I needed a new faucet installed, and they did a great job. Everything works perfectly, and they even cleaned up after themselves. Highly satisfied with the service!",
    rating: 5,
    author: "Rachel Adams",
  },
  {
    id: 7,
    text: "The team helped with fixing my broken pipe. They were professional, but I did feel like the pricing was a bit higher than expected for the work done.",
    rating: 3,
    author: "James Brown",
  },
  {
    id: 8,
    text: "Amazing customer service! They responded quickly to my inquiry and fixed a major leak in my bathroom. Would definitely recommend them for any plumbing issues.",
    rating: 5,
    author: "Olivia Clark",
  },
];


export function Reviews() {
    const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0);
    
    const currentReview = reviewsData[currentReviewIndex];

    const handleNextReview = () => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    };
  
    const handlePrevReview = () => {
      setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
    };
  

  return (
    <section className="flex flex-col items-center justify-center py-16 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
      <div className="max-w-3xl mx-auto bg-white/10 p-6 rounded-lg backdrop-blur-lg shadow-lg relative">
        <p className="text-lg mb-4">"{currentReview.text}"</p>
        <div className="flex justify-center items-center mt-4">
          {[...Array(currentReview.rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-xl mx-1" />
          ))}
          {[...Array(5-currentReview.rating)].map((_, i) => (
            <FaStar key={i+currentReview.rating} className="text-gray-400 text-xl mx-1" />
          ))}
        </div>
        <p className="mt-3 text-gray-300">— {currentReview.author}</p>

         <button
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
          onClick={handlePrevReview}
          aria-label="Previous Review"
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
          onClick={handleNextReview}
          aria-label="Next Review"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
