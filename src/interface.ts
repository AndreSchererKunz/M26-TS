class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaconta: number) {
        this.numeroDaConta = numeroDaconta;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

class ContaCorrrente extends Conta implements ITransacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    taxaTransferencia: number = 0;
    
}