import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const openSans = Inter({
  subsets : ['latin']
})


export const metadata: Metadata = {
  title: "Saepul Malik",
  description: "Frontend Web Developer | Saepul Malik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(openSans.className, 'text-secondary-100 bg-background-100 min-h-screen flex flex-col')}
      >
        {children}
      </body>
    </html>
  );
}
