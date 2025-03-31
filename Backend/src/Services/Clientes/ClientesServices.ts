import prismaCliente   from "../../prisma";
import { hash } from "bcryptjs";

interface CadClientes {
    nome: string
    cpf: string
    email: string
    password: string
    cep: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
}

class ClientesServices{
    async cadastrarClientes({ nome, cpf, email, password, cep, rua, numero, complemento, bairro, cidade, estado}: CadClientes){
        const consultaCpf = await prismaCliente.clientes.findFirst({
            where: {
                cpf: cpf
            }
        })
        if (consultaCpf){
            throw new Error('CLiente já está cadastrado')
        }
        const senhaCrypt = await hash(password, 8)
        await prismaCliente.clientes.create({
            data:{
                nome: nome,
                cpf: cpf,
                email: email,
                password: senhaCrypt,
                cep: cep,
                rua: rua,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                funcionario: false,
                cliente: true
            }
        })
        return({ dados: 'Cadastro efetuado com sucesso' })
    }
}

export { ClientesServices}