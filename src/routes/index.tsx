import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'
import { Focus } from '@/components/Focus'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="">
      <Header />
      <Focus />
    </div>
  )
}
