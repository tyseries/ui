import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaNpm } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Input from "./ui/Input";

export default function Header() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="z-50 px-8 py-4 border-b h-16 border-slate-200 flex items-center bg-white/75 backdrop-blur-3xl sticky top-0">
          <Link href="/" className="flex items-center select-none">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} className="h-8 w-fit aspect-square" />
            <p className="text-xl ml-2 italic">Water UI</p>
          </Link>
          <div className="ml-auto hidden md:flex items-center space-x-2">
            <Link href="https://github.com/tyseries/ui" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-slate-200 duration-200 hover:bg-slate-200 flex items-center justify-center rounded-full">
              <FaGithub className="text-xl" />
            </Link>
            <Link href="https://github.com/tyseries/ui" target="_blank" rel="noopener noreferrer" className="h-8 px-4 text-sm border border-slate-200 duration-200 hover:bg-slate-200 flex items-center justify-center rounded-full">
              Install via npm!
            </Link>
          </div>
          <div className="ml-auto md:hidden relative">
            <button onClick={toggleMenu} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-200 duration-200 border border-slate-200">
              <FiMenu className="text-xl" />
            </button>
            {isMenuOpen && (
              <div className="z-50 absolute top-0 right-0 menu bg-white shadow-2xl p-4 w-64 min-h-screen">
                <Link href="/" className="flex items-center select-none">
                  <Image src="/logo.svg" alt="Logo" width={100} height={100} className="h-8 w-fit aspect-square"/>
                  <p className="text-xl ml-2 italic">Water UI</p>
                  <button onClick={toggleMenu} className="ml-auto w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-200 duration-200 border border-slate-200">
                    <FiX   className="text-xl" />
                  </button>
                </Link>
                <Input placeholder="Search docs..." className="my-4 shadow-sm w-full" size="sm" />
                <div className="flex flex-col overflow-y-auto">
                  <p className="mb-2">Documentation</p>
                  <Link href="/docs/introduction" className="text-sm px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600">Introduction</Link>
                  <Link href="/docs/get-to-started" className="text-sm px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600">Get to Stared</Link>
                  <p className="mt-4 mb-2">Components</p>
                  <Link href="/components/button" className="text-sm px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600">Button</Link>
                  <Link href="/components/input" className="text-sm px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600">Input</Link>
                </div>
                <div className="mt-8 flex items-center flex-wrap gap-2 text-sm">
                  <Link href="https://github.com/tyseries/ui" target="_blank" rel="noopener noreferrer" className="px-2 py-1 border border-slate-200 duration-200 hover:bg-slate-200 flex items-center justify-center rounded-full">
                    <FaGithub className="text-xl mr-2" /><p>GitHub</p>
                  </Link>
                  <Link href="https://github.com/tyseries/ui" target="_blank" rel="noopener noreferrer" className="px-2 py-1 border border-slate-200 duration-200 hover:bg-slate-200 flex items-center justify-center rounded-full">
                    <FaNpm className="text-xl mr-2" /><p>Install via npm!</p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
    )
}