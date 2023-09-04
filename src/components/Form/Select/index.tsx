'use client'

import * as SelectPrimitve from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

export interface SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder }: SelectProps) {
  return (
    <SelectPrimitve.Root>

      <SelectPrimitve.Trigger className='flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 outline-none'>
        <SelectPrimitve.Value className='text-black' placeholder={placeholder} />
        <SelectPrimitve.Icon>
          <ChevronDown className='h-5 w-5 text-zinc-500' />
        </SelectPrimitve.Icon>
      </SelectPrimitve.Trigger>

      <SelectPrimitve.Portal>
        <SelectPrimitve.Content
          side='bottom'
          position='popper'
          className='z-10 w-[--radix-select-trigger-width] rounded-lg border border-zinc-300 bg-white overflow-hidden'
          sideOffset={8}
        >
          <SelectPrimitve.Viewport>
            {children}            
          </SelectPrimitve.Viewport>
        </SelectPrimitve.Content>
      </SelectPrimitve.Portal>

    </SelectPrimitve.Root>
  )
}