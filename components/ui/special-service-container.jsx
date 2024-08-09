import { motion } from 'framer-motion';
import SpecialServicesCard from './special-services';
import { specialServices } from '@/utils/specialServices';

const SpecialServicesContainer = () => {
    return (
        <div className="w-full px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-12 text-[#613A0F]">خدماتنا الخاصة</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {specialServices.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <SpecialServicesCard title={service.title} desc={service.desc} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SpecialServicesContainer;