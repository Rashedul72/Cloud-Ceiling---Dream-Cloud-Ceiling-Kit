import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-sans-bengali",
  subsets: ["bengali"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Cloud Ceiling - Dream Cloud Ceiling Kit | ঢাকায় ডেলিভারি",
  description: "আপনার ঘরকেই বানিয়ে ফেলুন Dream Cloud Ceiling! Plug & Play System সহ, কোনো ইলেকট্রিশিয়ান লাগবে না। মোবাইল অ্যাপ ও ভয়েস কন্ট্রোল সহ।",
  keywords: "cloud ceiling, dream ceiling, bengali, dhaka, delivery, rgb lights, home decoration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={`${notoSansBengali.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
