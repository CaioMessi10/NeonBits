import prismaCliente from "../../prisma/index";

interface CadProdutos {
    nomeProd: string;
    categoria: string;
    precoProd: string;
    banner: string
}

class ProdutosServices {
    async cadastrar_produtos({ nomeProd, categoria, precoProd, banner}: CadProdutos) {
        const resposta = await prismaCliente.cadastroProdutos.create({
            data: {
                nomeProd: nomeProd,
                categoria: categoria,
                precoProd: precoProd,
                banner: banner,
            }
        });
        return { dados: 'Produto Cadastrado com Sucesso', produto: resposta };
    }

}

export { ProdutosServices };
