import React from 'react'

export  const UserDataContext = React.createContext({});
import { useState } from 'react';


const UserContext = ({ children }) => {
    const [user,setUser] = useState({
        email:'',
        fullname: {
            firstname:'',
            lastname:''
        },
    })
  return (
    <div>
        <UserDataContext.Provider value={{user,setUser}}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
