import { createFileRoute } from '@tanstack/react-router'
import { Auth } from '@/components/Auth'

export const Route = createFileRoute('/sign_in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <Auth isUserRegistered={true} />
  )
}
