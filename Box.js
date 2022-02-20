class Box{
    constructor (x,y,w,h){
        var options ={
            restitution:1.0,
            density:0.04,
            friction:1.0
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
    display(){
        var p=this.body.position;
        var angle=this.body.angle;
        push();
        translate(p.x,p.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}