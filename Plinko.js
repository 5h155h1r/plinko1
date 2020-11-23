class Plinko {
    constructor(x, y){
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, 15, options);
        World.add(world, this.body);
    }

    display(){
        fill(255);
        ellipse(this.body.position.x, this.body.position.y, 15);
    }
}