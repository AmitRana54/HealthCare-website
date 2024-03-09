import React from 'react'

function OurTeam() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Leadership
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our dedicated team is committed to providing exceptional healthcare services to our community.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 max-w-sm mx-auto rounded-lg shadow-md border border-gray-200">
              <div className="flex justify-center">
                <img className="w-32 h-32 rounded-full object-cover" src={member.imageUrl} alt={member.name} />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="mt-2 text-gray-600">{member.position}</p>
                <p className="mt-2 text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam