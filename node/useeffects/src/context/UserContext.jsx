import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
   const [firstName, setFirstName] = useState('Carlos')
   const [lastName, setLastName] = useState('Yulo')
    const initialValue = {
        firstName, lastName

    }
    return (
        <UserContext.Provider value={initialValue}>
            {children}



        </UserContext.Provider>
    )
}