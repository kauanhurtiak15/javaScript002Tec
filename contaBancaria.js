class contaBancaria {

    #saldo = 0;

    constructor(titular){
        this.titular = titular;
    }

    depositar(valor){
        if (valor > 0){
            this.#saldo += valor;
            console.log(`Depósito de ${valor} feito.`);
        }
    }

    sacar(valor){
        if (valor > 0 && valor >= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} feito.`);
        }else{
            console.log("Saldo insuficiente ou valor inválido.")
        }
    }

    exibirSaldo(){
        return `Olá, seu saldo é ${this.#saldo}`
    }
}

const conta1 = new contaBancaria("Zé Lombriga");
conta1.depositar(1000);
console.log(conta1.exibirSaldo())
conta1.depositar(1500);
console.log(conta1.exibirSaldo())
conta1.depositar(2000);
console.log(conta1.exibirSaldo())
conta1.depositar(2500);
conta1.depositar(3000);