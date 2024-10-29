import { Request, Response } from "express";
import { ProdutosServices } from "../../Services/Produtos/ProdutosServices";

class ProdutosControllers {
    async cadastro_produtos(req: Request, res: Response) {
        const { nomeProd, categoria,categoria_estoque, precoProd, idEstoque } = req.body;
        const produtosServices = new ProdutosServices();
        const resposta = await produtosServices.cadastrar_produtos({
            nomeProd,
            categoria,
            categoria_estoque,
            precoProd,
            idEstoque
        });
        return res.json(resposta);
    }

    // Adicione outros métodos aqui, como listar produtos, se necessário
}

export { ProdutosControllers };
