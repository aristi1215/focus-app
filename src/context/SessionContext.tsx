import { createContext, useContext, useState, useEffect } from 'react'
import type { SessionInfo } from '../types/tabs'

export const SessionContext = createContext<
  [SessionInfo, React.Dispatch<React.SetStateAction<SessionInfo>>] | undefined
>(undefined)

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
  const [session, setSession] = useState<SessionInfo>({
    sessionId: '',
    startTime: '',
    endTime: '',
    duration: 0,
    flowStateReached: false,
    focusLevel: 1,
    typeOfWork: 'Coding',
    additionalNotes: '',
  })
  useEffect(() => {
    console.log('Session context updated:', session)
  }, [session])

  return (
    <SessionContext.Provider value={[session, setSession]}>
      {children}
    </SessionContext.Provider>
  )
}
