import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ha Bach",
  description: "Ha Bach's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 px-5">
            <div className="col-span-12 bg-white lg:col-span-3 rounded-2xl p-4 text-center">
                <Sidebar />
            </div>
            <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl">

            </div>
        </div>

      </body>
    </html>
  );
}
