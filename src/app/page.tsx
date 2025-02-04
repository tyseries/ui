"use client"
import Header from "@/components/Header";
import LeftMenu from "@/components/LeftMenu";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export default function Home() {
  return (
    <div className="md:flex">
      <LeftMenu />
      <div className="md:w-5/6">
        <Header />

        <div className="p-4">
          <div className="bg-white/50 px-4 py-2 rounded-lg text-slate-600 italic flex items-center border border-slate-200 shadow-sm">
            <p>Just go ahead and install Water UI with <Link href="/" className="underline decoration-dotted">npm</Link>!</p>
            <FiX className="ml-auto text-xl" />
          </div>

          <div className="my-8 px-4 flex flex-col md:flex-row md:h-64 md:items-center overflow-hidden">
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
        </div>
      </div>
    </div>
  )
}