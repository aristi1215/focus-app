import { createContext, useContext, useEffect, useState } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from '@/supabase/client'

type AuthResponse<T = void> = {
  success: boolean
  error?: string
  data?: T
}

type AuthDataResponse = {
  user: User | null
  session: Session | null
}

type AuthContextType = {
  user: User | null
  session: Session | null
  signUpNewUser: (email: string, password: string) => Promise<AuthResponse<AuthDataResponse>>
  signInWithEmail: (email: string, password: string) => Promise<AuthResponse<AuthDataResponse>>
  signOut: () => Promise<AuthResponse<void>>
  beginResetPasswordFlow: (email: string) => Promise<AuthResponse<void>>
  updateUserPassword: (newPassword: string) => Promise<AuthResponse<void>>
  authLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthContextProvider')
  }
  return context
}

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userSession, setUserSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [authLoading, setAuthLoading] = useState(true)

  //  Sign up new user and redirect to the base URL after successful sign up

  //  Sign on functions

  const signUpNewUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })
      if (error) {
        console.log('Sign up error', error)
        return { success: false, error: error.message }
      }

      console.log('Sign Up Data:', data)
      return { success: true, data }
} catch (err) {
      console.log('Unexpected error', err)
      return { success: false, error: String(err) }
    }
  }

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        console.log('Sign in error', error)
        return { success: false, error: error.message }
      }

      console.log('Sign In Data:', data)
      return { success: true, data }
    } catch (err) {
      console.log('Unexpected error', err)
      return { success: false, error: String(err) }
    }
  }

  const beginResetPasswordFlow = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: import.meta.env.VITE_PROJECT_BASE_URL + '/reset-password',
      })
      if (error) {
        console.log('Reset password error', error)
        return { success: false, error: error.message }
      }

      console.log('Reset password email sent')
      return { success: true }
    } catch (err) {
      console.log('Unexpected error', err)
      return { success: false, error: String(err) }
    }
  }

  const updateUserPassword = async (newPassword: string) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      })
      if (error) {
        console.log('Update password error', error)
        return { success: false, error: error.message }
      }

      console.log('Password updated successfully')
      return { success: true }
    } catch (err) {
      console.log('Unexpected error', err)
      return { success: false, error: String(err) }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut({ scope: 'local' })
      if (error) {
        console.log('Sign out error', error)
        return { success: false, error: error.message }
      }

      console.log('Signed out successfully')
      return { success: true }
    } catch (err) {
      console.log('Unexpected error', err)
      return { success: false, error: String(err) }
    }
  }
  //    TODO: implement sign in with google and notion

  //    User and session state management

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session)
      setUser(session?.user ?? null)
      setAuthLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserSession(session)
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const contextValue: AuthContextType = {
    user,
    session: userSession,
    signUpNewUser,
    signInWithEmail,
    signOut,
    beginResetPasswordFlow,
    updateUserPassword,
    authLoading
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider
