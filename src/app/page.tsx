import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

export default function Home() {
  return (
    <div >
    <nav className="flex justify-between text-2xl m-2 bg-gray-200 rounded-lg p-4 md:text-2xl lg:text-3xl">
      <CiMenuBurger />
      <h1>Netflix</h1>
      <div className="flex justify-center gap-4 ">
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
    </div>
  );
}
