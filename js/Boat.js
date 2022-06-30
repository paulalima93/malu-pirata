class Boat {
    constructor(x, y, width, height, boatPos){
        this.boat = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;

        this.image = loadImage("assets/boat.png");
        this.boatPos = boatPos;
        World.add(world, this.boat);

    }

    display(){
        var angle = this.boat.angle;
        var pos = this.boat.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.boatPos, this.width, this.height);
        pop();


    }
}