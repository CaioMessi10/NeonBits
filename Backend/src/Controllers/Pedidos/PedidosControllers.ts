import { Request, Response } from "express";
import { PedidoServices } from "../../Services/Pedidos/PedidosServices";

class PedidoControllers {
    async cadastro_pedido(req: Request, res: Response) {
        const {preco, quantidade,idProdutos, idUsuario } = req.body; // Inclua idUsuario
        const pedidoServices = new PedidoServices();
        
        try {
            const resposta = await pedidoServices.cadastrar_pedido({
                preco,
                quantidade,
                idProdutos,
                idUsuario 
            });
            res.json(resposta);
        } catch (error) {
        }
    }
}

export { PedidoControllers };
