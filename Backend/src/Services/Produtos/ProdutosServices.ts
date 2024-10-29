import prismaCliente from "../../prisma/index";

interface CadProdutos {
    nomeProd: string;
    categoria: string;
    categoria_estoque: string
    precoProd: string;
    idEstoque: string
}

class ProdutosServices {
    async cadastrar_produtos({ nomeProd, categoria, categoria_estoque, precoProd, idEstoque }: CadProdutos) {
        const resposta = await prismaCliente.cadastroProdutos.create({
            data: {
                nomeProd: nomeProd,
                categoria: categoria,
                categoria_estoque: categoria_estoque,
                precoProd: precoProd,
                idEstoque: idEstoque
            }
        });
        return { dados: 'Produto Cadastrado com Sucesso', produto: resposta };
    }

}

export { ProdutosServices };
