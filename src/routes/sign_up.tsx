import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sign_up')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignIn />
}
