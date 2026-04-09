import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { ThemeProvider } from "@/components/providers/theme-provider";

const openSans = Inter({
  subsets: ["latin"],
});

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          openSans.className,
          "text-secondary-100 bg-background-100 min-h-screen flex flex-col"
        )}
      >
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
