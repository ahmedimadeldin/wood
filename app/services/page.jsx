"use client";

import Gallery from "@/components/ui/gallery";
import Seperator from "@/components/ui/seperator";
import Card from "@/components/ui/service-card";
import SpecialServicesContainer from "@/components/ui/special-service-container";
import { services } from "@/utils/services";
import Image from "next/image";

const ServicesPage = () => {
    return (
        <div className="min-h-screen flex flex-col gap-8 sm:gap-12 pt-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center justify-center pb-16 sm:pb-24">
            <div className="w-full max-w-screen-xl mx-auto">
                <Seperator />
            </div>
            <h1 className="text-[#613A0F] text-4xl sm:text-5xl md:text-6xl text-center mb-8 sm:mb-12">خدماتنا</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-screen-xl">
                {services.map((service) => (
                    <Card key={service.icon} title={service.title} desc={service.desc} icon={service.icon} />
                ))}
            </div>
            <div className="flex flex-col gap-6 sm:gap-8 items-center justify-center text-center max-w-2xl mx-auto">
                <Image src={"/shakosh.svg"} width={97} height={97} alt="Shakosh icon" className="w-16 h-16 sm:w-24 sm:h-24"/>
                <h1 className="text-[#000] font-bold text-xl sm:text-2xl">إﺑﺪاﻋﺎت ﺧﺸﺒﻴﺔ ﻣﺼﻤﻤﺔ ﺧﺼﻴﺼﺎ</h1>
                <p className="text-[#000] font-semibold opacity-80 text-sm sm:text-base"> ﻫﻲ ﺧﺪﻣﺔ ﺗﻘﺪم ﺣﻠﻮﻻً ﻣﺒﺘﻜﺮة  وﻣﺨﺼﺼﺔ ﻓﻲ ﻣﺠﺎل اﻷﻋﻤﺎل اﻟﺨﺸﺒﻴﺔ، ﺣﻴﺚ ﻧﺘﻌﺎون ﻣﻌﻜﻢ ﻟﺘﺤﻮﻳﻞ أﻓﻜﺎرﻛﻢ  إﻟﻰ واﻗﻊ ﻣﻠﻤﻮس. ﻧﻘﺪم ﺗﺼﻤﻴﻢ وﺗﻨﻔﻴﺬ ﻣﺸﺎرﻳﻊ ﺧﺸﺒﻴﺔ ﻓﺮﻳﺪة ﺗﺘﻨﺎﺳﺐ ﻣﻊ  اﺣﺘﻴﺎﺟﺎﺗﻜﻢ اﻟﺨﺎﺻﺔ، ﺳﻮاء ﻛﺎﻧﺖ ﻟﻠﻤﻨﺰل، اﻟﻤﻜﺘﺐ، أو أي ﻣﺴﺎﺣﺔ أﺧﺮى.</p>
            </div>
            <SpecialServicesContainer/>
            <div className="flex flex-col gap-6 sm:gap-8 text-center w-full">
                <h1 className="text-[#613A0F] text-4xl sm:text-5xl md:text-6xl">الاستديو</h1>
                <Gallery/>
            </div>
        </div>
    )
}

export default ServicesPage;