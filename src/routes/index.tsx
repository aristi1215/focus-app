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
    <div className="min-h-screen flex flex-col">
      <Header tab={currentTab} setTab={setCurrentTab} />
      <main className="flex-1 overflow-auto md:overflow-visible pb-20 md:pb-0">
        <div hidden={currentTab !== 'focus'} className="h-full">
          <SessionContextProvider>
            <Focus />
          </SessionContextProvider>
        </div>
        <div hidden={currentTab !== 'analytics'} className="h-full">
          <Analytics />
        </div>
        <div hidden={currentTab !== 'insights'} className="h-full">
          <Insights />
        </div>
      </main>
    </div>
  )
}
