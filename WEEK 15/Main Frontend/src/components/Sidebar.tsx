import { Logo } from "../icons/Logo";
import { XIcon } from "../icons/XIcon";
import { YouTubeIcon } from "../icons/YouTubeIcon";
import { SideBarItem } from "./SidebarItem";

export function SideBar() {
  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-4 ">
      <div className="flex items-center text-2xl pt-8">
        <div className="pr-2 text-purple-600">
          <Logo />
        </div>
        S-Brain
      </div>
      <div className="pt-4 pl-4">
        <SideBarItem text="X" icon={<XIcon />} />
        <SideBarItem text="YouTube" icon={<YouTubeIcon />} />
      </div>
    </div>
  );
}
