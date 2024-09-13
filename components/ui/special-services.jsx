import { motion } from 'framer-motion';
import { useState } from 'react';

const SpecialServicesCard = ({ title, desc }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="w-full bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#613A0F]"
                initial={{ y: 0 }}
                animate={{ y: isHovered ? -5 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {title}
            </motion.h2>
            <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-600"
                initial={{ opacity: 0.8, y: 0 }}
                animate={{ opacity: isHovered ? 1 : 0.8, y: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {desc}
            </motion.p>
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#C39B69] to-transparent opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
};

export default SpecialServicesCard;