import { Request, Response } from "express";
import { FuncionariosServices } from "../../Services/Funcionarios/FuncionariosServices";

class FuncionariosControllers {
    async cadastro_funcionarios(req: Request, res: Response) {
        const { nome, cpf, email, password, idHierarquia, cep } = req.body;
        const funcionariosServices = new FuncionariosServices();
        const resposta = await funcionariosServices.cadastrar_funcionarios({
            nome,
            cpf,
            email,
            password,
            idHierarquia,
            cep
        });
        return res.json(resposta);
    }

    async consultar_funcionarios(req: Request, res: Response) {
        const funcionariosServices = new FuncionariosServices();
        const resposta = await funcionariosServices.consultar_funcionarios();
        return res.json(resposta);
    }
}

export { FuncionariosControllers };

