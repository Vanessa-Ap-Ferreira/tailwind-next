'use client' 
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './TabItem'

export function SetttingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('tab1')

  return (
    <>
      <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
        <Tabs.List className='mt-6 flex w-full items-center gap-4 border-b border-zinc-200'>
          <TabItem value='tab1' isSelected={currentTab === 'tab1'} title='My details'/>
          <TabItem value='tab2' isSelected={currentTab === 'tab2'} title='Profile'/>
          <TabItem value='tab3' isSelected={currentTab === 'tab3'} title='Password'/>
          <TabItem value='tab4' isSelected={currentTab === 'tab4'} title='Team'/>
          <TabItem value='tab5' isSelected={currentTab === 'tab5'} title='Plan'/>
          <TabItem value='tab6' isSelected={currentTab === 'tab6'} title='Billing'/>
          <TabItem value='tab7' isSelected={currentTab === 'tab7'} title='Email'/>
          <TabItem value='tab8' isSelected={currentTab === 'tab8'} title='Notifications'/>
          <TabItem value='tab9' isSelected={currentTab === 'tab9'} title='Integrations'/>
          <TabItem value='tab10' isSelected={currentTab === 'tab10'} title='API'/>
        </Tabs.List>
      </Tabs.Root>
    </>
  )
}
