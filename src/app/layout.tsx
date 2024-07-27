import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Academy",
  description: "Here, learning and exploring music classes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
       <head>
          
       <link rel="icon" href="/logo.png" />
       </head>
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
           <Navbar></Navbar>
        </div>
          {children}
        </body>
    </html>
  );
}
