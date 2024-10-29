import { Request, Response } from "express"
import { GruposServices } from "../../Services/Grupos/GruposServices"



class GruposControllers{
    async cadastrargrupos(req: Request,  res: Response){
        const { nome } = req.body
        const enviargruposservices = new GruposServices()
        const resposta = await enviargruposservices.cadastrarGrupos({
            nome
        })
        return res.json(resposta)
    }
}
export { GruposControllers}