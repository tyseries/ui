import Link from "next/link";

export default function LinkMenu() {
    return (
        <div className="flex flex-col">
            <p className="mb-2 font-semibold">Documentation</p>
            <Link href="/docs/introduction" className="text-sm outline-none px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600 focus-visible:bg-slate-200">Introduction</Link>
            <Link href="/docs/get-started" className="text-sm outline-none px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600 focus-visible:bg-slate-200">Get Stared</Link>
            <p className="mt-4 mb-2 font-semibold">Components</p>
            <Link href="/components/button" className="text-sm outline-none px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600 focus-visible:bg-slate-200">Button</Link>
            <Link href="/components/input" className="text-sm outline-none px-4 py-2 rounded-full hover:bg-slate-200 duration-200 text-slate-600 focus-visible:bg-slate-200">Input</Link>
        </div>
    )
}