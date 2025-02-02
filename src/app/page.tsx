"use client"
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { FiChevronDown } from "react-icons/fi";
import Header from "@/components/Header";
import LeftMenu from "@/components/LeftMenu";

export default function Home() {
  return (
    <div className="md:flex">
      <LeftMenu />
      <div className="md:w-5/6">
        <Header />

        <div className="p-4 md:p-8 space-y-8">
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