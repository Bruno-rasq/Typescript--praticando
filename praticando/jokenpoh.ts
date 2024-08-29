enum op {
	pedra = "pedra",
	papel = "papel",
	tesoura = "tesoura"
}

type check = {
	"player": string,
	"comp": string,
	"winner": string
}

const checks: check[] = [
	{
		"player": op.pedra,
		"comp": op.tesoura,
		"winner": "player"
	},
	{
		"player": op.papel,
		"comp": op.pedra,
		"winner": "player"
	},
	{
		"player": op.tesoura,
		"comp": op.papel,
		"winner": "player"
	},
	{
		"player": op.pedra,
		"comp": op.papel,
		"winner": "comp"
	},
	{
		"player": op.papel,
		"comp": op.tesoura,
		"winner": "comp"
	},
	{
		"player": op.tesoura,
		"comp": op.pedra,
		"winner": "comp"
	}
]

const randomIndx = () => {
	return Math.floor(Math.random() * 3)
}

const game = (jogada: op): string => {
	const jogadas = ['pedra', 'papel', 'tesoura']
	const comp = jogadas[randomIndx()]
	let result = ""

	if (comp === jogada){
		result = "empate"
		return result
	}

	for(const match of checks){
		if(match.player === jogada && match.comp === comp){
			result = match.winner
			return result
		}
	}

	
	return result
}


console.log(game(op.pedra))