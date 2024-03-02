import React from 'react'

export default function Navbar() {
    return (
        <header className='w-full  h-32  '>
            <nav  className='  m-auto h-full w-[87%]   flex items-center justify-between'        >

 <div className="logo  w-32 h-full flex items-center justify-center ">
                MEDiCorv
            </div>
            <div className="flex gap-6  ">

                <ul className=' flex items-center gap-7 text-center font-bold text-xl '>   
                    <li>Our services</li>
                    <li>
                        Contacts us
                    </li>
                    <li> About us </li>
                </ul>
                <button className='p-2 bg-green-500 rounded-lg '    >
                Booknow
            </button>
            </div>
            
            </nav>
        



        </header>
    )
}
