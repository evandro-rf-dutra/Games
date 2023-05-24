class Player{
    constructor(){
        // configurações do player
        this.x = 0;
        this.y = 0;
        this.y_middle = 50; // valor padrao
        this.width = 18;
        this.height = 100;
        this.color = "#6495ED"; // azul padrao
        this.borderLine = 4;
        this.vel = 10;
        this.division = 16; // o pad do jogador terá 16 áreas de colisao. quanto maior o numero mais variações de movimento
        //
        this.direction = { // testando outra lógica.. mas aqui deveria ser aritmetica *(+1) e *(-1)
            up: false,
            down: false
        };

    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.lineWidth = this.borderLine;
        ctx.strokeRect(this.x, this.y, this.width, this.height); // contorno no retangulo
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }

    middleRandom(){
        this.y_middle = Math.random() * this.height +1;
    }
    
}