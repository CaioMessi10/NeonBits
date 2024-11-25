import { createContext, useState } from 'react'
import apiLocal from '../Api/apiLocal'
import { toast } from 'react-toastify'
 
export const AutenticadoContextoo = createContext()
 
export default function AuthProvider({ children }) {
 
 
 
    async function loginEntrada(email, password) {
        try {
            const resposta = await apiLocal.post('/LoginUsuarios', {
                email,
                password
            })
            console.log(resposta)
            localStorage.setItem('@id', JSON.stringify(resposta.data.id))
            localStorage.setItem('@nome', JSON.stringify(resposta.data.nome))
            
        } catch (err) {
            toast.error(err.response.data.error)
        }
    }
    return (
        <AutenticadoContextoo.Provider value={({  loginEntrada })}>
            {children}
        </AutenticadoContextoo.Provider>
    )
}