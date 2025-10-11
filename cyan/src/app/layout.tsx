import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ModalProvider } from "../components/ModalProvider";
import { Preloader } from "../components/Preloader";

const peyda = localFont({
  variable: "--font-peyda",
  display: "swap",
  src: [
    { path: "../assets/fonts/peyda/PeydaWebFaNum-Thin.woff2", weight: "100", style: "normal" },
    { path: "../assets/fonts/peyda/PeydaWebFaNum-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "../assets/fonts/peyda/PeydaWebFaNum-Light.woff2", weight: "300", style: "normal" },
    { path: "../assets/fonts/peyda/PeydaWebFaNum-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/peyda/PeydaWebFaNum-Medium.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/peyda/PeydaWebFaNum-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/peyda/PeydaWebFaNum-Bold.woff2", weight: "700", style: "normal" },
    { path: "../assets/fonts/peyda/PeydaWebFaNum-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../assets/fonts/peyda/PeydaWebFaNum-Black.woff2", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Cyandm Digital Experience",
  description: "نسخه Next.js از تم وردپرس سایان برای استقرار Headless با داده‌های نمونه.",
  metadataBase: new URL("https://cyandm.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${peyda.variable} rtl home`}>
        <div className="preloader-div">
          <div className="loader"></div>
        </div>
        <Preloader />
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
