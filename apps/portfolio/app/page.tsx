import { HomeExperience } from '../components/scene/home-experience';

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/*
        3D home scene (tickets 01/02/03/05) — room shell, "Two Lights"
        lighting, furniture, avatar + click-to-walk, and the 5 interactions
        (window/light/bed/chair/discovery hint) all live in HomeExperience
        and the components/scene tree it composes. Per ticket 04, the real
        semantic hero text (name/role/description) lives there too, always
        present in the DOM for a11y/SEO/reduced-motion — not just the canvas.
      */}
      <HomeExperience />
    </div>
  );
}
