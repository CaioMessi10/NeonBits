import { Router } from 'express';

import { UsuariosControllers } from './Controllers/Usuarios/usuariosConstrollers';
import { FuncionariosControllers } from './Controllers/Funcionarios/FuncionariosControllers';
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers';
import { EstoqueControllers } from './Controllers/Estoque/EstoqueControllers';
import { HierarquiaCntrollers } from './Controllers/Hierarquia/HierarquiaControllers';
import { PedidoControllers } from './Controllers/Pedidos/PedidosControllers';
import { LoginUsuariosControllers } from './Controllers/Login/LoginUsuariosControllers';

const router = Router();

// Usuarios
router.post('/CadastroUsuarios', new UsuariosControllers().cadastro_usuarios);
router.get('/ConsultarUsuarios', new UsuariosControllers().consultar_usuarios);

// Login
router.post('/LoginUsuarios', new LoginUsuariosControllers().loginUsuarios)

// Funcionarios
router.post('/CadastroFuncionarios', new FuncionariosControllers().cadastro_funcionarios);
router.get('/ConsultarFuncionarios', new FuncionariosControllers().consultar_funcionarios);

// Produtos
router.post('/CadastroProdutos', new ProdutosControllers().cadastro_produtos);

//Estoque
router.post('/CadastroEstoque', new EstoqueControllers().cadastro_estoque)

//Pedidos
router.post('/CadastroPedido', new PedidoControllers().cadastro_pedido)

//Hierarquia
router.post('/CadastroHierarquia', new HierarquiaCntrollers().cadastro_hierarquia)

export default router;
