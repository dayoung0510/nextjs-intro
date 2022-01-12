import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={`${router.pathname === "/" && "active"}`}>Home</a>
      </Link>
      <Link href="/about">
        <a className={`${router.pathname === "/about" && "active"}`}>About</a>
      </Link>

      <style jsx>{`
        nav {
          background-color: tomato;
          padding: 1rem;
        }
        a {
          color: white;
          text-decoration: none;
          margin-right: 1rem;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
