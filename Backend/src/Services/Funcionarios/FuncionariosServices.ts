import prismaCliente from "../../prisma";

interface CadFuncionarios {
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    idHierarquia: string;
    cep: string;
}

class FuncionariosServices {
    async cadastrar_funcionarios({ nome, cpf, email, senha, idHierarquia, cep }: CadFuncionarios) {
        const resposta = await prismaCliente.cadastroFuncionarios.create({
            data: {
                nome: nome,
                cpf: cpf,
                email: email,
                senha: senha,
                idHierarquia: idHierarquia,
                cep: cep,
            }
        });
        return { dados: 'Cadastro Feito com Sucesso', funcionario: resposta };
    }

    async consultar_funcionarios() {
        const resposta = await prismaCliente.cadastroFuncionarios.findMany({
            select: {
                nome: true,
                email: true
            }
        });
        return resposta;
    }
}

export { FuncionariosServices };
