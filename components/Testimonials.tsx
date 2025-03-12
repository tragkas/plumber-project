"use client";

import { motion } from "framer-motion";

const testimonials = [
  { quote: "Fast and reliable service!", name: "John D." },
  { quote: "Highly recommend! Professional.", name: "Sarah M." },
  { quote: "Super friendly and efficient.", name: "Michael T." },
  { quote: "Solved my plumbing issue in minutes.", name: "Emily R." },
  { quote: "The best plumbing service I’ve used.", name: "David P." },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-blue-50 overflow-hidden relative">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 min-w-full"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md min-w-[300px] mx-3 max-w-full"
            >
              <p className="text-gray-700 italic">{testimonial.quote}</p>
              <p className="font-semibold mt-2">- {testimonial.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
