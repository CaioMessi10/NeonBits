import prismaCliente from "../../prisma/index";
import { hash } from 'bcryptjs'
import { compare } from 'bcryptjs'

interface CadUsuarios {
    nome: string
    cpf: string
    email: string
    password: string
    cep: string
    idPedidos: string
}

class UsuariosServices {
    async cadastrar_usuarios({ nome, cpf, email, password, cep, idPedidos }: CadUsuarios) {
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

        const passCrypt = await hash( password, 8)

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
                nome: true,
                email: true,
            }
        });
        return resposta;
    }

}

export { UsuariosServices };
