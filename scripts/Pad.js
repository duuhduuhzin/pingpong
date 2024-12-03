class Pad{ 
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.vel=10;
        this.largura = 70;
        this.altura = 70;
        this.x=5;
        this.y=(c.canvas.height/2)-(this.altura/2);
        this.raqueteL = new Image ();
        this.raqueteL.src = "assets/raqueteL.png";
        this.raqueteL.width=70;
        this.raqueteL.height=70;
        this.raqueteL.addEventListener('load',()=>{
           this.draw()
        })

    }
    management(){
    
        if (this.keyboard.cima) 
            if (this.y > 0 && this.y - 5)
                this.y-=this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height-this.altura - 5) 
                this.y+=this.vel;            
    }
    draw(){
        this.management();
        this.c.drawImage(this.raqueteL, this.x, this.y, this.raqueteL.width, this.raqueteL.height);
    }
   
}






