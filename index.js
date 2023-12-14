//Iniciando class abstrata - classe base
class Veiculo {

    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    };

    //Método clone para criar cópia do objeto
    clone() {
        return new Veiculo(this.modelo, this.marca, this.cor, this.numeroRodas); //new this.constructor
    };

    //Método represent para exibir uma representação do veículo
    represent() {
        console.log(`Veiculo: Modelo ${this.modelo}, Marca ${this.marca}, Cor ${this.cor}, numeroRodas ${this.numeroRodas}`);
    };
};

// criando subclasses

//subclasse Carro
class Carro extends Veiculo {
    constructor (modelo, marca, cor, numeroPortas) {
        super(modelo, marca, cor);
        this.numeroPortas = numeroPortas;
    };

    acelerar () {
        console.log("Acelerando o carro!");
    };

    represent() {
        console.log(`Carro: Modelo ${this.modelo}, Marca ${this.marca}, Cor ${this.cor}, numeroPortas ${this.numeroPortas}`);
    };
};

class Moto extends Veiculo {
    constructor (modelo, marca, cor, capacidadePassageiro) {
        super(modelo, marca, cor);
        this.capacidadePassageiro = capacidadePassageiro;
    };

    empinar() {
        console.log("Empinando a moto");
    };

    represent() {
        console.log(`Moto: Modelo ${this.modelo}, Marca ${this.marca}, Cor ${this.cor}, capacidadePassageiro ${this.capacidadePassageiro}`);
    };
};

const carro = new Carro('SUV', 'JEEP', 'Azul', 5);
carro.represent();

const moto = new Moto('Esportiva', 'HONDA', 'vermelha', 2);
moto.represent();

class Aplicacao {
    constructor() {
        this.veiculos = [];
        this.popularArray();
    }

    popularArray() {
        const carroOriginal = new Carro('SUV', 'JEEP', 'Azul');
        const motoOriginal = new Moto('Esportiva', 'HONDA', 'vermelha', 2);

        // Preencher o array com clones dos objetos
        for (let i = 0; i < 3; i++) {
            this.veiculos.push(carroOriginal.clone());
            this.veiculos.push(motoOriginal.clone());
        }
    }

    mostrarVeiculos() {
        this.veiculos.forEach((veiculo, index) => {
            console.log(`Veículo ${index + 1}:`);
            veiculo.represent();
            console.log('---');
        });
    }
}

const aplicacao = new Aplicacao();
aplicacao.mostrarVeiculos();