class Animal{
    fazerSom(){
        console.log("Som generico de animal...");
    }
}

class Cachorro extends Animal{
    fazerSom(){
        console.log("AU AU AU AU 🐶 🐶 🐶")
    }
}

class Javali extends Animal{
    fazerSom(){
        console.log("HONK HONK HONK 🐗 🐗 🐗")
    }
}

class CarroF1 extends Animal{
    fazerSom(){
        console.log("VRUMMMMMMMMMM 🏎 🏎 🏎")
    }
}

const meusObjetos = [new Cachorro(), new Javali(), new CarroF1()];

for (let i = 0; i < meusObjetos.length; i++ ){
    meusObjetos[i].fazerSom();
}