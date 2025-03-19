import prismaCliente from "../../prisma";

interface CadPedido {
    preco: string;
    quantidade: string;
    idProdutos: string
    idUsuario: string; 
}
interface CriarPedidos{
    id_cliente: string
    id_produtos: string
    valor: number
}
interface AdicionarItensPedidos{
    id_produto: string
    id_carrinho: string
    valor: number
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
        })
        
        return { dados: 'Pedido Cadastrado', pedido: resposta };
    }
     async criarPedidos({ id_cliente, id_produto, valor }: CriarPedidos){
        const resposta = await prismaCliente.carrinho.create({
            data:{
                id_cliente: id_cliente,
            }
        })
        await prismaCliente.itemsCarrinho.create({
            data: {
                id_carrinho: resposta.id,
                id_produtos: id_produto,
                valor: valor
            }
        })
        return resposta
     }

    async adcionarItensPedido({id_produto, id_carrinho, valor}: AdicionarItensPedidos){
        const produtoExiste = await prismaCliente.itemsCarrinho.findFirst({
            where: {
                id_produto: id_produto
            }
        })

        if(produtoExiste){
            throw new Error('Produto Já Adicionado no Carrinho')
        }
        
        await prismaCliente.itemsCarrinho.create({
            data: {
                id_produto: id_produto,
                id_carrinho: id_carrinho,
                valor: valor
            }
        })
        return({dados: 'Item Adicionado Com Sucesso'})
    }
}

export { PedidoServices };