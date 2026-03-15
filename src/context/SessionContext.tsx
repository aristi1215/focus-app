import { createContext, useContext, useState, useEffect } from 'react'
import type { TablesInsert } from 'database.types'

type ContextType = {
  session: TablesInsert<'focus_sessions'>
  setSession: React.Dispatch<React.SetStateAction<TablesInsert<'focus_sessions'>>>
}

export const SessionContext = createContext<ContextType | undefined>(undefined)

export const useSessionContext = () => {
  const session = useContext(SessionContext)
  if (!session) {
    throw new Error('useSession must be used within a SessionContext.Provider')
  }
  return session
}

export const SessionContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [session, setSession] = useState<TablesInsert<'focus_sessions'>>({
    start_date: '',
    end_date: '',
    duration: 0,
    flow_reached: false,
    focus_level: 1,
    work_type: 1,
    notes: '',
    locations: 1,
    user_id: ''
  })
  useEffect(() => {
    console.log('Session context updated:', session)
  }, [session])

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  )
}
