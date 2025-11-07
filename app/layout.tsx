import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "영원한 102기 뽀글즈🫧",
  description: "뽀글 프로젝트",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "영원한 102기 뽀글즈🫧",
    description: "뽀글 프로젝트",
    images: "/images/102.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" style={{ colorScheme: "light" }}>
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
          colorScheme: "light",
        }}
      >
        {children}
      </body>
    </html>
  );
}
