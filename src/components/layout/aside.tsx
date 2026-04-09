import Link from "next/link";

export function Aside() {
  return (
    <aside className="fixed z-10 bottom-0 right-0 w-fit" id="rigt">
      <div className="flex w-[150px] flex-col items-center gap-5 justify-center">
        <Link
          href={"mailto:saepulalmalik@gmail.com"}
          className="[writing-mode:vertical-lr] hover:text-accent-100 hover:translate-y-1"
        >
          saepulalmalik@gmail.com
        </Link>
        <div className="w-px h-24 bg-secondary-100"></div>
      </div>
    </aside>
  );
}
