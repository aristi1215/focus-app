import Play from '/icons/Play.svg?url'
import { useState, useEffect } from 'react'
import { CompletedPopUp } from './popUp/CompletedPopUp'
import { FocusQuestion } from './popUp/FocusQuestion'
import { TypeWorkQuestion } from './popUp/TypeWorkQuestion'
import { NotesQuestion } from './popUp/NotesQuestion'

export const Focus = () => {
  const [sessionActive, setSessionActive] = useState(false)
  const [stepPopUp, setStepPopup] = useState(0)
  // Total amount of time that has passed.
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Converting seconds to hours, minutes and seconds in the format 00.
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  // adding 0s to the left
  const format = (num: number) => String(num).padStart(2, '0')

  return (
    <div className="h-[80vh] flex flex-col items-center justify-center gap-10 font-inter ">
      <div className="h-full hidden">
        <h2 className="text-4xl font-semibold">Ready to focus?</h2>
        <p>One click to start tracking</p>
        <div className="bg-black h-60 w-60 rounded-full flex flex-col items-center justify-center shadow-2xl">
          <img src={Play} alt="Start timer icon" className="w-20 h-20" />
          <h3 className="text-white text-2xl">Start</h3>
        </div>
        <div className="border border-gray-400 rounded-xl max-w-md p-3">
          <p>
            <b>How it works:</b> Click start when you begin focused work. We'll
            automatically track your session and detect focus levels. After you
            finish, answer a few quick questions to help improve your insights.
          </p>
        </div>
      </div>

      <div className="h-full flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold">Session in progress</h2>
        <p>Stay focused, you're doing a great job</p>
        <h1 className="text-4xl text-black font-bold">
          {format(hours)}:{format(minutes)}:{format(secs)}
        </h1>
        <button className="border border-black rounded-lg hover:bg-black hover:text-white transition-all duration-150">
          End session
        </button>
      </div>
      <CompletedPopUp>
        <FocusQuestion />
        <TypeWorkQuestion />
        <NotesQuestion />
      </CompletedPopUp>
    </div>
  )
}

export default Focus
