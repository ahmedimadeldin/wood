import { motion } from 'framer-motion';
import SpecialServicesCard from './special-services';
import { specialServices } from '@/utils/specialServices';

const SpecialServicesContainer = () => {
    return (
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-[#613A0F]">خدماتنا الخاصة</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {specialServices.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-full"
                    >
                        <SpecialServicesCard title={service.title} desc={service.desc} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SpecialServicesContainer;