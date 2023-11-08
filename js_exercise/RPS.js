function answerPC(){
    const options = ['rock', 'paper', 'scissors']
    const aleatory = Math.floor(Math.random() * options.length)
    const chooise = options[aleatory]
    return chooise
}

let scorePlayer = 0
let scorePc = 0
let rounds = 5

for(rnd = 1; rnd <= rounds; rnd++){
    const selectPlayer = prompt('Select rock, paper or scissors: ')
    const selectPc = answerPC()

    console.log('player:', selectPlayer, 'PC:', selectPc)

    if(selectPlayer === selectPc){
        console.log('tie')
    }else if((selectPlayer === 'paper' && selectPc ==='rock')||( selectPlayer === 'scissors' && selectPc ==='paper')||(selectPlayer === 'rock' && selectPc ==='scissors')){
        console.log('Player win')
        scorePlayer++
    }else{
        console.log('PC win')
        scorePc++
    }

}

if(scorePlayer > scorePc){
    console.log('the winner is Player')
}else{
    console.log('the winner is PC')
}