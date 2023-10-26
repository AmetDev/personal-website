import Link from "next/link";
import "../page.module.css"
const Header = () => {
  return (
    <header className="headerForElement">
      <Link href="/about">About</Link>
      <Link href="/work">Work</Link>
      <Link href="/notebook">Notebook</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/more">More</Link>
    </header>
  );
};

export { Header };
