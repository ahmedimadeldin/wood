import { Changa } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const changa = Changa({ subsets: ["arabic"] });

export const metadata = {
  title: "وود بيس",
  description: "تجسيد الجمال في كل قطعة خشبية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={changa.className}>
        
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
