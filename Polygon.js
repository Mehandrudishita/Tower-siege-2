class Polygon{
    constructor(x,y){
        var options = {'friction' : 1.0 , 'restitution' : 0.9 , 'density' : 0.7};
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
        this.radius = 20;
        this.image = loadImage("polygon.png");
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}