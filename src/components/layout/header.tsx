import Image from "next/image";
import { Navigation } from "@/components/layout/navigation";

export function Header() {
  return (
    <header className="px-10 md:px-20 py-5 sticky top-0 z-40 bg-background-100/80 backdrop-blur-md border-b border-background-300 flex justify-between items-center transition-all duration-300">
      <div>
        <Image
          src={"/assets/logo/logo.png"}
          width={40}
          height={40}
          alt="logo"
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>
      <Navigation />
    </header>
  );
}
