import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaNpm } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <div className="px-8 py-4 border-b h-16 overflow-hidden border-slate-200 flex items-center bg-white/50 backdrop-blur-2xl">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} className="h-8 w-fit" />
        <p className="font-semibold text-xl ml-2 italic">Water UI</p>
        <div className="ml-auto flex items-center space-x-2">
          <Link href="https://github.com/tyseries/ui" target="_blank" rel="noopener noreferrer" className="w-8 h-8 duration-200 hover:bg-slate-200 flex items-center justify-center rounded-lg">
            <FaGithub className="text-xl" />
          </Link>
          <Link href="https://github.com/tyseries/ui" target="_blank" rel="noopener noreferrer" className="w-8 h-8 duration-200 hover:bg-slate-200 flex items-center justify-center rounded-lg">
            <FaNpm className="text-xl" />
          </Link>
        </div>
      </div>

      <div className="w-1/2 my-8 md:mx-auto mx-4 space-y-8">
        <div className="space-x-2 flex">
          <button className="px-4 py-2 rounded-full bg-primary font-semibold text-white outline-none">Primary</button>
          <button className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold  outline-none">Secondary</button>
        </div>

        <div className="space-y-4 flex flex-col">
          <input className="px-4 py-2 rounded-lg border border-slate-200 placeholder:text-slate-400 duration-200 focus-visible:border-primary outline-none focus-visible:ring-2 ring-primary/20" placeholder="Input here..." />
        </div>

        <div>
          <label htmlFor="country" className="block text-slate-400 text-sm font-semibold mb-2">Country</label>
          <div className="relative w-64">
            <select id="country" className="block w-full px-4 bg-white py-2 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none focus:ring-2 outline-none duration-200 focus:border-primary">
              <option value="">Select a country</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
            </select>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
              <FiChevronDown className="h-4 w-4 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}