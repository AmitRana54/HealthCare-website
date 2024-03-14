import React from 'react'
import OurTeam from './OurTeam'
import BookNow from '../Booknow/BookNow'
import Steps from '../Booknow/Steps'

function Aboutus() {
    
  return (
    <>
    <div className="bg-gray-100  mt-6 p-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl sm:mt-12 font:bold leading-8 text-[#00446B] font-bold lg:text-6xl tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Providing Quality Healthcare
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are dedicated to improving the health and well-being of our community by providing exceptional healthcare services.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="rounded-lg bg-white p-6 max-w-sm mx-auto shadow-md border border-gray-200">
                <div className="flex justify-center">
                  <svg className="h-12 w-12 text-[#00446B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">Our Mission</h3>
                <p className="mt-2 text-gray-600">To provide compassionate and high-quality healthcare services to our patients.</p>
              </div>
            </div>

            <div className="flex flex-col items-center mt-8 md:mt-0">
              <div className="rounded-lg bg-white p-6 max-w-sm mx-auto shadow-md border border-gray-200">
                <div className="flex justify-center">
                  <svg className="h-12 w-12 text-[#00446B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">Our Vision</h3>
                <p className="mt-2 text-gray-600">To be the preferred healthcare provider known for excellence in patient care and community service.</p>
              </div>
            </div>

            <div className="flex flex-col items-center mt-8 lg:mt-0">
              <div className="rounded-lg bg-white p-6 max-w-sm mx-auto shadow-md border border-gray-200">
                <div className="flex justify-center">
                  <svg className="h-12 w-12 text-[#00446B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">Our Values</h3>
                <p className="mt-2 text-gray-600">We are committed to integrity, compassion, respect, and excellence in all that we do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    <OurTeam/>
    <Steps/>
    <BookNow/>
    </>
  )
}

export default Aboutus