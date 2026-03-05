import RobotAi from '/icons/robotAI.svg'
import { LuSend } from "react-icons/lu";

export const Insights = () => {
  const chatBotMessages = [
    {
      sender: 'bot',
      text: "Hi! I'm your Focus AI assistant. I can help you understand your cognitive performance metrics and provide personalized recommendations. Try asking me about your focus patterns, best times to work, or how to improve your concentration!",
    },
    { sender: 'user', text: 'What are my focus patterns throughout the day?' },
    {
      sender: 'bot',
      text: 'Based on your data, you tend to have higher focus levels in the late morning and early afternoon, with a dip in the mid-afternoon. Your best focus times are between 10 AM and 2 PM.',
    },
    { sender: 'user', text: 'How can I improve my concentration?' },
    {
      sender: 'bot',
      text: 'To improve your concentration, consider taking short breaks every hour, practicing mindfulness meditation for 5-10 minutes daily, and minimizing distractions by creating a dedicated workspace.',
    },
  ]

  return (
    <div className="px-30 ">
      <h2 className="mt-8 font-semibold text-2xl text-center">AI Insights</h2>
      <p className="text-gray-600  text-center">
        Get personalized recommendations based on your data
      </p>
      <div className="border border-[#E5E5E5] rounded-xl p-6 shadow-sm mt-4">
        <div className="overflow-y-scroll h-[50vh]">
          {chatBotMessages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 mb-4 ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
            >
              <div className="bg-gray-100 rounded-lg max-w-1/2 flex p-2 text-start">
                {message.sender === 'bot' && (
                  <img
                    src={RobotAi}
                    alt="AI Assistant"
                    className="w-8 h-8 bg-gray-200 rounded-full p-2 mr-3"
                  />
                )}
                <div>
                  <p>{message.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-2">Suggested questions:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 px-2 py-1 rounded-full cursor-pointer">
            What's my overall average?
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 px-2 py-1 rounded-full cursor-pointer">
            What's my best time to focus?
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 px-2 py-1 rounded-full cursor-pointer">
            How can I improve my concentration?
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 px-2 py-1 rounded-full cursor-pointer">
            Tell me about my flow state?
          </button>
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <textarea
              name="user-input"
              id="user-input"
              placeholder="Type your message here..."
              className="border border-[#E5E5E5] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full resize-none mt-3"
            ></textarea>
            <button className="hover:bg-black text-white bg-gray-400 p-2 rounded-lg px-4 py-2 mt-2 cursor-pointer">
              <LuSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
