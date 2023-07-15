class CannonBall{
    constructor(x,y){

        var options={
            isStatic:true
        }

        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,30,options);
        this.image= loadImage("./assets/cannonball.png");
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;

        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,30,30)
        pop();
    }
}