"use client"
import Header from "@/components/Header";
import LeftMenu from "@/components/LeftMenu";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="md:flex">
      <LeftMenu />
      <div className="md:w-5/6">
        <Header />

        <div className="p-4">
          <Image src="/404.svg" alt="" width={100} height={100} className="mx-auto select-none md:w-1/2 w-full" />
        </div>
      </div>
    </div>
  )
}