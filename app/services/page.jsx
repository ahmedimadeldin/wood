"use client";

import Gallery from "@/components/ui/gallery";
import Seperator from "@/components/ui/seperator";
import Card from "@/components/ui/service-card";
import SpecialServicesContainer from "@/components/ui/special-service-container";
import { services } from "@/utils/services";
import Image from "next/image";

const ServicesPage = () => {
    return (
        <div className="h-full flex flex-col gap-12 pt-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center justify-center pb-24">
            <div className="mx-auto">
                <Seperator />
            </div>
            <h1 className="text-[#613A0F] text-6xl mx-auto mb-12">خدماتنا</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <Card key={service.icon} title={service.title} desc={service.desc} icon={service.icon} />
                ))}
            </div>
            <div className="flex flex-col gap-8 items-center justify-center text-center">
                <Image src={"/shakosh.svg"} width={97} height={97}/>
                <h1 className="text-[#000] font-bold">إﺑﺪاﻋﺎت ﺧﺸﺒﻴﺔ ﻣﺼﻤﻤﺔ ﺧﺼﻴﺼﺎ</h1>
                <p className="text-[#000] font-semibold opacity-80"> ﻫﻲ ﺧﺪﻣﺔ ﺗﻘﺪم ﺣﻠﻮﻻً ﻣﺒﺘﻜﺮة  وﻣﺨﺼﺼﺔ ﻓﻲ ﻣﺠﺎل اﻷﻋﻤﺎل اﻟﺨﺸﺒﻴﺔ، ﺣﻴﺚ ﻧﺘﻌﺎون ﻣﻌﻜﻢ ﻟﺘﺤﻮﻳﻞ أﻓﻜﺎرﻛﻢ  إﻟﻰ واﻗﻊ ﻣﻠﻤﻮس. ﻧﻘﺪم ﺗﺼﻤﻴﻢ وﺗﻨﻔﻴﺬ ﻣﺸﺎرﻳﻊ ﺧﺸﺒﻴﺔ ﻓﺮﻳﺪة ﺗﺘﻨﺎﺳﺐ ﻣﻊ  اﺣﺘﻴﺎﺟﺎﺗﻜﻢ اﻟﺨﺎﺻﺔ، ﺳﻮاء ﻛﺎﻧﺖ ﻟﻠﻤﻨﺰل، اﻟﻤﻜﺘﺐ، أو أي ﻣﺴﺎﺣﺔ أﺧﺮى.</p>
            </div>
            <SpecialServicesContainer/>
            <div className="flex flex-col gap-8 text-center">
                <h1 className="text-[#613A0F] text-6xl">الاستديو</h1>
                <Gallery/>
            </div>
        </div>
    )
}

export default ServicesPage;