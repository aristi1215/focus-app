import { useState } from 'react'
import { supabase } from '@/supabase/client'
import type { TablesInsert } from 'database.types'

export const useCreateFocusSession = () => {
  const [loading, setLoading] = useState(false)

  const createSession = async (session: TablesInsert<'focus_sessions'>) => {
    setLoading(true)
    const { data, error } = await supabase
      .from('focus_sessions')
      .insert(session)
    setLoading(false)
    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  }

  return { createSession, loading }
}
