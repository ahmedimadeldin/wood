import Image from "next/image";
import Seperator from "./seperator";

const Achievements = () => {
  return (
    <div className="mx-auto flex flex-col gap-12 items-center">
      <h1 className="text-8xl text-[#2E1A09]">الإنجازات</h1>
      <Image src="/star.svg" width={133} height={133} alt="Star" />
      <div className="relative w-fit h-fit">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover"
          style={{ backgroundImage: "url(/background.svg)" }}
        />
        <Image src="/figure.svg.svg" width={702} height={397} alt="Figure" className="relative" />
      </div>
      <Seperator/>
      <Image src={"/logo-2.svg"} width={366} height={227}/>
      <div className=" w-[600px] h-[394px]">
            <p className="text-[#3C3C3C] font-semibold">ﻓﻲ ﺧﺘﺎم اﻷﻣﺮ، <span className="text-[#2C2C2C] font-bold">ﺗﺘﺠﺴﺪ روﻋﺔ ﺷﺮﻛﺔ وود ﺑﻴﺲ في</span> ﺗﻘﺪﻳﻢ اﻟﺤﺮﻓﻴﺔ اﻟﺮﻓﻴﻌﺔ واﻟﺘﻔﺎﻧﻲ ﻓﻲ ﺗﻠﺒﻴﺔ اﺣﺘﻴﺎﺟﺎت اﻟﻌﻤﻼء. ﺑﻔﻀﻞ ﻣﻬﺎراﺗﻬﺎ اﻟﻌﺎﻟﻴﺔ وإﺑﺪاﻋﻬﺎ اﻟﻤﺘﺠﺪد
                ، ﺗﺴﺘﻤﺮ ﺷﺮﻛﺔ وود ﺑﻴﺲ ﻓﻲ ﺗﺤﻮﻳﻞ اﻷﻓﻜﺎر إﻟﻰ واﻗﻊ ﻣﻠﻤﻮس، وﺗﺠﺴﻴﺪ اﻟﺠﻤﺎل ﻓﻲ ﻛﻞ ﻗﻄﻌﺔ ﺗﻨﺘﺠﻬﺎ. إﻧﻬﺎ ﻣﻜﺎن ﻳﺠﻤﻊ ﺑﻴﻦ اﻟﺨﺒﺮة واﻻﺑﺘﻜﺎر، وﻳﻀﻊ ﺑﺼﻤﺘﻪ اﻟﻔﺮﻳﺪة ﻓﻲ ﻋﺎﻟﻢ اﻟﺪﻳﻜــــﻮر واﻟﺘﺼﻤﻴــــــﻢ اﻟـــﺪاﺧﻠــﻲ
                
            </p>
      </div>
    </div>
  );
};

export default Achievements;
