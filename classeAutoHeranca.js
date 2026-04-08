class Automovel{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes(){
        return `${this.marca}, ${this.modelo}, ${this.ano}`
    }
}

class Carro extends Automovel{
    constructor(marca, modelo, ano, portas){
        super(marca, modelo, ano);
        this.portas = portas;
    }
    exibirDetalhes(){
        return`${super.exibirDetalhes()}, Portas: ${this.portas}`
    }
}
class Moto extends Automovel{
    constructor(marca, modelo, ano, cilindrada, categoria){
        super(marca, modelo, ano);
        this.cilindrada = cilindrada;
        this.categoria = categoria;
    }
    exibirDetalhes(){
        return`${super.exibirDetalhes()}, Cilindrada: ${this.cilindrada}, Categoria: ${this.categoria}`
    }

}
