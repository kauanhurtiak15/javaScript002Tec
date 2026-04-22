class Aluno{
    constructor(nome, matricula, notas){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;

    }

    calcularMedia(){
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++){
            soma += this.notas
        }
        return soma / this.notas.length
    }

    obterStatus(){
        const media = this.calcularMedia()

        if (media >= 7){
            return "Aprovado"
        } else if (media >= 5){
            return "Recuperação"
        } else{
            return "reprovado"
        }
}
        exibirRelatorio(){
            console.log (`===============================`);
            console.log(`Relatorio do aluno ${this.nome}`);
            console.log(`Matricula ${this.matricula}`);
            console.log(`Media Final ${this.calcularMedia()}`)
            console.log(`Status ${this.obterStatus()}`);
}


}

const turma = [
    new Aluno(`Luiz`, `CGM5050`, [7.2, 6.5, 7.2]),
    new Aluno(`Ana`, `CGM5051`, [3.5, 4.3, 9.2]),
    new Aluno(`Tamirys`, `CGM5052`, [6.5, 5.3, 4.2]),
    new Aluno(`Arthur`, `CGM5053`, [6.5, 7.2, 9.2])
]


console.log(turma[1]);

for (let i = 0; 1 < turma.length; i++ ){
    turma [1].exibirRelatorio();
}

// let aluno1 = new Aluno(`Luiz`, 850850, [7.2, 6.5, 3.3]);
// console.log(aluno1.calcularMedia());
// console.log(aluno1.obterStatus());
// aluno1.exibirRelatorio()