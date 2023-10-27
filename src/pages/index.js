import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <h1>Home</h1>
        <Link style={{ marginRight: 10 }} href="/works">
          works
        </Link>
        <Link style={{ marginRight: 10 }} href="/blog">
          blog
        </Link>
        <Link style={{ marginRight: 10 }} href="/contact">
          contact
        </Link>
      </div>
    </>
  );
}
