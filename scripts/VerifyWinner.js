class VerifyWinner
{ 
    constructor(c,placar)
    {
        this.c = c;
        this.placar = placar;
    }

    draw()
    {
        if (pontoJogador1 == 5 || pontoJogador2 == 5) // && -> E    || -> OU
            {
                if (pontoJogador1 > pontoJogador2)
                    {
                    setTimeout(() =>
                    {
                        textWinner="Parabéns, você venceu!"; 
                        this.placar.resetScore();         
                    },1000);
                        
                    }
                else
                    {
                    setTimeout(() => 
                    {
                        textWinner="O CPU Venceu!";
                        this.placar.resetScore();
                    },1000);                
                    }
            }
            this.c.font = "70px arial";
            this.c.fillStyle = "white"; 
            this.c.fillText(textWinner, 150, this.c.canvas.height - 150,this.c.canvas.width);
    }  
}