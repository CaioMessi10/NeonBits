import prismaCliente from "../../prisma";

interface CadPedido {
    preco: string;
    quantidade: string;
    idProdutos: string
    idUsuario: string; 
}

class PedidoServices {
    async cadastrar_pedido({ preco, quantidade, idProdutos, idUsuario }: CadPedido) {
        const resposta = await prismaCliente.cadPedidos.create({
            data: {
                preco: preco,
                quantidade: quantidade,
                idProdutos: idProdutos,
                idUsuario: idUsuario
            }
        });
        return { dados: 'Pedido Cadastrado', pedido: resposta };
    }
}

export { PedidoServices };