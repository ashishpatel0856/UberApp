import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const UserLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const { user,setUser } = useContext(UserDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
        if(response.status === 200) {
            const data = response.data;
            // setUser(data.user);
            localStorage.setItem('token',data.token);
            navigate('/home');

        }
        setEmail('');
        setPassword('');
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

                <form onSubmit={(e) => submitHandler(e)} className='bg-white p-7 rounded-lg'>
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
                    <p className='text-center'>New here?<Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
                </form>
            </div>
            <div>
                <Link to='/captain-login' className='bg-[#10b461] mt-5 flex items-center justify-center text-white font-semibold rounded px-4 py-2  w-full text-lg placeholder:text-base '>Sign as a Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin;