import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/providers/ToastProvider";
import { NextUIProvider } from "@nextui-org/system";
import Navbar from "../components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <NextUIProvider>
          <ToastProvider>{children}</ToastProvider>
        </NextUIProvider>
        {/* <Navbar /> */}
      </body>
    </html>
  );
}
