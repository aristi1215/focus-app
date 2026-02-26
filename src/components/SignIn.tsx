import Brain from '/icons/Brain.svg?url'

export const SignIn = () => {
  return (
    <div className="flex flex-col justify-around items-center h-full font-inter gap-10">
      <div className="text-center mt-20">
        <div className="flex items-center justify-center gap-3 mb-5">
          <img src={Brain} alt="" />
          <h1 className="text-4xl font-semibold">FocusFlow</h1>
        </div>
        <p className="text-gray-500 text-xl">
          Track, measure, and improve your <br /> cognitive performance
        </p>
      </div>

      <form className="flex flex-col shadow-xl border border-[#E5E5E5] rounded-xl p-6  w-md gap-10">
        <h3 className="font-semibold text-2xl">Welcome </h3>
        <div className='flex flex-col gap-3'>
          <label htmlFor="email">Email Address</label>
          <input
            className="p-3 bg-[#F3F3F5] rounded-xl"
            type="email"
            placeholder="user@gmail.com"
          />
          <label htmlFor="email">Password</label>
          <input
            className="p-3 bg-[#F3F3F5] rounded-xl"
            type="password"
            placeholder="************"
          />
        </div>

        <button className="bg-black text-white p-3 rounded-xl">
          Get started -{'>'}
        </button>
      </form>
    </div>
  )
}
