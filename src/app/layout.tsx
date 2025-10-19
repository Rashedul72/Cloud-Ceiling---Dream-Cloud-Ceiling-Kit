import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-sans-bengali",
  subsets: ["bengali"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Cloud Ceiling - Dream Cloud Ceiling Kit | ঢাকায় ডেলিভারি",
  description: "আপনার ঘরকেই বানিয়ে ফেলুন Dream Cloud Ceiling! Plug & Play System সহ, কোনো ইলেকট্রিশিয়ান লাগবে না। মোবাইল অ্যাপ ও ভয়েস কন্ট্রোল সহ।",
  keywords: "cloud ceiling, dream ceiling, bengali, dhaka, delivery, rgb lights, home decoration",
  verification: {
    other: {
      'facebook-domain-verification': '6g9bl9ljj25jx3s5baizigk96tso0i'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1524932278925670');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body
        className={`${notoSansBengali.variable} font-sans antialiased`}
      >
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
