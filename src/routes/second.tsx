import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/second')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/second"!</div>
}
