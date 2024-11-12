import { Router } from 'express'

//importes controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'

const router = Router()

//criação das rotas de end point
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarusuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultarUsuarios)
router.post('/ConsultarUsuariosUnico', new UsuariosControllers().consultarUsuariosUnico)
router.delete('/ApagarUsuarios/:id', new UsuariosControllers().apagarUsuarios)
router.put('/AlterarDadosUsuarios', new UsuariosControllers().alterarDadosUsuarios)

router.post('/CadastrarGrupos', new GruposControllers().cadastrargrupos)

export default router