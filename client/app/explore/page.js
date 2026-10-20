import Link from "next/link";

export const metadata = {
  title: "Explore · Global Wish Tree",
};

export default function ExplorePage() {
  return (
    <main className="simple-page">
      <h1 className="simple-title">Explore</h1>
      <p className="subline">Wishes from around the world will appear here soon.</p>
      <Link href="/" className="btn btn-ghost">
        Back to the tree
      </Link>
    </main>
  );
}