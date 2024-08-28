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
//   {
//     id: 5,
//     src: "/vector.svg",
//     url: "#",
//   },
];

const Footer = () => {
  return (
    <div
      className="w-full h-[428px] flex flex-col gap-8 bg-no-repeat bg-cover justify-center items-center"
      style={{ backgroundImage: "url(/rectangle.svg)" }}
    >
      {/* Text Columns */}
      <div className="flex gap-16 justify-between items-start w-full max-w-6xl px-8">
        <div className="flex flex-col gap-4 flex-1">
          <p className="text-[#ffff] font-semibold ">الشروط و الأحكام القانونية</p>
          <p className="text-[#ffff] font-semibold ">الأحكام و الشروط</p>
          <p className="text-[#ffff] font-semibold ">سياسة الخصوصية</p>
          <p className="text-[#ffff] font-semibold ">إرشادات الحماية</p>
          <p className="text-[#ffff] font-semibold ">خريطة الموقع</p>
          <p className="text-[#ffff] font-semibold ">إشعار بملفات تعريف الارتباط</p>
        </div>
        <div className="flex flex-col gap-8 flex-1">
          <div>
            <p className="text-[#ffff] font-bold text-2xl">التواصل</p>
            <h1  className="text-[#C39B69] font-8xl font-bold " dir="ltr">+971 <span> </span> 000 <span> </span> 000 <span> </span> 000</h1>
          </div>
          <div>
            <p className="text-[#ffff] font-bold text-2xl">العنوان</p>
            <h1 className="text-[#C39B69] font-8xl font-bold " >الإمارات العربية المتحدة - أبوظبي - مصفح - 20</h1>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <p className="text-[#ffff] font-semibold">تصميم وتطوير كود ون ديجتال لاب | Code One Digital lap @2024</p>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-between gap-6">
        {socials.map((icon) => (
          <Link key={icon.id} href={icon.url}>
            <Image src={icon.src} alt="Social Icon" width={31} height={30} />
          </Link>
        ))}
        <Link  href={"#"}>
            <Image src={"/Vector.svg"} alt="Social Icon" width={23} height={23} />
          </Link>
      </div>
    </div>
  );
};

export default Footer;
