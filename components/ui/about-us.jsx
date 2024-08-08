import Image from "next/image";

const AboutUs = ()=>{
    return (
        <div className="flex items-center justify-center gap-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* Text container  */}
            <div className="flex flex-col flex-1 items-start">
                    <div className="flex gap-2 items-start justify-center">
                    <Image src={"/exp-mark.png"} width={94} height={94}/>
                    <div className="flex flex-col gap-2">
                        <p className="text-[#9b9b9b9b] font-medium">نبذة</p>
                        <h1 className="text-[#2E1A09] font-bold text-4xl">عنا</h1>
                    </div>
                    </div>
                    <div >
                        <p className="text-[#3C3C3C] font-medium">ﺷﺮﻛﺔ وود ﺑﻴﺲ ﻫﻲ ﺷﺮﻛﺔ ﻣﺘﺨﺼﺼﺔ ﻓﻲ ﻣﺠﺎل ﺗﺼﻨﻴﻊ وﺗﻮزﻳﻊ اﻟﻤﻨﺘﺠﺎت اﻟﺨﺸﺒﻴﺔ
                            ، وﺗﺸﻤﻞ ﻫﺬه اﻟﻤﻨﺘﺠﺎت ﻣﺠﻤﻮﻋﺔ ﻣﺘﻨﻮﻋﺔ ﻣﻦ اﻷﺛﺎث،
                             واﻟﺪﻳﻜﻮرات اﻟﺪاﺧﻠﻴﺔ واﻟﺨﺎرﺟﻴﺔ، واﻷﺑﻮاب، واﻟﻨﻮاﻓﺬ، واﻷرﺿﻴﺎت اﻟﺨﺸﺒﻴﺔ،
                              واﻟﻤﺰﻳﺪ. ﺗﺘﻤﻴﺰ ﺷﺮﻛﺔ اﻟﺨﺸﺐ ﺑﺎﻟﺤﺮﻓﻴﺔ اﻟﻌﺎﻟﻴﺔ واﻟﺠﻮدة ﻓﻲ اﻟﺘﺼﻨﻴﻊ،
                               وﺗﺴﻌﻰ داﺋﻤً ﺎ ﻟﺘﻠﺒﻴﺔ اﺣﺘﻴﺎﺟﺎت اﻟﻌﻤﻼء وﺗﺤﻘﻴﻖ رﺿﺎﻫﻢ.
                                ﺗﻌﺘﺒﺮ اﻟﺸﺮﻛﺔ ﻣﺮﺟﻌً ﺎ ﻓﻲ ﺻﻨﺎﻋﺔ اﻟﺨﺸﺐ وﺗﻌﻤﻞ ﻋﻠﻰ ﺗﻘﺪﻳﻢ ﺣﻠﻮل ﻣﺒﺘﻜﺮة وﻓﻌﺎﻟﺔ
                                 ﻟﻌﻤﻼﺋﻬﺎ ﻓﻲ ﻣﺨﺘﻠﻒ اﻟﻘﻄﺎﻋﺎت واﻟﻤﺠﺎﻻت</p>
                    </div>
            </div>
            {/* Image Container  */}
            <div className="flex items-center justify-center">
                <Image src={"/about-img.png"} width={554} height={341}/>
            </div>
        </div>
    )
}

export default AboutUs;