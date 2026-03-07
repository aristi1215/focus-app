export type Tabs = 'focus' | 'analytics' | 'insights'
export type WorkCategories =
  | 'Deep Work'
  | 'Creative Work'
  | 'Writing'
  | 'Study'
  | 'Coding'
  | 'Planning'
  | 'Meeting'
  | 'Research'
  | 'Other'

export interface SessionInfo {
  sessionId: string
  startTime: string
  endTime: string
  duration: number
  flowStateReached: boolean
  focusLevel: number
  typeOfWork: WorkCategories
  additionalNotes?: string
}
