import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'
import { Focus } from '@/components/Focus'
import { useState } from 'react'
import { Analytics } from '@/components/Analytics'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [currentTab, setCurrentTab] = useState<
    'focus' | 'analytics' | 'insights'
  >('analytics')

  return (
    <div className="">
      <Header />
      {currentTab == 'focus' ? (
        <Focus />
      ) : currentTab == 'analytics' ? (
        <Analytics />
      ) : (
        ''
      )}
    </div>
  )
}
