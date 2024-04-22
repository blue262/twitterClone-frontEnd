import React from "react";
import { FaTwitter } from "react-icons/fa";
import { CiHome, CiHashtag, CiBellOn, CiUser } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";

import { PiBookmarkSimpleLight } from "react-icons/pi";
import FeedCard from "./components/FeedCards";

interface TwitteSidebarButton {
  title: String,
  icon: React.ReactNode
}


const SidebarMenuItems: TwitteSidebarButton[] = [
  {
    title: "Home",
    icon: <CiHome />
  },
  {
    title: "Explore",
    icon: <CiHashtag />
  },
  {
    title: "Notifications",
    icon: <CiBellOn />
  },
  {
    title: "Message",
    icon: <FaRegMessage />
  },
  {
    title: "Bookmarks",
    icon: <PiBookmarkSimpleLight />
  },
  {
    title: "Profile",
    icon: < CiUser />
  }
]

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-full px-48">
      <div className="col-span-3">
        <div className="p-3 text-xl ml-3"><FaTwitter /></div>
        <div>
          <ul className="flex flex-col gap-4 items-center mt-3 pr-3">
            {SidebarMenuItems.map(({ title, icon }, index) => (
              <li key={index} className="flex gap-3 items-center justify-start w-full px-3 ">
                <span className="text-2xl ml-2">{icon}</span>
                <span className="font-bold">{title}</span>
              </li>
            ))}
          </ul>
          <div className="px-2 pr-3 w-[80%] flex items-center justify-center font-bold">
            <button className="mt-5 bg-[#1d9bf0] rounded-full p-3 w-full">Tweet</button>
          </div>
        </div>
      </div>
      <div className="col-span-6 border-l-[0.2px] border-r-[0.2px] border-slate-400 ">
        <div className="h-screen overflow-y-scroll">
          <FeedCard />
        </div>
      </div>
      <div className="col-span-3">
        news shit
      </div>
    </div>
  );
}
