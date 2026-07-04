import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogout = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    axios.post(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    })
  return (
    <div></div>
  )
}

export default UserLogout