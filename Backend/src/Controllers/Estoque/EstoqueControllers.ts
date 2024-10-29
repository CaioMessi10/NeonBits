import { Request, Response } from "express";
import { EstoqueServices } from "../../Services/Estoque/EstoqueServices";

class EstoqueControllers {
    async cadastro_estoque(req: Request, res: Response) {
        const {nomeProd} = req.body;
        const estoqueServices = new EstoqueServices();
        const resposta = await estoqueServices.cadastrar_estoque({
            nomeProd
        });
        return res.json(resposta);
    }
}

export { EstoqueControllers };

