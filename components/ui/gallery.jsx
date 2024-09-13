import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { images } from '@/utils/images'; // Adjust this import path as needed

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dimensions, setDimensions] = useState({ width: 770, height: 460 });

    useEffect(() => {
        const updateDimensions = () => {
            const width = Math.min(window.innerWidth - 32, 770); // 32px for padding
            const height = (width * 460) / 770; // maintain aspect ratio
            setDimensions({ width, height });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-[770px] mx-auto" style={{ height: `${dimensions.height}px` }}>
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-full h-full"
                >
                    <Image
                        src={images[currentIndex].src}
                        alt={`Gallery image ${images[currentIndex].id}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </motion.div>
            </AnimatePresence>

            <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 sm:p-2 rounded-full z-10"
            >
                &#10095; {/* Left arrow */} 
            </button>
            <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 sm:p-2 rounded-full z-10"
            >
                &#10094; {/* Right arrow */}
            </button>

            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full ${
                            index === currentIndex ? 'bg-white' : 'bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;