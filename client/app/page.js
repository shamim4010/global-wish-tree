import Particles from "@/components/home/Particles";
import HeroActions from "@/components/home/HeroActions";
import Stats from "@/components/home/Stats";
import ApiStatus from "@/components/dev/ApiStatus";

export default function HomePage() {
  return (
    <main className="hero">
      <Particles />

      <div className="hero-content">
        <div className="seed" aria-hidden="true" />

        <h1 className="tagline">Every wish makes the tree grow.</h1>
        <p className="subline">A place where people leave their wishes.</p>

        <HeroActions />

        {/* Real statistics will be connected in a later phase. */}
        <Stats stats={null} />
      </div>

      {process.env.NODE_ENV === "development" && <ApiStatus />}
    </main>
  );
}