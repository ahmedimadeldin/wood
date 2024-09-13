import Image from "next/image";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, desc, icon }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="w-full max-w-[408px] h-auto min-h-[300px] sm:min-h-[358px] border border-[#C39B69] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex flex-col gap-4 justify-center items-center text-center p-4 sm:p-6 overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: isHovered ? -20 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative"
            >
                <Image src={icon} layout="fill" objectFit="contain" alt={title} />
            </motion.div>
            <motion.h1
                className="text-[#000000] font-bold text-2xl sm:text-3xl md:text-4xl"
                initial={{ y: 0 }}
                animate={{ y: isHovered ? -10 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {title}
            </motion.h1>
            <motion.p
                className="text-[#000000] font-semibold opacity-80 overflow-hidden text-ellipsis text-sm sm:text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ duration: 0.3 }}
            >
                {desc}
            </motion.p>
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#C39B69] to-transparent opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.2 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
};

export default Card;