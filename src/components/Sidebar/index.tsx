'use client'
import { BarChart, CheckSquare, Cog, Flag, Home, Layers, LifeBuoy, Menu, Search, Users } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "../Input";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { Profile } from "./Profile";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button } from "../Button"

export function Sidebar() {
  return (
    <Collapsible.Root className='flex flex-col gap-6 p-4 border-b border-zinc-200 fixed left-0 top-0 right-0 data-[state=open]:h-screen data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8'>
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content forceMount className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">      
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
      </Collapsible.Content>
    </Collapsible.Root>
  )
}