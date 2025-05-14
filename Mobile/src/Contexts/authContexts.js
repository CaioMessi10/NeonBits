import React, { useState, createContext} from 'react'

export const AutContexts = createContext()

export function AutProvider ({ children }) {
     
    const [ token ,setToken] = useState(false)
    const [ loading, setLoaging]= useState(false)

    const autenticado = false

    return (
        <AutContexts.Provider
        value={(autenticado)}
        >
            { children }
        </AutContexts.Provider>
    )
}