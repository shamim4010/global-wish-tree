import ApiStatus from "@/components/dev/ApiStatus";

export default function HomePage() {
  return (
    <main className="hero">
      <div className="seed" aria-hidden="true" />
      <h1 className="tagline">Every wish makes the tree grow.</h1>
      <ApiStatus />
    </main>
  );
}