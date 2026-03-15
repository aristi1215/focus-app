import { supabase } from '@/supabase/client'
import { useState } from 'react'
import { useAuthContext } from '@/context/AuthContext'

type FetchResult<T> = {
  success: boolean
  data?: T
  error?: string
}

export const useFetchStatistics = () => {
  const [loading, setLoading] = useState(false)
  const [err, setError] = useState<string | null>(null)
  const { session, authLoading } = useAuthContext()

  const withLoading = async <T>(
    fn: () => Promise<FetchResult<T>>,
  ): Promise<FetchResult<T>> => {
    setLoading(true)
    setError(null)

    try {
      const result = await fn()
      if (!result.success) {
        setError(result.error ?? 'Unknown error')
      }
      return result
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : String(caught)
      setError(message)
      return { success: false, error: message }
    } finally {
      setLoading(false)
    }
  }

  // Calculated by grouping by the hour and getting the hour with the highest average focus level.
  const getBestFocusHours = async () => {
    return withLoading(async () => {
      const { data, error } = await supabase
        .rpc('get_hourly_avg_focus_for_current_user')
        .limit(1)

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, data }
    })
  }

  const getBestLocation = async () => {
    return withLoading(async () => {
      const { data, error } = await supabase
        .rpc('get_focus_level_and_total_hours_by_location')
        .limit(1)

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, data }
    })
  }

  const getAllSessionsAverage = async () => {
    return withLoading(async () => {
      const { data, error } = await supabase.rpc('get_all_sessions_avg_by_user')

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, data }
    })
  }

  const getAllUserSessions = async () => {
    if (authLoading) {
      const message = 'Authentication is still loading.'
      setError(message)
      return { success: false, error: message }
    }

    if (!session?.user.id) {
      const message = 'User is not logged in.'
      setError(message)
      return { success: false, error: message }
    }

    return withLoading(async () => {
      const { count, error } = await supabase
        .from('focus_sessions')
        .select('*', { count: 'exact', head: false })
        .eq('user_id', session.user.id)

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, data: count }
    })
  }

  // Data for the concentration changes over time analytic
  const concentrationChangesOverTime = async () => {
    return withLoading(async () => {
      const { data, error } = await supabase.rpc(
        'get_daily_focus_changes_over_time_by_user',
      )

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, data }
    })
  }

  const monthlyGrowthCurve = async () => {
    return withLoading(async () => {
      const { data, error } = await supabase.rpc(
        'get_daily_focus_level_per_month_by_user',
      )

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, data }
    })
  }

  const focusWindowByHourOfDay = async () => {
    return withLoading(async () => {
      const { data, error } = await supabase.rpc(
        'get_focus_window_by_hour_of_day',
      )

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, data }
    })
  }

  const performanceByLocation = async () => {
    return withLoading(async () => {
      const { data, error } = await supabase.rpc(
        'get_focus_level_and_total_hours_by_location',
      )

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, data }
    })
  }

  const get_top_focus_days = async () => {
    return withLoading(async () => {
      const { data, error } = await supabase.rpc('get_top_focus_day')

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, data }
    })
  }

  const performance_by_work_type = async () => {
    return withLoading(async () => {
      const { data, error } = await supabase.rpc('performance_by_work_type')

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, data }
    })
  }

  const hookReturn = {
    getBestFocusHours,
    getBestLocation,
    getAllSessionsAverage,
    getAllUserSessions,

    concentrationChangesOverTime,
    monthlyGrowthCurve,
    focusWindowByHourOfDay,
    performanceByLocation,
    get_top_focus_days,
    performance_by_work_type,
    loading,
    err,
  }

  return hookReturn
}
