import { Request, Response } from "express";
import { ProdutosServices } from "../../Services/Produtos/ProdutosServices";

class ProdutosControllers {
    async cadastro_produtos(req: Request, res: Response) {
        const { nomeProd, descricao, precoProd} = req.body
console.log(nomeProd, descricao, precoProd)
        if(!req.file){
            throw new Error('Imagem com Problemas')
        }else{
            const { originalname, filename: banner}= req.file
            const produtosServices = new ProdutosServices();
            const resposta = await produtosServices.cadastrar_produtos({
                nomeProd,
                descricao,
                precoProd,
                banner
            });
            return res.json(resposta);
        }
    }

}

export { ProdutosControllers };
