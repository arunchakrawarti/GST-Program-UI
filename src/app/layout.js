import "./globals.css";
import { Kumbh_Sans, Inter } from "next/font/google";

const kumbh = Kumbh_Sans({ subsets: ["latin"], variable: "--font-kumbh" });

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


export const metadata = {
  title: "Dhan Trade",
  description: "Dhan Trade - Empowering Smarter Trading with Advanced Algo Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kumbh.variable} `}>
        {children}
      </body>
    </html>
  );
}
