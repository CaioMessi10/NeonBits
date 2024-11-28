import { Request, Response } from "express";
import { LoginServices } from "../../Services/Login/LoginServices";

class LoginUsuariosControllers {
    async loginUsuarios(req: Request, res: Response) {
        const { email, senha } = req.body;
        // console.log(email, senha); // a partir daqui, fazer o arquivo services; mostra a senha descryptografada do frontend
        const enviarDadosServices = new LoginServices();
        const resposta = await enviarDadosServices.loginUsuarios({ // await causou o erro que travou o server
            email,
            senha
        });
        return res.json(resposta);
    };

    async verificaToken(req: Request, res: Response) {
        const id = req.usuarioId;
        // console.log(id);
        const enviarDadosServices = new LoginServices();
        const resposta = await enviarDadosServices.verificaToken(id);
        return res.json(resposta);
    };
};

export { LoginUsuariosControllers };