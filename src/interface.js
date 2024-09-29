"use strict";
class Conta {
    constructor(numeroDaconta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaconta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
}
