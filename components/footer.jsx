import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    id: 1,
    src: "/facebook.svg",
    url: "#",
  },
  {
    id: 2,
    src: "/tik.svg",
    url: "#",
  },
  {
    id: 3,
    src: "/link.svg",
    url: "#",
  },
  {
    id: 4,
    src: "/insta.svg",
    url: "#",
  },
  // {
  //   id: 5,
  //   src: "/Vector.svg",
  //   url: "#",
  // },
];

const Footer = () => {
  return (
    <div
      className="w-full min-h-[428px] flex flex-col gap-4 sm:gap-6 md:gap-8 bg-no-repeat bg-cover justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12"
      style={{ backgroundImage: "url(/rectangle.svg)" }}
    >
      {/* Text Columns */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16 justify-between items-start w-full max-w-6xl">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 flex-1">
          <p className="text-white font-semibold text-sm sm:text-base">الشروط و الأحكام القانونية</p>
          <p className="text-white font-semibold text-sm sm:text-base">الأحكام و الشروط</p>
          <p className="text-white font-semibold text-sm sm:text-base">سياسة الخصوصية</p>
          <p className="text-white font-semibold text-sm sm:text-base">إرشادات الحماية</p>
          <p className="text-white font-semibold text-sm sm:text-base">خريطة الموقع</p>
          <p className="text-white font-semibold text-sm sm:text-base">إشعار بملفات تعريف الارتباط</p>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 flex-1 mt-4 md:mt-0">
          <div>
            <p className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">التواصل</p>
            <h1 className="text-[#C39B69] text-base sm:text-lg md:text-xl lg:text-2xl font-bold" dir="ltr">+971 000 000 000</h1>
          </div>
          <div>
            <p className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">العنوان</p>
            <h1 className="text-[#C39B69] text-base sm:text-lg md:text-xl lg:text-2xl font-bold">الإمارات العربية المتحدة - أبوظبي - مصفح - 20</h1>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4 sm:mt-6 md:mt-8">
        <p className="text-white font-semibold text-xs sm:text-sm md:text-base">تصميم وتطوير كود ون ديجتال لاب | Code One Digital lap @2024</p>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap mt-4 sm:mt-6 md:mt-8">
        {socials.map((icon) => (
          <Link key={icon.id} href={icon.url}>
            <Image src={icon.src} alt="Social Icon" width={31} height={30} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;