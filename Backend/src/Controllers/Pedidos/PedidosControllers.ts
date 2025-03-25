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
    async criarPedido(req: Request, res: Response){
        const { id_cliente, id_produtos, valor } = req.body
        const enviaDadosServices = new PedidoServices
        const resposta = await enviaDadosServices.criarPedidos({
            id_cliente,
            id_produtos,
            valor
        })
        return res.json(resposta)
    }
    async adcionarItensPedido(req: Request, res: Response) {
        const { id_produto, id_carrinho, valor  } = req.body
        console.log(id_produto, id_carrinho, valor)
        const enviaDadosServices = new PedidoServices()
        const resposta = await enviaDadosServices.adcionarItensPedido({
            id_carrinho,
            id_produto,
            valor
        })
        return res.json(resposta)
    }
}

export { PedidoControllers };
