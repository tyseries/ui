import Image from "next/image";
import Link from "next/link";
import Input from "./ui/Input";

export default function LeftMenu() {
    return (
      <div className="bg-white hidden md:block md:w-1/6 border-r border-slate-200 min-h-screen max-h-screen p-4 sticky top-0 overflow-hidden overflow-y-auto">
        <Link href="/" className="flex items-center select-none">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} className="h-8 w-fit aspect-square" />
          <p className="text-xl ml-2 italic">Water UI</p>
        </Link>
        <Input placeholder="Search docs..." className="my-8 shadow-sm w-full" size="sm" />
        <div className="flex flex-col overflow-y-auto">
          <p className="mb-2">Documentation</p>
          <Link href="/docs/introduction" className="outline-none text-sm px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600 focus-visible:bg-slate-200">Introduction</Link>
          <Link href="/docs/get-to-started" className="outline-none text-sm px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600 focus-visible:bg-slate-200">Get to Stared</Link>
          <p className="mt-4 mb-2">Components</p>
          <Link href="/components/button" className="outline-none text-sm px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600 focus-visible:bg-slate-200">Button</Link>
          <Link href="/components/input" className="outline-none text-sm px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600 focus-visible:bg-slate-200">Input</Link>
        </div>
      </div>
    )
}