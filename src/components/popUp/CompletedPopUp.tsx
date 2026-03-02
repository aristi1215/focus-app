import React, { useState } from 'react'
import { FocusQuestion } from './FocusQuestion'
import { TypeWorkQuestion } from './TypeWorkQuestion'
import { NotesQuestion } from './NotesQuestion';

export const CompletedPopUp = ({children}: {children: React.ReactNode}) => {
  const [step, setStep] = useState(0)
  return (
    <div className="rounded-xl min-h-79 min-w-md border border-black p-10 absolute bg-black text-white flex flex-col items-center justify-center gap-3 overflow-hidden">
      
      <header className="flex w-full items-center justify-between">
        <div></div>
        <h3>Session Complete!</h3>
        <h1>X</h1>
      </header>

      <div className={`translate-x-${step * 100}`}>
        <h4>¿Did you reach a flow state?</h4>
        <p>Feeling completely inmersed and energized</p>
        <div className="flex gap-3 ">
          <button className="w-16 h-16 border border-black flex flex-col justify-center items-center">
            <img src="" alt="" />
            <p>Yes</p>
          </button>
          <button className="w-16 h-16 border border-black flex flex-col justify-center items-center">
            <img src="" alt="" />
            <p>no</p>
          </button>
        </div>

        <button className="w-full">Next</button>
      </div>
    
    </div>
  )
}
