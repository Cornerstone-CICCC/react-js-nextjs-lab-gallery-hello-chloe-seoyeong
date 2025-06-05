import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-4 bg-blue-700 text-white">
      <div>LOGO</div>
      <nav>
        <menu className="flex gap-6">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/gallery"}>Gallery</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
