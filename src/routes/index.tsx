import { createFileRoute } from '@tanstack/react-router'
import { SignIn } from '@/components/SignIn'

export const Route = createFileRoute('/')({ component: App })

function App() {
  

  return (
    <div className="h-[80vh]">
        <SignIn/>
    </div>
  )
}
