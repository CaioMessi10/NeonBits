import { Request, Response } from "express";
import { HierarquiaServices } from "../../Services/Hierarquia/HierarquiaServices";

class HierarquiaCntrollers{
    async cadastro_hierarquia(req: Request, res: Response){
        const{nome} = req.body
        const hieraquiaServices = new HierarquiaServices()
        const resposta = await hieraquiaServices.cadastrar_hierarquia({
            nome
        })
        return res.json(resposta)
    }
    async listarHierarquia(req: Request, res: Response){
        const enviarDadosServices = new HierarquiaServices()
        const resposta = await enviarDadosServices.listaHierarquia()
        return res.json(resposta)
    }
}

export { HierarquiaCntrollers}