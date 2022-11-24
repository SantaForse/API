import React, {useState, useContext, createContext} from 'react'
import { User, UserRequest } from '../models/UserModels'
import { UserProviderProps } from '../models/UserProviderPropsModel'



export const UserContextProvider = createContext<>(null)
const UserContext = ({children} : UserProviderProps) => {
  return (
    <UserContextProvider.Provider>
        {children}
    </UserContextProvider.Provider>
  )
}

export default UserContext