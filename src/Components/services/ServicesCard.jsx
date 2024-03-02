import React from 'react'

function ServicesCard({
    name = " Transthepy",
    image = "this is a email",
    bgColor = "zinc",
}) {
  return (
    <div    className= {`h-52 w-[22rem] flex border-${bgColor}-600  border-2 rounded-xl overflow-hidden bg-${bgColor}-600`}       >  
    <div className=" h-full w-40 rounded-sm border- flex  flex-col  items-center justify-between">
        <h1 className='text-3xl font-bold underline-offset-2 text-blue-500 text-pretty  px-9 '>

{
    name
}
        </h1>
        <button className='mb-4 text-green-400 underline-offset-1' >
            BookNow
        </button>

    </div>
<div className="imgdiv relative h-full w-40 flex items-center  ">
    <img     className=' w-32 rounded-xl' src={image} alt="" />
</div>

    </div>
  )
}

export default ServicesCard