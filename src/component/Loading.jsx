import React from 'react'

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        className="p-3 animate-spin flex flex-col justify-center items-center
        drop-shadow-2xl bg-linear-to-bl
        from-pink-400 via-purple-400 to-[#F9336A]
        md:w-48 md:h-48 h-32 w-32 aspect-square
        rounded-full"
      >
        <div
          className="rounded-full h-full w-full bg-slate-100  backdrop-blur-md"
        ></div>
      </div>
    </div>
  )
}

export default Loading
