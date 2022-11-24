import React, {useState, useContext, createContext} from 'react'
import { User, UserRequest } from '../models/UserModels'
import { UserProviderProps } from '../models/UserProviderPropsModel'

interface IUserProviderProps {
    children: any
}

const UserProvider = ({children} : UserProviderProps) => {
  return (
    <UserContext.Provider>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider