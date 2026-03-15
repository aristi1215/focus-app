 import type { Tables } from "database.types"

 export const WORK_TYPES: Tables<'work_type'>[] = [
    { id: 1, work_type: 'Deep Work' },
    { id: 2, work_type: 'Study' },
    { id: 3, work_type: 'Creative Work' },
    { id: 4, work_type: 'Writing' },
    { id: 5, work_type: 'Coding' },
    { id: 6, work_type: 'Planning' },
    { id: 7, work_type: 'Meeting' },
    { id: 8, work_type: 'Research' },
    { id: 9, work_type: 'Other' },
  ] as const