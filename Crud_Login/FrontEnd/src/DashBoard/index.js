import React, {useState, useEffect} from 'react';
import './estilo.dashboard.scss';

import apilocal from './../Api/apiLocal'

export default function DashBoard() {

    const [dadosUsuarios, setDadosUsuarios] = useState([''])
    useEffect(()=> {
        async function consultarDadosusarios(){
            const resposta = await apilocal.get('/ConsultarUsuarios')
            setDadosUsuarios(resposta.data)
        }
        consultarDadosusarios()
    }, [dadosUsuarios])

    return (
        <div className="DashboardContainer">
            <h1>Página de DashBoard</h1>
            {dadosUsuarios.map((item)=> {
                return(
                    <div>
                        <p>nome: {item.nome}</p>
                        <p>email: {item.email}</p>
                        <div>
                        <button>Apagar item</button>
                        <button>Editar item</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
