import { createFileRoute } from '@tanstack/react-router'
import { Auth } from '@/components/Auth'

export const Route = createFileRoute('/sign_up')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Auth isUserRegistered={false} />
}
