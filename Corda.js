class Corda{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250,
        }
        this.pointB=pointB;
        this.corda=Constraint.create(options);
        World.add(world,this.corda);
    }
    attack(body){
        this.corda.bodyA=body;
    }
    fly(){
        this.corda.bodyA=null;
    }
    display(){
        if (this.corda.bodyA){
            var pointA=this.corda.bodyA.position;
            var pointB=this.pointB;
            push();
            line(pointB.x,pointB.y,pointA.x,pointB.y);
            pop();
        }
    }
}