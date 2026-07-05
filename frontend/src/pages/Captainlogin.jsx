import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const Captainlogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const captain = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

        if (response.status === 200) {
            const data = response.data

            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')

        }
        setEmail('');
        setPassword('');
    }
    return (

        <div className='py-5 px-5 h-screen flex flex-col justify-between'>
            <div >
                <img className='w-16 mb-8' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

                <form onSubmit={(e) => submitHandler(e)} className='bg-white p-7  rounded-lg'>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>

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

                    <button className='bg-[#111] mt-5 text-white font-semibold rounded px-4 py-2  w-full text-lg placeholder:text-base '>login</button>
                    <p className='text-center'>Join a fleet?<Link to='/captain-signup' className='text-blue-600'>Registered as a Captain</Link></p>
                </form>
            </div>
            <div>
                <Link to='/login' className='bg-[#d5622d] mt-5 flex items-center justify-center text-white font-semibold rounded px-4 py-2  w-full text-lg placeholder:text-base '>Sign as a User</Link>
            </div>
        </div>
    )
}

export default Captainlogin