import React, { useRef, useState } from "react";
import Services from "../body/Services";
import emailjs from "@emailjs/browser";

function BookNow() {
  const form = useRef();
  const [errors, setErrors] = useState({
    emailErr: false,
    numErr: false,
  });
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    services: " ",
    age: "",
    city: "",
    date: "",
  });

  const validate = (num, email) => {
    const regexeNumber =
      /^\+?(\d{1,3})?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexeNumber.test(num)) {
      setErrors({
        numErr: true,
        emailErr: false,
      });
      return false;
    } else if (!regexemail.test(email)) {
      setErrors({
        numErr: false,
        emailErr: true,
      });
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    setErrors({
      emailErr: false,
      numErr: false,
    });
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const valid = validate(formData.phoneNumber, formData.email);
    if (valid) {
      setSubmit(true);
      window.scrollTo(0, 0);
      try {
        await emailjs.sendForm(
          "service_ldpgx1u",
          "template_ytrmycc",
          form.current,
          {
            publicKey: "s2Y4zqtkLp6B8qvXc",
          }
        );
      } catch (error) {
        console.error("FAILED", error);
      }
    }
  };

  if (submit) {
    return (
      <div className="h-auto w-screen flex items-center justify-center flex-col">
        <div className="h-96 w-screen flex items-center justify-center">
          <div className="max-w-md mx-auto bg-green-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <svg
                  className="h-12 w-12 text-[#0D857B] mt-8 ml-8"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-xl text-green-600 font-semibold">
                  Success
                </div>
                <p className="mt-2 text-lg leading-tight text-gray-800">
                  Form submitted successfully!
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-xl sm:text-xl  uppercase translate-x-0 text-center lg:text-7xl font-bold text-blue-900">
          See our other services
        </h1>
        <Services />
      </div>
    );
  }

  return (
    <>
      <div className="max-w-md mx-auto p-10 rounded-lg border bg-zinc-100 border-blue-500 shadow-lg lg:mt-20 mb-16 ">
        <h2 className="text-4xl mb-4 text-center text-[#0D857B] font-bold">
          Book Now
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit} ref={form}>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block mb-1 text-black font-serif font-semibold"
                htmlFor="name"
              >
                <span className="text-red-500">*</span> Name:
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block mb-1 text-black font-serif font-semibold"
                htmlFor="phoneNumber"
              >
                <span className="text-red-500">*</span> Phone Number:
              </label>
              <input
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.numErr ? "border-red-500" : "focus:border-blue-500"
                }`}
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              {errors.numErr && (
                <p className="text-sm text-red-700 font-serif font-semibold">
                  Enter a valid Phone Number
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block mb-1 text-black font-serif font-semibold"
                htmlFor="email"
              >
                <span className="text-red-500">*</span> Email:
              </label>
              <input
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.emailErr ? "border-red-500" : "focus:border-blue-500"
                }`}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.emailErr && (
                <p className="text-sm text-red-700 font-serif font-semibold">
                  Enter a valid Email
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block mb-1 text-black font-serif font-semibold"
                htmlFor="services"
              >
                Services:
              </label>
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                id="services"
                name="services"
                value={formData.services}
                onChange={handleChange}
              >
                <option value="none">none</option>
                <option value="Patient Monitor">Patient Monitor</option>
                <option value="Craps">Craps</option>
                <option value="Ventilators">Ventilators</option>
                <option value="Oximeter Machine">Oximeter Machine</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block mb-1 text-black font-serif font-semibold"
                htmlFor="age"
              >
                Age:
              </label>
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              >
                <option value="none">None</option>
                <option value="child">Child</option>
                <option value="adult">Adult</option>
                <option value="senior">Senior</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block mb-1 text-black font-serif font-semibold"
                htmlFor="city"
              >
                City:
              </label>
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                
                <option value="Rishikesh">Rishikesh</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block mb-1 text-black font-serif font-semibold"
                htmlFor="date"
              >
                Date:
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#0D857B] text-white px-4 py-2 rounded-md hover:bg-blue-600 font-bold w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default BookNow;
