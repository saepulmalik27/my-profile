import { useData } from "@/hooks/useData";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const { navigation } = useData();
  
  return (
    <nav className="flex gap-5 items-center">
      <ul className="flex flex-row gap-8">
        {navigation.map((data, key) => (
          <li key={key}>
            <Link href={data.link} className="nav-link group relative py-2 cursor-pointer select-none">
              <span className="text-accent-100 italic text-sm mr-1 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(83,109,254,0.6)]">
                #{key + 1}
              </span>
              {data.label}
            </Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
      <Button asChild>
        <a href="https://drive.google.com/uc?export=download&id=1h5gT2ORJ97Y0hVW0chI0k2PnAgj1qDVJ" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </Button>
    </nav>
  );
}
