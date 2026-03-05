import Play from '/icons/Play.svg?url'
import { useState, useEffect } from 'react'
import { CompletedPopUp } from './popUp/CompletedPopUp'
import { FocusQuestion } from './popUp/FocusQuestion'
import { TypeWorkQuestion } from './popUp/TypeWorkQuestion'
import { NotesQuestion } from './popUp/NotesQuestion'
import { FlowStateQuestion } from './popUp/FlowStateQuestion'
import { useSessionContext } from '@/context/SessionContext'

export const Focus = () => {
  const [sessionActive, setSessionActive] = useState(false)
  const [popUpActive, setPopUpActive] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [sessionInfo, setSessionInfo] = useSessionContext()

  const finishSession = () => {
    setPopUpActive(true)
    setSessionActive(false)
    setSessionInfo({
      ...sessionInfo,
      endTime: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      duration: seconds,
    })
    setSeconds(0)
  }
  const startSession = () => {
    const currDate = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    setSessionActive(true)
    setStartDate(currDate)
    setSessionInfo({ ...sessionInfo, startTime: currDate })
  }

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
    <div className="h-[90vh] flex flex-col items-center justify-center gap-10 font-inter ">
      {sessionActive ? (
        <article className="h-full flex flex-col justify-around items-center py-20">
          <header>
            <h2 className="text-3xl font-semibold">Session in progress</h2>
            <p>Stay focused, you're doing a great job</p>
          </header>

          <main className="my-10 relative z-0">
            <div
              className="absolute z-0 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full bg-gray-600 opacity-50 p-35 animate-ping"
              style={{
                animationDuration: '2s',
              }}
            ></div>
            <div
              className="absolute z-0 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full bg-gray-600 opacity-50 p-20 animate-ping"
              style={{
                animationDuration: '2s',
              }}
            ></div>
            <h1 className="text-[4rem] text-black font-bold">
              {format(hours)}:{format(minutes)}:{format(secs)}
            </h1>
          </main>

          <footer className="flex flex-col items-center gap-3">
            <h3 className="text-gray-600 text-lg">Started at {startDate}</h3>
            <button
              onClick={finishSession}
              className="cursor-pointer flex gap-4 p-4 px-8 border border-gray-200 shadow-lg rounded-lg hover:bg-gray-200 transition-all duration-300 z-10 text-lg font-medium"
            >
              <div className="w-6 h-6 rounded-lg border-3 border-black"></div>
              End session
            </button>
          </footer>
        </article>
      ) : (
        <div className="h-full flex flex-col justify-center items-center gap-6">
          <h2 className="text-4xl font-semibold">Ready to focus?</h2>
          <p>One click to start tracking</p>
          <button className="bg-black cursor-pointer h-60 w-60 rounded-full flex flex-col items-center justify-center shadow-2xl">
            <img
              onClick={startSession}
              src={Play}
              alt="Start timer icon"
              className="w-20 h-20"
            />
            <h3 className="text-white text-2xl">Start</h3>
          </button>
          <div className="border border-gray-400 rounded-xl max-w-[45%] p-3 mt-10">
            <p>
              <b>How it works:</b> Click start when you begin focused work.
              We'll automatically track your session and detect focus levels.
              After you finish, answer a few quick questions to help improve
              your insights.
            </p>
          </div>
        </div>
      )}

      <CompletedPopUp setPopUp={setPopUpActive} isActive={popUpActive}>
        <FlowStateQuestion />
        <FocusQuestion />
        <TypeWorkQuestion />
        <NotesQuestion />
      </CompletedPopUp>
    </div>
  )
}

export default Focus
