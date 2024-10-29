import prismaCliente from "../../prisma";

interface CadEstoque {
    nomeProd: string
}

class EstoqueServices {
    async cadastrar_estoque({ nomeProd }: CadEstoque) {
        const resposta = await prismaCliente.cadEstoque.create({
            data: {
                nomeProd: nomeProd
    
            }
        });
        return { dados: 'Estoque Cadastrado com Sucesso', estoque: resposta };
    }
}

export { EstoqueServices};
