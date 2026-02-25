export const SignIn = () => {
  return (
    <div className="flex flex-col justify-around items-center h-full">
      <div className="text-center">
        <h1>FocusFlow</h1>
        <p>Track, measure, and improve your cognitive performance</p>
      </div>

      <form className="flex flex-col shadow-xl border border-[#E5E5E5] rounded-xl p-4 h-100 w-md">
        <h3>Welcome </h3>
        <label htmlFor="email">Email Address</label>
        <input type="email" />
        <label htmlFor="email">Password</label>
        <input type="password" />

        <button>Get started -{'>'}</button>
      </form>
    </div>
  )
}
