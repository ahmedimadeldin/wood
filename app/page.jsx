import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AboutUs from "@/components/ui/about-us";
import Achievements from "@/components/ui/achievements";
import Customers from "@/components/ui/customers";
import Seperator from "@/components/ui/seperator";
import { Dai_Banna_SIL } from "next/font/google";
import Image from "next/image";

// px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48
export default function Home() {
  return (
    <div className="h-full flex flex-col ">
        {/* first banner  */} 
        <div className="flex justify-center gap-4">
            <Image className="z-0" src={"/banner-1.svg"} width={850} height={600}/>
            <div className="flex flex-col justify-center items-start">
                <h1 className="text-8xl pb-2 text-[#C39B69]">وود بيس</h1>
                <p className="text-4xl text-[#4D4D4D]">إحياء الخشب بلمسات فنية تجعل من كل قطعة تحفة فريدة</p>
            </div>
        </div>
        <div className="m-auto p-8">
            <Seperator/>
        </div>

        {/* Who are we  */}
        <div className="flex gap-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* text  */}
                <div className="flex-1 flex-col gap-4">
                    <div className="flex gap-4">
                        <Image src={"/people.svg"} width={94} height={94}/>
                        <div className="flex-col">
                                <p className="text-[#9b9b9b] text-sm">من</p>
                                <h1 className="text-[#2E1A09] text-6xl">نحن</h1>
                        </div>
                    </div>
                    <div>
                        <p>وود ﺑﻴﺲ ﺷﺮﻛﺔ إﻣﺎراﺗﻴﺔ ﻣﺘﺨﺼﺼﺔ ﻓﻲ ﻣﺠﺎل اﻟﺪﻳﻜﻮرات اﻟﺪاﺧﻠﻴﺔ
                             و اﻟﺨﺎرﺟﻴﺔ وﻫﻲ ﺟﺰء ﻣﻦ ﻣﺠﻤﻮﻋﺔ اﻟﻮﺳﻴﻌﺔ ﻟﻠﻨﻘﻠﻴﺎت اﻟﻌﺎﻣﺔ ﺗﺄﺳﺴﺖ ﻓﻲ إﻣﺎرة أﺑﻮﻇﺒﻲ ﺑﺪوﻟﺔ اﻻﻣﺎرات اﻟﻌﺮﺑﻴﺔ اﻟﻤﺘﺤﺪة
                              وﺗﻤﺎرس أﻋﻤﺎﻟﻬﺎ ﺑﻨﺠﺎح ﺗﺎم ﻣﻨﺬ ﺗﺄﺳﻴﺴﻬﺎ وﺗﻘﻮم اﻟﺸﺮﻛﺔ ﺑﺎﻟﻌﻤﻞ ﻋﻠﻰ اﻟﻌﺪﻳﺪ
                               ﻣﻦ اﻟﺨﺪﻣﺎت ﻣﻤﺎ أﻛﺴﺒﻬﺎ اﻟﺨﺒﺮة و اﻟﺴﻤﻌﺔ اﻟﻄﻴﺒﺔ اﻟﺘﻲ أدت اﻟﻰ ﻧﺠﺎح اﻟﺸﺮﻛﺔ
                            </p>
                    </div>
                </div>
                {/* image  */}
                <div>
                <Image className="rounded-md" src={"/banner-2.svg"} width={550} height={260}/>
                </div>
        </div>
        {/* About Us  */}

        <div className="m-auto p-8">
            <Seperator/>
        </div>
        <AboutUs/>
        <div className="m-auto p-8">
            <Seperator/>
        </div>
        <Achievements/>
        {/* <div className="m-auto p-8">
            <Seperator/>
        </div> */}
        <Customers/>
    </div>

  )
}
