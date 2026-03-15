 import type { Tables } from "database.types"

 export const WORK_LOCATIONS: Tables<'locations'>[] = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Library' },
    { id: 3, name: 'Café' },
    { id: 4, name: 'Office' },
    { id: 5, name: 'Other' },
  ] as const