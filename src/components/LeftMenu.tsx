import Image from "next/image";
import Link from "next/link";
import Input from "./ui/Input";
import LinkMenu from "./LinkMenu";

export default function LeftMenu() {
    return (
      <div className="bg-white hidden md:block md:w-1/6 border-r border-slate-200 min-h-screen max-h-screen p-4 sticky top-0 overflow-hidden overflow-y-auto">
        <Link href="/" className="flex items-center select-none">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} className="h-8 w-fit aspect-square" />
          <p className="text-xl ml-2 italic">Water UI</p>
        </Link>
        <Input placeholder="Search docs..." className="my-8 shadow-sm w-full" size="sm" />
        <LinkMenu />
      </div>
    )
}