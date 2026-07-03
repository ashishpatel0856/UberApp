import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CaptainSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});

     const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
      firstName: firstName,
      lastName: lastName,
      },
      email: email,
      password: password
    })
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');

  }
  return (
  <div>
      <div className='py-5 px-5 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-20 mb-0.5' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

          <form onSubmit={(e) => submitHandler(e)} className='bg-white p-7 rounded-lg'>

            <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
            <div className='flex gap-2'>
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='bg-[#eeeeee] w-1/2 rounded mb-7 px-4 py-2 border  text-lg placeholder:text-base '
                type="text"
                placeholder="First Name"
              />
              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='bg-[#eeeeee] w-1/2 rounded mb-7 px-4 py-2 border  text-lg placeholder:text-base '
                type="text"
                placeholder="Last Name"
              />

            </div>

            <h3 className='text-lg font-medium mb-2'>What's our captain's email</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base '
              type="email"
              placeholder="email@example.com"
            />

            <h3 className='text-lg font-medium mb-2'>Enter your password</h3>

            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base '
              type="password"
              placeholder="Password"
            />

            <button className='bg-[#111] mt-5 text-white font-semibold rounded px-4 py-2  w-full text-lg placeholder:text-base '>Sign Up</button>
          </form>
          <p className='text-center'>Already have an account?<Link to='/captain-login' className='text-blue-600'>Login here</Link></p>

        </div>
        <div>
          <p className=' text-[10px] leading-tight text-gray-600'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span>.</p>
        </div>
      </div>
    </div>
      )
}

export default CaptainSignup