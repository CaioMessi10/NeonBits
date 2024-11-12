import { Request, Response } from "express"

import { UsuariosServices } from "../../Services/Usuarios/UsuariosServices"

class UsuariosControllers{

  // *CADASTRAR USUARIOS* //
 async cadastrarusuarios(req: Request, res: Response){
    const { nome, email, password} = req.body
    const enviardadosservices = new UsuariosServices()
    const resposta = await enviardadosservices.cadastrarUsuarios({
        nome,
        email,
        password
    })
    return res.json(resposta)
 }

 // *CONSULTAR USUARIOS UNICO* //
async consultarUsuariosUnico (req: Request, res: Response){
  const { id } = req.body
  const enviardadosservices = new UsuariosServices()
  const resposta = await enviardadosservices.consultarUsuariosUnico(id)
  return res.json(resposta)
}

async alterarDadosUsuarios (req: Request, res: Response){
  const { id, nome, email } = req.body
  const enviardadosservices = new UsuariosServices()
  const resposta =  await enviardadosservices.alterarDadosUsuarios({
        id,
        nome,
        email
  })
  return res.json(resposta)
}

   // *CONSULTAR USUARIOS* //
   async consultarUsuarios(req: Request, res: Response){
     const enviardadosservices = new UsuariosServices()
     const resposta = await enviardadosservices.consultarUsuarios()
     return res.json(resposta)
   
    }

   // *APAGAR USUARIOS* //
   async apagarUsuarios(req: Request, res: Response){
 
    const {id} = req.params;
    const deletarUsuarios = new UsuariosServices();
    const resposta = await deletarUsuarios.apagarUsuarios(id);

    return res.json(resposta);
   }
}

export { UsuariosControllers }