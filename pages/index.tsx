import { AiOutlineTwitter } from "react-icons/ai"; 
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface SidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: SidebarButton[] = [
  {
    title:"Home",
    icon:
  }
]

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 flex justify-start pt-8">
        <div className="text-4xl h-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all">
          <AiOutlineTwitter />
        </div>
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
      <div className="col-span-3"></div>
    </div>
  )
}
