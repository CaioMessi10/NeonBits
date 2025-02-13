import prismaCliente from "../../prisma";

interface CadHierarquia{
    nome: string
}

class HierarquiaServices{
    async cadastrar_hierarquia({nome}: CadHierarquia){

        const verificarHierarquia = await prismaCliente.cadHierarquia.findFirst({
            where: {
                nome: nome
            }
        })

        if (verificarHierarquia) {
            throw new Error("Hierarquia ja Cadastrada");
            
        }

        const respostas = await prismaCliente.cadHierarquia.create({
            data: {
                nome: nome
            }
        })
        return { dados: 'Hierarquia Cadastrado Com Sucesso'}
    }
    async listaHierarquia(){
       const resposta = await prismaCliente.cadHierarquia.findMany()
       return resposta
    }
}

export { HierarquiaServices}