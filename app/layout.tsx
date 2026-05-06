import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inbuilt Infra - Leading PEB Manufacturer | Premium Pre-Engineered Buildings",
  description: "Trusted PEB manufacturer delivering premium institutional and commercial structures with precision engineering, advanced technology, and uncompromising quality standards.",
  icons: {
    icon: '/ini.png',
    shortcut: '/ini.png',
    apple: '/ini.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MV5X72P4');`}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} antialiased font-roboto`}
      >
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MV5X72P4"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
