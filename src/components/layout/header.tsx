import Image from "next/image";
import { Navigation } from "@/components/layout/navigation";

export function Header() {
  return (
    <header className="px-20 py-5 sticky z-10 inset-0 bg-background-100 shadow flex justify-between">
      <div>
        <Image
          src={"/assets/logo/logo.png"}
          width={40}
          height={40}
          alt="logo"
          className="cursor-pointer"
        />
      </div>
      <Navigation />
    </header>
  );
}
