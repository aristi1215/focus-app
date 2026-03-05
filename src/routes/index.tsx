import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'
import { Focus } from '@/components/Focus'
import { useState } from 'react'
import { Analytics } from '@/components/Analytics'
import { Insights } from '@/components/Insights'
import type { Tabs } from '@/types/tabs'
import { SessionContextProvider } from '@/context/SessionContext'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [currentTab, setCurrentTab] = useState<Tabs>('focus')

  return (
    <div className="">
      <Header tab={currentTab} setTab={setCurrentTab} />
      <div hidden={currentTab !== 'focus'}>
        <SessionContextProvider>
          <Focus />
        </SessionContextProvider>
      </div>
      <div hidden={currentTab !== 'analytics'}>
        <Analytics />
      </div>
      <div hidden={currentTab !== 'insights'}>
        <Insights />
      </div>
    </div>
  )
}
