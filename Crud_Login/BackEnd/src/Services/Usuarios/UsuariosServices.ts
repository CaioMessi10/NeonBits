import prismaClient from "../../prisma"

interface cadUsuarios{
    nome: string
    email: string
    password: string
}

class UsuariosServices{
   async cadastrarUsuarios({nome, email, password}: cadUsuarios){
    await prismaClient.cadastrarUSuarios.create({
        data: {
            nome: nome,
            email: email,
            senha: password
        }
    })
    return({dados: 'Cadastro Efetuado com Sucesso'})
   }

   async consultarUsuarios(){
    const resposta = await prismaClient.cadastrarUSuarios.findMany({
        select: {
            id: true,
            nome: true,
            email: true
        }
    })
    return resposta
   }
}

export { UsuariosServices }