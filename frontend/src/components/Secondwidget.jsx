import React, { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import pic from "../assets/pic.jpg";

const initialImages = [pic, pic, pic, pic, pic];

export default function GalleryWidget() {
  const [images, setImages] = useState(initialImages);
  const [startIdx, setStartIdx] = useState(0);

  const handleAddImage = () => {
    const url = prompt("Enter image URL");
    if (url) setImages([...images, url]);
  };

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIdx((prev) => Math.min(prev + 1, images.length - 3));
  };

  return (
    <div className="bg-[#373E44] w-[670px] rounded-2xl p-6 max-w-3xl relative shadow-lg flex flex-col gap-4 overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div className="items-start left-4 group z-10">
            <HelpCircle className="w-8 h-8 text-[#969696]" />
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
              Click on tabs to view content
            </div>
          </div>
          <div className="bg-[#1C1D22] text-white px-6 py-3 text-lg rounded-xl font-medium">
            Gallery
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleAddImage}
            className="px-6 py-2 bg-[#4f525a] shadow-black text-white rounded-full shadow-inner hover:shadow-lg transition"
          >
            + ADD IMAGE
          </button>
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-[#1C1D22] rounded-full flex items-center justify-center text-white hover:bg-[#0c0d0f] shadow-inner transition"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-[#1C1D22] rounded-full flex items-center justify-center text-white hover:bg-[#0c0d0f] shadow-inner transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Images */}
      <div className="relative p-4 w-full overflow-visible">
        <motion.div
          className="flex gap-4"
          animate={{ x: `-${startIdx * (100 / 3)}%` }} // control transform via animate only
          transition={{ type: "tween", duration: 0.5 }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="flex-none w-1/3">
              <motion.img
                src={img}
                alt={`gallery-${idx}`}
                className="w-full h-48 object-cover rounded-2xl filter grayscale"
                whileHover={{
                  scale: 1.08,
                  rotateX: -5,
                  rotateY: 15,
                  filter: "grayscale(0%)",
                  z: 10,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
