function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}

function Funcionario(nome, cargo, salario){
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.2;
        _salario = novoSalario;
    }



    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.125;
        this.setSalario(novoSalario);
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.325;
        this.setSalario(novoSalario);
    }
}

function GerenteGeral(nome) {
    Funcionario.call(this, nome, "Gerente Geral", 12000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.4;
        this.setSalario(novoSalario);
    }
}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const funcionario2 = new Estagiario("Rodrigo",);
const funcionario3 = new Gerente("Alice");
const funcionario4 = new GerenteGeral("Ângelo");



funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())

funcionario3.aumento();
console.log(funcionario3.getSalario())

funcionario4.aumento();
console.log(funcionario4.getSalario())


