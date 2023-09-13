
import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { SetttingsTabs } from '@/components/SettingsTabs'

import { Button } from '@/components/Button'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      <SetttingsTabs />
      <div className='mt-6 flex flex-col'>
        <div className='flex flex-col lg:flex-row justify-between gap-4 lg:items-center border-b border-zinc-200 dark:border-zinc-700 pb-5'>
          <div className='space-y-1'>
            <h2 className='text-lg font-medium text-zinc-900 dark:text-zinc-100'>Personal Info</h2>
            <span className='text-sm text-zinc-500 dark:text-zinc-400'>Update your photo and personal details here.</span>
          </div>
          <div className='flex items-center gap-2'>
            <Button
              type='button'
              variant='outline'
            >
              Cancel
            </Button>
            <Button
              type='submit'
              form='settings'
            >
              Save
            </Button>
          </div>
        </div>
        <form id="settings" className='mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700'>
          <div className='grid gap-3 lg:grid-cols-form'>
            <label htmlFor='firstName' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>Name</label>
            <div className='lg:grid flex flex-col gap-6 lg:grid-cols-2'>
              <InputRoot>
                <InputControl id="firstName" defaultValue="Vanessinha" />
              </InputRoot>
              <div className='flex flex-col gap-3 lg:block'>
                <label htmlFor='lastName' className='text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only'>Last Name</label>
                <InputRoot>
                  <InputControl id="lastName" defaultValue="Ferreira" />
                </InputRoot>
              </div>
            </div>
          </div>

          <div className='lg:grid flex flex-col gap-3 lg:grid-cols-form pt-5'>
            <label htmlFor='emailAddress' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>Email address</label>
            <InputRoot>
              <InputPrefix>
                <Mail className='h-5 w-5 text-zinc-500 dark:text-zinc-400' />
              </InputPrefix>
              <InputControl id="emailAddress" defaultValue="vanessaf689@gmail.com" />
            </InputRoot>
          </div>

          <div className='lg:grid flex flex-col gap-3 lg:grid-cols-form pt-5'>
            <label htmlFor='yourPhoto' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Your photo
              <span className='mt-0.5 text-sm font-normal text-zinc-500 dark:text-zinc-400 block'>This will be displayed on your profile.</span>
            </label>
            <FileInput.Root className='flex lg:flex-row flex-col lg:items-start gap-5'>
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className='lg:grid flex flex-col gap-3 lg:grid-cols-form pt-5'>
            <label htmlFor='role' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>Role</label>
            <InputRoot>
              <InputControl id="role" defaultValue="Product Designer" />
            </InputRoot>
          </div>

          <div className='lg:grid flex flex-col gap-3 lg:grid-cols-form pt-5'>
            <label htmlFor='country' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>Country</label>
            <Select placeholder='Select a country...' >
              <SelectItem value='br' text='Brazil' />
              <SelectItem value='us' text='United States' />
            </Select>
          </div>

          <div className='lg:grid flex flex-col gap-3 lg:grid-cols-form pt-5'>
            <label htmlFor='timezone' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>Timezone</label>
            <Select placeholder='Select a timezone...' >
              <SelectItem value='utc8' text='Pacific Standard Time (UTC-08:00)' />
              <SelectItem value='utc3' text='America São Paulo (UTC-03:00)' />
            </Select>
          </div>

          <div className='lg:grid flex flex-col gap-3 lg:grid-cols-form pt-5'>
            <label htmlFor='bio' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Bio
              <span className='mt-0.5 text-sm font-normal text-zinc-500 dark:text-zinc-400 block'>Write a short introduction.</span>
            </label>
            <div className='space-y-3'>
              <div className='flex flex-col lg:grid gap-3 lg:grid-cols-2'>
                <Select placeholder='' defaultValue='normal' >
                  <SelectItem value='normal' text='Normal Text' />
                  <SelectItem value='md' text='Markdown' />
                </Select>
                <div className='flex items-center gap-1'>
                  <Button type="button" variant='ghost'>
                    <Bold className="h-4 w-4 text-zinc-500 dark:text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant='ghost'>
                    <Italic className="h-4 w-4 text-zinc-500 dark:text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant='ghost'>
                    <Link className="h-4 w-4 text-zinc-500 dark:text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant='ghost'>
                    <List className="h-4 w-4 text-zinc-500 dark:text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant='ghost'>
                    <ListOrdered className="h-4 w-4 text-zinc-500 dark:text-zinc-400" strokeWidth={3} />
                  </Button>
                </div>
              </div>
              <Textarea
                id='bio' 
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development." 
              />
            </div>
          </div>

          <div className='lg:grid flex flex-col gap-3 lg:grid-cols-form pt-5'>
            <label htmlFor='portfolioProjects' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Portfolio projects
              <span className='mt-0.5 text-sm font-normal text-zinc-500 dark:text-zinc-400 block'>Share a few snippets of your work.</span>
            </label>
            <FileInput.Root className='gap-5'>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple/>
            </FileInput.Root>
            <div></div>
          </div>

          <div className='flex justify-end items-center gap-2 pt-5'>
          <Button
              type='button'
              variant='outline'
            >
              Cancel
            </Button>
            <Button
              type='submit'
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
