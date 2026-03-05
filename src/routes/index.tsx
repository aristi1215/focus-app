import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'
import { Focus } from '@/components/Focus'
import { useState } from 'react'
import { Analytics } from '@/components/Analytics'
import { Insights } from '@/components/Insights'
import type { Tabs } from '@/types/tabs'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [currentTab, setCurrentTab] = useState<Tabs>('focus')

  return (
    <div className="">
      <Header tab={currentTab} setTab={setCurrentTab} />
      {/* render all tabs but hide non‑active ones to avoid unmounting overhead */}
      <div hidden={currentTab !== 'focus'}>
        <Focus />
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
