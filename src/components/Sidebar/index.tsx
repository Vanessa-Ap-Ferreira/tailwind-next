import { BarChart, CheckSquare, Cog, Flag, Home, Layers, LifeBuoy, Search, Users } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "../Input";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { Profile } from "./Profile";
import { UsedSpaceWidget } from "./UsedSpaceWidget";

export function Sidebar() {
  return (
    <aside className='flex flex-col gap-6 border-r border-zinc-200 px-5 py-8'>
      <Logo />
      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500"/>
        </InputPrefix>
        <InputControl placeholder="Search" />
      </InputRoot>
      <nav className="space-y-0.5">
        <NavItem icon={Home} title="Home" />
        <NavItem icon={BarChart} title="Dashboard" />
        <NavItem icon={Layers} title="Projects" />
        <NavItem icon={CheckSquare} title="Tasks" />
        <NavItem icon={Flag} title="Reporting" />
        <NavItem icon={Users} title="Users" />
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <nav className="flex flex-col gap-1">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  )
}