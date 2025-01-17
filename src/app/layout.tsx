import type { Metadata } from "next";
import { NextUITheme } from "@/client_theme";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-VariableFont_wght.woff2",
    },
  ],
});

export const metadata: Metadata = {
  title: "HostSpacing - Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
          <NextUITheme>{children}</NextUITheme>
      </body>
    </html>
  );
}
