
import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { SetttingsTabs } from '@/components/SettingsTabs'

import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Mail } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">
        Settings
      </h1>
      <SetttingsTabs />
      <div className='mt-6 flex flex-col'>
        <div className='flex justify-between items-center border-b border-zinc-200 pb-5'>
          <div className='space-y-1'>
            <h2 className='text-lg font-medium text-zinc-900'>Personal Info</h2>
            <span className='text-sm text-zinc-500'>Update your photo and personal details here.</span>
          </div>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50'
            >
              Cancel
            </button>
            <button
              type='submit'
              form='settings'
              className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700'
            >
              Save
            </button>
          </div>
        </div>
        <form id="settings" className='mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200'>
          <div className='grid gap-3 grid-cols-form'>
            <label htmlFor='firstName' className='text-sm font-medium text-zinc-700'>Name</label>
            <div className='grid gap-6 grid-cols-2'>
              <InputRoot>
                <InputControl id="firstName" defaultValue="Vanessinha" />
              </InputRoot>
              <InputRoot>
                <InputControl defaultValue="Ferreira" />
              </InputRoot>
            </div>
          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>
            <label htmlFor='emailAddress' className='text-sm font-medium text-zinc-700'>Email address</label>
            <InputRoot>
              <InputPrefix>
                <Mail className='h-5 w-5 text-zinc-500' />
              </InputPrefix>
              <InputControl id="emailAddress" defaultValue="vanessaf689@gmail.com" />
            </InputRoot>
          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>
            <label htmlFor='yourPhoto' className='text-sm font-medium text-zinc-700'>
              Your photo
              <span className='mt-0.5 text-sm font-normal text-zinc-500 block'>This will be displayed on your profile.</span>
            </label>
            <FileInput.Root className='flex items-start gap-5'>
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>
            <label htmlFor='role' className='text-sm font-medium text-zinc-700'>Role</label>
            <InputRoot>
              <InputControl id="role" defaultValue="Product Designer" />
            </InputRoot>
          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>
            <label htmlFor='country' className='text-sm font-medium text-zinc-700'>Country</label>
            <Select placeholder='Select a country...' >
              <SelectItem value='br' text='Brazil' />
              <SelectItem value='us' text='United States' />
            </Select>
          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>
            <label htmlFor='timezone' className='text-sm font-medium text-zinc-700'>Timezone</label>
            <Select placeholder='Select a timezone...' >
              <SelectItem value='utc8' text='Pacific Standard Time (UTC-08:00)' />
              <SelectItem value='utc3' text='America São Paulo (UTC-03:00)' />
            </Select>
          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>
            <label htmlFor='bio' className='text-sm font-medium text-zinc-700'>
              Bio
              <span className='mt-0.5 text-sm font-normal text-zinc-500 block'>Write a short introduction.</span>
            </label>
            <div></div>
          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>
            <label htmlFor='portfolioProjects' className='text-sm font-medium text-zinc-700'>
              Portfolio projects
              <span className='mt-0.5 text-sm font-normal text-zinc-500 block'>Share a few snippets of your work.</span>
            </label>
            <FileInput.Root className='gap-5'>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple/>
            </FileInput.Root>
            <div></div>
          </div>

          <div className='flex justify-end items-center gap-2 pt-5'>
            <button
              type='button'
              className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
