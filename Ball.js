class Ball{
constructor(x,y,w,h,angle){
    var options={
        density:1,
        frictionAir:0.005,
    }
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    World.add(world,this.body);
    }
    display (){
        var angle=this.body.angle;
        var p=this.body.position;
        push();
        translate(p.x,p.y);
        rotate(angle);
        ellipse(0,0,this.w,this.h);
        pop();
    }
}