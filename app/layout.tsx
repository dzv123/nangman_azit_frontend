import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const Spoqa = localFont({
  src: [
    {
      path: "../public/fonts/SpoqaHanSansNeo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/SpoqaHanSansNeo-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SpoqaHanSansNeo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SpoqaHanSansNeo-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SpoqaHanSansNeo-Thin.woff2",
      weight: "200",
      style: "normal",
    },
  ],
  display: "fallback",
  fallback: ["system-ui"],
  variable: "--font-Spoqa",
});

const nanumSquare = localFont({
  src: [
    {
      path: "../public/fonts/NanumSquareRoundOTFL.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NanumSquareRoundOTFR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NanumSquareRoundOTFB.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/NanumSquareRoundOTFEB.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--nanumSquare",
  display: "fallback",
  fallback: ["system-ui"],
});

export const metadata: Metadata = {
  title: "이어드림",
  description: "블록체인 기반 복지대상자 증명서 발급 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`max-w-screen-sm mx-auto ${nanumSquare.variable} ${Spoqa.variable} font-Spoqa`}
      >
        {children}
      </body>
    </html>
  );
}
