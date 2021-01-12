class Bin {
    constructor(){
        var options={
            isStatic: true
        }
        this.left=Bodies.rectangle((width/2)-100,height-85,20,100,options);
        this.lwidth=20;
        this.lheight=100;
        World.add(world,this.left);

        this.right=Bodies.rectangle((width/2)+100,height-85,20,100,options);
        this.rwidth=20;
        this.rheight=100;
        World.add(world,this.right);

        this.bottom=Bodies.rectangle(width/2,height-85,200,20,options);
        this.bwidth=240;
        this.bheight=20;
        World.add(world,this.bottom);
        this.image=loadImage("sprites/dustbin.png");




    }

    display(){
        var posleft=this.left.position;
        fill("red");
        rectMode(CENTER);
        rect(posleft.x,posleft.y,this.lwidth,this.lheight);
        var posright=this.right.position;
        fill("red");
        rectMode(CENTER);
        rect(posright.x,posright.y,this.rwidth,this.rheight);
        var posbottom=this.bottom.position;
        fill("red");
        imageMode(CENTER);
        image(this.image,posbottom.x,posbottom.y,this.bwidth,130);
        


    }
}