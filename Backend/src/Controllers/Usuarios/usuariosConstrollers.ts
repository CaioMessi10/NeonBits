import { Request, Response } from "express";
import { UsuariosServices } from "../../Services/Usuarios/UsuariosServices";

class UsuariosControllers {
    async cadastro_usuarios(req: Request, res: Response) {
        const { nome, cpf, email, password, cep, idPedidos } = req.body;
        const usuariosServices = new UsuariosServices();
        const resposta = await usuariosServices.cadastrar_usuarios({
            nome,
            cpf,
            email,
            password,
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
}

export { UsuariosControllers };
