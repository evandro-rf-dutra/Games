class Boll{

    constructor(){
        this.x = 0; // precisa estar no meio
        this.y = 0;
        this.width = 15;
        this.height = 15;
        this.direction = { //
            x: 0, // 0 parado, 1 direita, -1 esq
            y: 0 // 0 parado, 1 baixo, -1 cima
        };
        this.vel = 5; // velocidade que a bola se move na tela
        this.color =  "#BDB76B";
        this.lineBorder = 4;
    }

    draw(context){
        context.beginPath();
        // desenha o retangulo
        context.fillStyle = this.color;
        context.lineWidth = this.lineBorder; // contorno
        context.strokeRect(this.x, this.y, this.width, this.height); // contorno no retangulo
        context.fillRect(this.x, this.y, this.width, this.height);
        context.closePath();
    }

}