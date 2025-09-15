var idade = 17
console.log(`Voce tem ${idade} anos!`)
if (idade < 16){
    console.log('Voce não vota')
} else  if (idade < 18 || idade > 65) {
        console.log('Seu voto opcional') 
} else {
    console.log('Seu voto é obrigatorio')
}  