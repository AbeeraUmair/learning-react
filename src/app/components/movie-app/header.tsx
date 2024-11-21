import React from 'react'
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
const Header = () => {
  return (
    <div>
       <nav style={{width:"98%"}} className="flex justify-between text-xl  m-2 text-red-600  bg-black rounded-lg p-4 md:text-2xl lg:text-3xl m-4 ">
      <CiMenuBurger />
      <h1 className="text-2xl font-bold">Netflix</h1>
      <div className="flex justify-center gap-4 text-xl ">
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
    </div>
  )
}

export default Header
