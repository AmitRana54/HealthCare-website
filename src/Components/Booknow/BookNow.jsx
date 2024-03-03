import React, { useState } from 'react'

function BookNow() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [num, setNum] = useState(0)
    const [last, setLast] = useState('')
    const [message , setMessage] = useState('')
    const [data, setData  ] = useState([]);
    const handleSumbit = (e)=>{
        e?.preventDefault();
        console.log(name.length);
        console.log(num.length);
        if(name == "" || num.length != 10 ){
            alert("enter valid details ")
        }
        const obj = {
            id: Date.now(),
            FirstName: name,
            LastName: last,
            Email: email,
            phoneNo: num,
            Message: message,
        }
        setData((prev)=>[...prev,obj])
        console.log(data);


    }
    return (
        <>
        <div className="heading">
            <h1    className='text-center text-3xl text-green-400 underline decoration-2'               > Book Now </h1>
        </div>
        <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4
        onSubmit={handelSubmit}
        
        ">
                <div className="mb-4">
                    <div className="flex justify-between mb-2">
                        <div className="w-1/2 mr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="Enter your first name"
                            value={name}
                            onChange={(e)=>(setName(e.target.value))}
                            required
                            />
                        </div>
                        <div className="w-1/2 ml-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Enter your last name"          
                             value={last}
                             onChange={(e)=>(setLast(e.target.value))}
                             />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"
                     value={email}
                     onChange={(e)=>(setEmail(e.target.value))}
                     required
                    
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone"
                    
                    >
                        Phone Number
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Enter your phone number"
                     value={num}
                     onChange={(e)=>(setNum(e.target.value))}
                     required
                    
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Enter your message"
                     value={message}
                     onChange={(e)=>(setMessage(e.target.value))}
                     required
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button   onClick={handleSumbit}         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default BookNow