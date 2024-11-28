import { Request, Response } from "express";
import { UsuariosServices } from "../../Services/Usuarios/UsuariosServices";

class UsuariosControllers {
    async cadastro_usuarios(req: Request, res: Response) {
        const { nome, cpf, email, senha, cep, idPedidos } = req.body;
        const usuariosServices = new UsuariosServices();
        const resposta = await usuariosServices.cadastrar_usuarios({
            nome,
            cpf,
            email,
            senha,
            cep,
            idPedidos
        });
        return res.json(resposta);
    }

    async consultar_usuarios(req: Request, res: Response) {
        const usuariosServices = new UsuariosServices();
        const resposta = await usuariosServices.consultar_usuarios();
        return res.json(resposta);
    }
    
    async consultarUsuariosUnico(req: Request, res: Response) {
        const { id } = req.body;
        // console.log(id);
        const enviarDadosServices = new UsuariosServices();
        const resposta = await enviarDadosServices.consultarUsuariosUnico(id);
        return res.json(resposta);
    };
    
    async alterarDadosUsuarios(req: Request, res: Response) {
        const { id, nome, email } = req.body;
        // console.log(id, nome, email);
        const enviarDadosServices = new UsuariosServices();
        const resposta = await enviarDadosServices.alterarDadosUsuarios({
            id,
            nome,
            email
        });
        return res.json(resposta);
    };

    async apagarUsuarios(req: Request, res: Response) {
        const { id } = req.params;
        const enviarDadosServices = new UsuariosServices;
        const resposta = await enviarDadosServices.apagarUsuarios(id);
        return res.json(resposta);
    };
}

export { UsuariosControllers };
