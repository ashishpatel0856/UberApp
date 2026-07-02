import React from 'react'
import { Link } from 'react-router-dom';

const UserLogin = () => {
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

                <form>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>

                    <input
                        required
                        className='bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base '
                        type="email"
                        placeholder="email@example.com"
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter your password</h3>

                    <input
                        required
                        className='bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base '
                        type="password"
                        placeholder="Password"
                    />

                    <button className='bg-[#111] mt-5 text-white font-semibold rounded px-4 py-2  w-full text-lg placeholder:text-base '>login</button>
                    <p className='text-center'>New here?<Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
                </form>
            </div>
            <div>
                <button className='bg-[#10b461] mt-5 text-white font-semibold rounded px-4 py-2  w-full text-lg placeholder:text-base '>Sign as a Captain</button>
            </div>
        </div>
    )
}

export default UserLogin;