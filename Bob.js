class bob{
    constructor(x,y,radius){

        var options = {
            isStatic:false,
            restitution:1,
			friction:0,
			density:0.8
            
        }
        this.x=x;
        this.y=y;
        this.radius=radius;

        this.body=Bodies.circle(this.x,this.y,(this.radius)/2,options);
        

        //adding to the world
        World.add(world,this.body)
    }

    render(radius){
         var angle = this.body.angle;
        var bobpos =this.body.position;

        push()
	    
        translate(bobpos.x, bobpos.y);
        rotate(angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius);

        pop()
    }
}