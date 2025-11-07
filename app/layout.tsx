import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bbogle102",
  description: "뽀글 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {/* background-image: url("/images/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */}
      <body
        className={`antialiased`}
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </body>
    </html>
  );
}
