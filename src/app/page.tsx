import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function Home() {
  return (
    <div className="md:flex">
      <div className="hidden md:block md:w-1/6 border-r border-slate-200 min-h-screen max-h-screen p-4 sticky top-0 overflow-hidden overflow-y-auto">
        <Link href="/" className="flex items-center select-none">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} className="h-8 w-fit aspect-square" />
          <p className="text-xl ml-2 italic">Water UI</p>
        </Link>
        <Input placeholder="Search docs..." className="my-8 shadow-sm w-full" size="sm" />
        <div className="flex flex-col overflow-y-auto">
        <p className="mb-2">Documentation</p>
          <Link href="/docs/introduction" className="text-sm px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600">Introduction</Link>
          <Link href="/docs/get-to-started" className="text-sm px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600">Get to Stared</Link>
          <p className="mt-4 mb-2">Components</p>
          <Link href="/components/button" className="text-sm px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600">Button</Link>
          <Link href="/components/input" className="text-sm px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600">Input</Link>
        </div>
      </div>

      <div className="md:w-5/6">
        <div className="px-8 py-4 border-b h-16 overflow-hidden border-slate-200 flex items-center bg-white/50 backdrop-blur-3xl sticky top-0">
          <Link href="/" className="flex items-center select-none">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} className="h-8 w-fit aspect-square" />
            <p className="text-xl ml-2 italic">Water UI</p>
          </Link>
          <div className="ml-auto flex items-center space-x-2">
            <Link href="https://github.com/tyseries/ui" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-slate-200 duration-200 hover:bg-slate-200 flex items-center justify-center rounded-full">
              <FaGithub className="text-xl" />
            </Link>
            <Link href="https://github.com/tyseries/ui" target="_blank" rel="noopener noreferrer" className="h-8 px-4 text-sm border border-slate-200 duration-200 hover:bg-slate-200 flex items-center justify-center rounded-full">
              Install via npm!
            </Link>
          </div>
        </div>

        <div className="w-1/2 my-8 md:mx-auto mx-4 space-y-8">
          <div className="space-x-2 flex">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div>

          <div className="space-y-4 flex flex-col">
            <Input placeholder="Input here" />
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
    </div>
  )
}