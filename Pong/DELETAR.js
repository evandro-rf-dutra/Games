console.log('teste');

var meio_bola = 59;
var meio_player = 50;

var velocidade_jogador = 10;

var acuracia = meio_bola - meio_player;

console.log(acuracia);

if( (meio_bola - meio_player) < 0 ){ // negativo
    // valor
    if( (meio_bola - meio_player) > (velocidade_jogador*(-1))){
        console.log('salto de precisao');
        console.log(`${(meio_bola - meio_player)} < ${(velocidade_jogador*(-1))}`);
    }
}
else{
    // positivo
    if( (meio_bola - meio_player) < (velocidade_jogador)){
        console.log('salto de precisao');
        console.log(`${(meio_bola - meio_player)} < ${(velocidade_jogador)}`);
    }

}
