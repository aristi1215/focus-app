import { supabase } from '@/supabase/client'

export const createFocusSession = async () => {
  const { data, error } = await supabase.from('focus_sessions').insert({
    /* session data */
  })

  if (error) {
    console.error('Error creating focus session:', error)
    return { success: false, error: error.message }
  }
  console.log('Focus session created:', data)
  return { success: true, data }
}
