"use client"
import { useState } from 'react';
import Header from "@/components/Header";
import LeftMenu from "@/components/LeftMenu";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false); // クリックで非表示にする
  };

  return (
    <div className="md:flex">
      <LeftMenu />
      <div className="md:w-5/6">
        <Header />

        <div className="p-4">
          {isVisible && (
            <div className="mb-8 bg-white/50 px-4 py-2 rounded-lg text-slate-600 italic flex items-center border border-slate-200 shadow-sm">
              <p>Just go ahead and install Water UI with{' '}<Link href="/" className="underline decoration-dotted">npm</Link>!</p>
              <button className="ml-auto p-0" onClick={handleClose}><FiX className="text-xl" /></button>
            </div>
          )}

          <div className="px-4 flex flex-col md:flex-row md:h-64 md:items-center overflow-hidden">
            <div className="md:hidden md:w-1/2">
              <Image src="/animal.svg" alt="Animal" width={100} height={100} className="w-full" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl font-semibold">Super Easy-to-Use React UI Components</h1>
              <div className="flex flex-row items-center mt-8 gap-2">
                <Link href="/docs/get-started"><div className="px-4 py-2 rounded-lg bg-slate-800 text-white font-semibold w-fit">Get Started</div></Link>
                <Link href="https://github.com/tyseries/ui" target="_blank" rel="noopener noreferrer"><div className="px-4 py-2 rounded-lg bg-slate-200 font-semibold w-fit flex items-center"><FaGithub className="text-xl mr-2" />GitHub</div></Link>
              </div>
            </div>
            <div className="md:w-1/2 hidden md:flex">
              <Image src="/animal.svg" alt="Animal" width={100} height={100} className="w-full" />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="w-8 h-8 aspect-square bg-primary text-white rounded-full flex items-center justify-center font-semibold text-xl mx-auto mb-4">1</div>
              <h2 className="font-semibold text-xl text-center">Easy to Install</h2>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="w-8 h-8 aspect-square bg-primary text-white rounded-full flex items-center justify-center font-semibold text-xl mx-auto mb-4">2</div>
              <h2 className="font-semibold text-xl text-center">Easy to Customize</h2>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="w-8 h-8 aspect-square bg-primary text-white rounded-full flex items-center justify-center font-semibold text-xl mx-auto mb-4">3</div>
              <h2 className="font-semibold text-xl text-center">Works great with Tailwind CSS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}