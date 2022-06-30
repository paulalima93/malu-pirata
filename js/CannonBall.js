class CannonBall {
    constructor(x,y){
        var options = { 
            isStatic: true
        }
        this.trajectory = []
        this.raio = 30;
        this.ball = Bodies.circle (x, y, this.raio, options);
        this.image = loadImage("assets/cannonball.png");
        World.add(world, this.ball);

    }

    shoot(){
        var newAngle = cannon.angle -28;
        var velocity = p5.Vector.fromAngle(radians(newAngle));
        velocity.mult(20);
        Matter.Body.setStatic(this.ball, false);
        Matter.Body.setVelocity(this.ball, {
            x: velocity.x, 
            y: velocity.y 
        });
    }

    display(){
        var pos = this.ball.position;

        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.raio, this.raio);
        pop();

        if(this.ball.velocity.x > 0 && pos.x>10) {
            var position = [pos.x, pos.y];
            this.trajectory.push(position);
        }

        for(var i = 0; i<this.trajectory.length; i++) {
            image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5,5);
        }

    }
}


