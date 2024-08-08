"use client";

import Seperator from "@/components/ui/seperator";
import Card from "@/components/ui/service-card";
import { services } from "@/utils/services";

const ServicesPage = () => {
    return (
        <div className="h-full flex flex-col pt-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center justify-center pb-24">
            <div className="mx-auto">
                <Seperator />
            </div>
            <h1 className="text-[#613A0F] text-6xl mx-auto mb-12">خدماتنا</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <Card key={service.icon} title={service.title} desc={service.desc} icon={service.icon} />
                ))}
            </div>
        </div>
    )
}

export default ServicesPage;