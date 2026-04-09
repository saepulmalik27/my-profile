import { useData } from "@/hooks/useData";
import Link from "next/link";

export function Sidebar() {
  const { social } = useData();

  return (
    <aside className="fixed z-10 bottom-0 left-0 w-fit" id="left">
      <div className="relative z-10">
        <div className="flex flex-col w-[150px] items-center">
          {social.map(({ link, logo: Icon }, key) => (
            <Link key={key} href={link} target="_blank">
              <div className="w-10 h-10 flex justify-center items-center">
                <Icon className="w-5 h-5 hover:text-accent-100 hover:scale-125 hover:translate-y-1 transition-all duration-200" />
              </div>
            </Link>
          ))}
          <div className="w-px h-24 bg-secondary-100"></div>
        </div>
      </div>
    </aside>
  );
}
