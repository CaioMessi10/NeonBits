import prismaClient from "../../prisma";

interface CadGrupos{
    nome: string
}

class GruposServices{
    async cadastrarGrupos({nome}: CadGrupos){
        await prismaClient.cadastrarGrupos.create({
            data: {
                nome: nome
            }
        })
    return ({dados: 'Cadastro de Grupo Efetuado com Sucesso'})
    }   
}
export { GruposServices}