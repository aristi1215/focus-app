import { useEffect, useState } from 'react'
import Brain from '/icons/Brain.svg?url'
import { useAuthContext } from '@/context/AuthContext'
import { useRouter } from '@tanstack/react-router'

//  isUserRegistered is made to change the logic from sign up to sign in
export const Auth = ({isUserRegistered}: {isUserRegistered: boolean}) => {
  const { signInWithEmail, signUpNewUser, session } = useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if(session) {
      router.navigate({ to: '/' })
    }else{
      console.log("there's no session active")
    }
  },[])

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    const result = await (isUserRegistered 
      ? signInWithEmail(email, password)
      : signUpNewUser(email, password))
    
    setLoading(false)

    if (result.success) {
      setError('')
      // Redirect to the base URL after successful sign up
      router.navigate({ to: '/' })
    } else {
      setError(result.error || 'An unexpected error occurred')
    }
  }

  return (
    <div className="flex flex-col justify-around items-center h-full font-inter gap-10">
      <div className="text-center mt-20">
        <div className="flex items-center justify-center gap-3 mb-5">
          <img className="w-10 h-10 md:w-15 md:h-15" src={Brain} alt="" />
          <h1 className="text-2xl md:text-4xl font-semibold">FocusFlow</h1>
        </div>
        <p className="text-gray-500 text-lg md:text-xl">
          Track, measure, and improve your <br /> cognitive performance
        </p>
      </div>

      <form
        onSubmit={(e) => {
          handleSignUp(e)
        }}
        className="flex flex-col shadow-xl border border-[#E5E5E5] rounded-xl p-6 w-[90%] md:w-md gap-10"
      >
        <h3 className="font-semibold text-xl md:text-2xl">Welcome </h3>
        <div className="flex flex-col gap-3">
          <label htmlFor="email">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 bg-[#F3F3F5] rounded-xl"
            type="email"
            placeholder="user@gmail.com"
          />
          <label htmlFor="email">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 bg-[#F3F3F5] rounded-xl"
            type="password"
            placeholder="************"
          />
          <p className="text-red-500 font-semibold ">{error}</p>
        </div>

        <button disabled={loading} className="bg-black text-white p-3 rounded-xl cursor-pointer">
          {isUserRegistered ? "Log in" : "Get started"}
        </button>
      </form>
    </div>
  )
}
