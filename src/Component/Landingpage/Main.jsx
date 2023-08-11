import React from 'react'
import Image from '../../Assests/new welcome image.avif'

function Main() {
  return (
    <div className=' grid grid-cols-2 '>
      <div className=' flex flex-col justify-center align-middle px-28 font-[Poppins] text-2xl'>
          <h1 >Welcome to </h1>
          <h1 className=' text-4xl text-orange-600 pt-3 font-bold'>SAIL INNOVATION LAB</h1>
          <p className=' pt-3 text-slate-800'>Tech and Talent Quizz App for Student</p>
        </div>
        <div className=' flex justify-center align-middle'>
            <img className=' h-[25rem]' src={Image} alt="" />
        </div>
    </div>
  )
}

export default Main
