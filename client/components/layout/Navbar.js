import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="Main">
        <Link href="/" className="brand">
          <span className="brand-dot" aria-hidden="true" />
          Global Wish Tree
        </Link>

        <Link href="/explore" className="nav-link">
          Explore
        </Link>
      </nav>
    </header>
  );
}