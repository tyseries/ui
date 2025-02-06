import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaNpm } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Input from "./ui/Input";
import LinkMenu from "./LinkMenu";

export default function Header() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="z-50 px-8 py-4 h-16 flex items-center bg-white sticky top-0">
          <Link href="/" className="flex items-center select-none">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} className="h-8 w-fit aspect-square" />
            <p className="text-xl ml-2 italic">Water UI</p>
          </Link>
          <div className="ml-auto hidden md:flex items-center flex-wrap gap-2">
            <Link href="https://github.com/tyseries/ui" target="_blank" rel="noopener noreferrer" className="w-8 h-8 aspect-square flex items-center justify-center border rounded-lg border-slate-200 hover:bg-slate-200 duration-200">
              <FaGithub className="text-xl" />
            </Link>
            <Link href="https://github.com/tyseries/ui" target="_blank" rel="noopener noreferrer" className="h-8 flex items-center justify-center border rounded-lg border-slate-200 hover:bg-slate-200 duration-200 px-2">
              <FaNpm className="text-xl" /><p className="text-sm ml-2">Install via npm!</p>
            </Link>
          </div>
          <div className="ml-auto md:hidden relative">
            <button onClick={toggleMenu} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-200 duration-200 border border-slate-200">
              <FiMenu className="text-xl" />
            </button>
            {isMenuOpen && (
              <div className="z-50 absolute top-0 right-0 menu bg-white shadow-2xl p-4 w-64 min-h-screen overflow-y-auto">
                <Link href="/" className="flex items-center select-none">
                  <Image src="/logo.svg" alt="Logo" width={100} height={100} className="h-8 w-fit aspect-square"/>
                  <p className="text-xl ml-2 italic">Water UI</p>
                  <button onClick={toggleMenu} className="ml-auto w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-200 duration-200 border border-slate-200">
                    <FiX   className="text-xl" />
                  </button>
                </Link>
                <Input placeholder="Search docs..." className="my-4 shadow-sm w-full" size="sm" />
                <LinkMenu />
                <div className="border-t border-slate-200 my-4" />
                <div className="flex items-center flex-wrap gap-2 text-sm">
                  <Link href="https://github.com/tyseries/ui" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 duration-200 hover:bg-slate-200 flex items-center justify-center rounded-lg">
                    <FaGithub className="text-xl mr-2" /><p>GitHub</p>
                  </Link>
                  <Link href="https://github.com/tyseries/ui" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 duration-200 hover:bg-slate-200 flex items-center justify-center rounded-lg">
                    <FaNpm className="text-xl mr-2" /><p>Install via npm!</p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
    )
}