import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AboutUs from "@/components/ui/about-us";
import Achievements from "@/components/ui/achievements";
import Customers from "@/components/ui/customers";
import Seperator from "@/components/ui/seperator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* First banner */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8">
        <div className="w-full md:w-1/2 relative aspect-[85/60]">
          <Image
            src="/banner-1.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="Banner"
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-start md:w-1/2">
          <h1 className="text-4xl sm:text-6xl md:text-8xl pb-2 text-[#C39B69]">وود بيس</h1>
          <p className="text-xl sm:text-2xl md:text-4xl text-[#4D4D4D]">
            إحياء الخشب بلمسات فنية تجعل من كل قطعة تحفة فريدة
          </p>
        </div>
      </div>

      <div className="m-auto p-4 sm:p-8">
        <Seperator />
      </div>

      {/* Who are we */}
      <div className="flex flex-col md:flex-row gap-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="relative w-16 h-16 sm:w-24 sm:h-24">
              <Image src="/people.svg" fill style={{ objectFit: "contain" }} alt="People icon" />
            </div>
            <div className="flex-col">
              <p className="text-[#9b9b9b] text-sm">من</p>
              <h1 className="text-[#2E1A09] text-4xl sm:text-5xl md:text-6xl">نحن</h1>
            </div>
          </div>
          <div>
            <p className="text-sm sm:text-base">
              وود ﺑﻴﺲ ﺷﺮﻛﺔ إﻣﺎراﺗﻴﺔ ﻣﺘﺨﺼﺼﺔ ﻓﻲ ﻣﺠﺎل اﻟﺪﻳﻜﻮرات اﻟﺪاﺧﻠﻴﺔ
              و اﻟﺨﺎرﺟﻴﺔ وﻫﻲ ﺟﺰء ﻣﻦ ﻣﺠﻤﻮﻋﺔ اﻟﻮﺳﻴﻌﺔ ﻟﻠﻨﻘﻠﻴﺎت اﻟﻌﺎﻣﺔ ﺗﺄﺳﺴﺖ ﻓﻲ إﻣﺎرة أﺑﻮﻇﺒﻲ ﺑﺪوﻟﺔ اﻻﻣﺎرات اﻟﻌﺮﺑﻴﺔ اﻟﻤﺘﺤﺪة
              وﺗﻤﺎرس أﻋﻤﺎﻟﻬﺎ ﺑﻨﺠﺎح ﺗﺎم ﻣﻨﺬ ﺗﺄﺳﻴﺴﻬﺎ وﺗﻘﻮم اﻟﺸﺮﻛﺔ ﺑﺎﻟﻌﻤﻞ ﻋﻠﻰ اﻟﻌﺪﻳﺪ
              ﻣﻦ اﻟﺨﺪﻣﺎت ﻣﻤﺎ أﻛﺴﺒﻬﺎ اﻟﺨﺒﺮة و اﻟﺴﻤﻌﺔ اﻟﻄﻴﺒﺔ اﻟﺘﻲ أدت اﻟﻰ ﻧﺠﺎح اﻟﺸﺮﻛﺔ
            </p>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2 relative aspect-[55/26]">
          <Image
            src="/banner-2.svg"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
            alt="Banner 2"
          />
        </div>
      </div>

      {/* About Us */}
      <div className="m-auto p-4 sm:p-8">
        <Seperator />
      </div>
      <AboutUs />
      <div className="m-auto p-4 sm:p-8">
        <Seperator />
      </div>
      <Achievements />
      <Customers />
    </div>
  );
}