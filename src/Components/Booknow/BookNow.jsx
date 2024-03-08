import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

function BookNow() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState(null);
  const [last, setLast] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [submit, setSubmit] = useState(false);
  function validate(num, email) {
    const cleanedPhoneNumber = num.replace(/\D/g, "");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (cleanedPhoneNumber.length !== 10 && emailRegex.test(email)) {
      return false;
    }

    return emailRegex.test(email);
  }
  const handleSumbit = (e) => {
    e?.preventDefault();
    const valid = validate(num, email);
    if (valid) {
      const obj = {
        id: Date.now(),
        FirstName: name,
        LastName: last,
        Email: email,
        phoneNo: num,
        Message: message,
      };
      emailjs
        .sendForm('service_ldpgx1u', 'template_ytrmycc', form.current, {
          publicKey: 'cfa6tyzN4q_XVZhFO'
        })
        .then(() => {
          console.log('SUCCESS');
        }),
        (error) => {
          console.log('FAILED To Send DATA', error.text);
        };
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Form Submitted Successfully",
        showConfirmButton: false,
        timer: 1500
      });

      setData((prev) => [...prev, obj]);
      console.log(data);
      setEmail("");
      setNum("");
      setLast("");
      setMessage("");
      setName("");
      setSubmit(true);
    } else {
      setErr(true);
    }
  };
  return (
    <>
      <div className="heading">
        <h1 className="text-2xl text-center font-bold text-pretty text-green-600  ">
          Book Now
        </h1>
      </div>
      <form ref={form}
        className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSumbit}
      >
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <div className="w-1/2 mr-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                name="from_name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {err && (
                <p className="text-red-700 text-sm "> Enter valid Detail</p>
              )}
            </div>
            <div className="w-1/2 ml-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                name="from_name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                value={last}
                onChange={(e) => setLast(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="from_email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => (setEmail(e.target.value), setErr(false))}
            required
          />
          {err && <p className="text-red-700 text-sm ">Enter valid Detail</p>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            name="from_phone"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={num}
            onChange={(e) => (setNum(e.target.value), setErr(false))}
          />
          {err && <p className="text-red-700 text-sm ">Enter valid Detail</p>}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleSumbit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default BookNow;
