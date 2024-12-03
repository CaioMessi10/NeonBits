import prismaCliente from "../../prisma/index";
import { hash } from 'bcryptjs'
import { compare } from 'bcryptjs'

interface CadUsuarios {
    nome: string
    cpf: string
    email: string
    senha: string
    cep: string
    idPedidos: string
}
interface AlterarUsuarios {
    id: string
    nome: string,
    email: string,
}

class UsuariosServices {
    async cadastrar_usuarios({ nome, cpf, email, senha, cep, idPedidos }: CadUsuarios) {
        const usuario = await prismaCliente.cadastroUsuarios.findFirst({
            where:{
                email: email
            }
        })
        const cpfexiste = await prismaCliente.cadastroUsuarios.findFirst({
            where: { cpf }
        });

        if (cpfexiste) {
            throw new Error('CPF já está cadastrado');
        }

        const passCrypt = await hash( senha, 8)

        await prismaCliente.cadastroUsuarios.create({
            data: {
                nome: nome,
                cpf: cpf,
                email: email,
                senha: passCrypt,
                cep: cep,
                idPedidos: idPedidos
            }
        });

        return { dados: 'Cadastro Efetuado com Sucesso' };
    }

    async consultar_usuarios() {
        const resposta = await prismaCliente.cadastroUsuarios.findMany({
            select: {
                id:true,
                nome: true,
                email: true,
            }
        });
        return resposta;
    }

    async consultarUsuariosUnico(id: string) {
        // console.log(id);
        const resposta = await prismaCliente.cadastroUsuarios.findFirst({
            where: {
                id: id
            },
            select: {
                nome: true,
                email: true,
                senha: true,
            }
        })
        return resposta;
    }

    async alterarDadosUsuarios({id, nome, email}: AlterarUsuarios) {
        // console.log(id, nome, email); // recebe os dados no terminal
        await prismaCliente.cadastroUsuarios.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                email: email
            }
        });
        return ({ dados: 'Cadastro Alterado Com Sucesso' });
    };

    async apagarUsuarios(id: string) {
        await prismaCliente.cadastroUsuarios.delete({
            where: {
                id: id
            }
        })
        return ({ dados: 'Registro Apagado com Sucesso' })
    };
}

export { UsuariosServices };