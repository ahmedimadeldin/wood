import Image from "next/image";
import Seperator from "./seperator";

const Achievements = () => {
  return (
    <div className="mx-auto flex flex-col gap-8 sm:gap-12 items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2E1A09] text-center">الإنجازات</h1>
      <Image src="/star.svg" width={133} height={133} alt="Star" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" />
      <div className="relative w-full max-w-3xl">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover"
          style={{ backgroundImage: "url(/background.svg)" }}
        />
        <Image 
          src="/figure.svg.svg" 
          width={702} 
          height={397} 
          alt="Figure" 
          className="relative w-full h-auto"
        />
      </div>
      <Seperator/>
      <Image 
        src={"/logo-2.svg"} 
        width={366} 
        height={227} 
        alt="Logo" 
        className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto"
      />
      <div className="w-full max-w-2xl">
        <p className="text-[#3C3C3C] font-semibold text-sm sm:text-base md:text-lg text-center">
          ﻓﻲ ﺧﺘﺎم اﻷﻣﺮ، <span className="text-[#2C2C2C] font-bold">ﺗﺘﺠﺴﺪ روﻋﺔ ﺷﺮﻛﺔ وود ﺑﻴﺲ في</span> ﺗﻘﺪﻳﻢ اﻟﺤﺮﻓﻴﺔ اﻟﺮﻓﻴﻌﺔ واﻟﺘﻔﺎﻧﻲ ﻓﻲ ﺗﻠﺒﻴﺔ اﺣﺘﻴﺎﺟﺎت اﻟﻌﻤﻼء. ﺑﻔﻀﻞ ﻣﻬﺎراﺗﻬﺎ اﻟﻌﺎﻟﻴﺔ وإﺑﺪاﻋﻬﺎ اﻟﻤﺘﺠﺪد
          ، ﺗﺴﺘﻤﺮ ﺷﺮﻛﺔ وود ﺑﻴﺲ ﻓﻲ ﺗﺤﻮﻳﻞ اﻷﻓﻜﺎر إﻟﻰ واﻗﻊ ﻣﻠﻤﻮس، وﺗﺠﺴﻴﺪ اﻟﺠﻤﺎل ﻓﻲ ﻛﻞ ﻗﻄﻌﺔ ﺗﻨﺘﺠﻬﺎ. إﻧﻬﺎ ﻣﻜﺎن ﻳﺠﻤﻊ ﺑﻴﻦ اﻟﺨﺒﺮة واﻻﺑﺘﻜﺎر، وﻳﻀﻊ ﺑﺼﻤﺘﻪ اﻟﻔﺮﻳﺪة ﻓﻲ ﻋﺎﻟﻢ اﻟﺪﻳﻜــــﻮر واﻟﺘﺼﻤﻴــــــﻢ اﻟـــﺪاﺧﻠــﻲ
        </p>
      </div>
    </div>
  );
};

export default Achievements;
