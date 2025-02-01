import { FiChevronDown } from "react-icons/fi";

export default function Home() {
  return (
    <div>
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