type Sexo = 'Masculino' | 'Feminino'

//primeira forma 
class PessoaFisica1 {
	readonly nome:  string;
	readonly cpf:   string;
	readonly rg:    string;
	readonly email: string;
	readonly sexo:  Sexo;

	constructor(
		nome: string,
		cpf: string,
		rg: string,
		email: string,
		sexo: Sexo
	){
		this.nome  = nome
		this.cpf   = cpf
		this.rg    = rg
		this.email = email
		this.sexo  = sexo
	}
}

//segunda forma de fazer
class PessoaFisica2 {
	constructor(
		readonly nome:  string,
		readonly cpf:   string,
		readonly rg:    string,
		readonly email: string,
		readonly sexo:  Sexo
	){}
}


type PessoaFisica = {
	nome:  string;
	cpf:   string;
	rg:    string;
	email: string;
	sexo:  Sexo;
}

//terceira forma de fazer 
class PessoaFisica3 {
	constructor(
		readonly data: PessoaFisica
	){}
}

const pf1 = new PessoaFisica1("test", "000-000-000-00", "xxx-xxx-xx", "test@test.com", "Masculino")

const pf2 = new PessoaFisica2("test2", "000-000-000-00", "xxx-xxx-xx", "test2@test.com", "Feminino")

const pfdata: PessoaFisica = {
	nome: "test3",
	cpf: "xx",
	rg: "xx",
	email: "test3@test.com",
	sexo: "Masculino"
}

const pf3 = new PessoaFisica3(pfdata)

console.log(pf1)
console.log(pf2)
console.log(pf3)