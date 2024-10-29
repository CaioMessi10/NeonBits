import { Router } from 'express'

//importes controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'

const router = Router()

//criação das rotas de end point
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarusuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultarUsuarios)

router.post('/CadastrarGrupos', new GruposControllers().cadastrargrupos)

export default router