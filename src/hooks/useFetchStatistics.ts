import { supabase } from "@/supabase/client"
import { useEffect, useState } from "react"
import { useAuthContext } from "@/context/AuthContext"
import type { Tables } from "../../database.types.ts"

type FocusSession = Tables<'focus_sessions'>

type BestFocusTime = {
  hour: number
  avg_focus_level: number
  sessions_count: number
} | null

type UseFetchFocusSessionReturn = {
  bestFocusTime: BestFocusTime
  allSessions: FocusSession[]
  loading: boolean
  error: string | null
}



export const useFetchStatistics = (): UseFetchFocusSessionReturn => {

  const [bestFocusTime, setBestFocusTime] = useState<BestFocusTime>(null)
  const [allSessions, setAllSessions] = useState<FocusSession[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuthContext()

  useEffect(() => {
    if (!user?.id) {
      setLoading(false)
      return
    }

    const fetchFocusData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Query para obtener todas las sesiones del usuario
        const { data, error: queryError } = await supabase
          .from('focus_sessions')
          .select('start_date, focus_level')
          .eq('user_id', user.id)
          // No ordenamos, el cliente lo hace

        if (queryError) {
          throw new Error(queryError.message)
        }

        if (data.length === 0) {
          setAllSessions([])
          setBestFocusTime(null)
          return
        }

        setAllSessions(data)

        // Agrupar por hora del día y calcular promedio de focus_level
        const focusByHour: Record<number, { total: number; count: number }> = {}

        data.forEach((session) => {
          const hour = new Date(session.start_date).getHours()
          const focusLevel = session.focus_level

          focusByHour[hour].total += focusLevel
          focusByHour[hour].count += 1
        })

        // Encontrar la hora con mejor promedio de focus_level
        let bestHour: BestFocusTime = null
        let bestAverage = 0

        Object.entries(focusByHour).forEach(([hour, data]) => {
          const average = data.total / data.count
          if (average > bestAverage) {
            bestAverage = average
            bestHour = {
              hour: parseInt(hour),
              avg_focus_level: Math.round(average * 100) / 100,
              sessions_count: data.count,
            }
          }
        })

        setBestFocusTime(bestHour)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido'
        setError(errorMessage)
        console.error('Error fetching focus data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchFocusData()
  }, [user?.id])

  return { bestFocusTime, allSessions, loading, error }
}
