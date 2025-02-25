import prismaCliente from "../../prisma/index";

interface CadProdutos {
    nomeProd: string;
    descricao: string;
    precoProd: string;
    banner: string
}

class ProdutosServices {
    async cadastrar_produtos({ nomeProd, descricao, precoProd, banner}: CadProdutos) {
        const resposta = await prismaCliente.cadastroProdutos.create({
            data: {
                nomeProd: nomeProd,
                descricao: descricao,
                precoProd: precoProd,
                banner: banner,
            }
        });
        return { dados: 'Produto Cadastrado com Sucesso', produto: resposta };
    }

}

export { ProdutosServices };
