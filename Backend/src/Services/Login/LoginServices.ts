import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'

interface Login {
    email: string
    senha: string
}

class LoginServices {
    async loginUsuarios({ email, senha }: Login) {
        const usuario = await prismaClient.cadastroUsuarios.findFirst({
            where: {
                email: email
            }
        })
        if (!usuario) {
            throw new Error('Usuario ou Senha Invalidos ')
        }
        const senhaCrypt = await compare(senha, usuario.senha)
        if (!senhaCrypt) {
            throw new Error('Usuario ou Senha Invalidos')
        }

        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
        }
    }
 
}

export { LoginServices }