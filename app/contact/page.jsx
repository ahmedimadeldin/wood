"use client";

import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
    return (
      <div className="h-full flex flex-col pt-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <h1 className="text-6xl text-[#3A3A3A] pt-12 pb-6">تواصل معنا</h1>
        <p className="text-[#3A3A3A] font-semibold opacity-65 pb-6">
          شكراً لتواصلكم معنا، يرجى تعبئة النموذج أدناه، وسنقوم بالرد على استفساركم خلال يومي عمل.
        </p>
        <form className="lg:h-full rounded-xl flex gap-8 justify-center py-8">
          <div className="h-full w-1/3 flex flex-col justify-evenly items-start gap-12">
            <span className="p-2 text-[#3A3A3A] font-semibold">النوع</span>
            <span className="p-2 text-[#3A3A3A] font-semibold">الإسم الكامل</span>
            <span className="p-2 text-[#3A3A3A] font-semibold">رقم الهاتف</span>
            <span className="p-2 text-[#3A3A3A] font-semibold">البريد الإلكتروني</span>
            <span className="p-2 text-[#3A3A3A] font-semibold">الموضوع</span>
            <span className="p-2 text-[#3A3A3A] font-semibold">الرسالة</span>
          </div>
          <div className="h-full w-2/3 flex flex-col justify-evenly items-start gap-12">
            {/* Gender Selection Dropdown */}
            <select name="gender" className="w-[40%] p-2 border border-[#2E1A09] rounded-l-full rounded-r-full">
              <option value="">اختر النوع</option>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
            
            {/* Full Name */}
            <input type="text" name="fullname" className="w-[70%] p-2 border border-[#2E1A09] rounded-l-full rounded-r-full" placeholder="ادخل اسمك الكامل" />
            
            {/* Phone Number */}
            <input type="text" name="phone" className="w-[70%] p-2 border border-[#2E1A09] rounded-l-full rounded-r-full" placeholder="ادخل رقم هاتفك" />
            
            {/* Email */}
            <input type="email" name="email" className="w-[70%] p-2 border border-[#2E1A09] rounded-l-full rounded-r-full" placeholder="ادخل بريدك الإلكتروني" />
            
            {/* Subject */}
            <input type="text" name="subject" className="w-[70%] p-2 border border-[#2E1A09] rounded-l-full rounded-r-full" placeholder="ادخل الموضوع" />
            
            {/* Message */}
            <textarea name="message" style={{resize:"none"}} className="w-[70%] p-2 border border-[#2E1A09] rounded-md h-48" placeholder="اكتب رسالتك هنا"></textarea>
            
            {/* Submit Button */}
            <button type="submit" className="w-[70%] bg-[#CAAD5B] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#b39c4e] transition-colors duration-300">إرسال</button>
          </div>
        </form>
        <hr className=" my-16 border-[#CAAD5B]"/>
        <p className="text-[#3A3A3A] font-semibold">تتبنى وود بيس سياسة الباب المفتوح لتعزيز الشفافية والمصداقية والتعاون مع كافة الأطراف بهدف تطوير واستدامة آليات العمل والخدمات المقدمة من خلال تلقي الملاحظات والمقترحات والاستفسارات من كافة شرائح المجتمع.
        يمكنكم إرسال استفساراتكم من خلال خدمة تقديم إستفسار على موقع وود بيس وسيتم الرد عليكم. إذا كنت ترغب بالرد من قبل وود بيس على استفسارك أو شكرك، يرجى إضافة بيانات الاتصال الخاصة بك</p>
        <div className="flex flex-col gap-8 py-20 items-center justify-center">
            <div className="flex flex-col gap-1">
            <h1 className="text-[#3A3A3A] font-bold text-2xl">هل ساعدك محتوى الموقع على الوصول للمطلوب؟</h1>
            <p className="text-[#3A3A3A] font-semibold text-lg opacity-70">أرسل إلينا ملاحظاتك حتى نتمكن من تحسين تجربتك
            </p>
            </div>
            {/* yes no icons */}
            <div className="flex gap-8 items-center justify-around">
             <Link href="#" className="w-[219px] h-[58px] bg-[#C39B69] rounded-full flex items-center gap-2 justify-center text-white text-lg font-semibold">
               نعم<Image src={"/yes.svg"} width={35} height={35}/>
            </Link>
            <Link href="#" className="w-[219px] h-[58px] bg-[#3A3A3A] rounded-full flex items-center gap-2 justify-center text-white text-lg font-semibold">
             لا<Image src={"/no.svg"} width={35} height={35}/>
             </Link>

             </div>
        </div>
      </div>
    );
  };
  
  export default ContactPage;