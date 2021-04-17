    class Thread{
        constructor(bodyA,bodyB, offsetX,offsetY){
    
            //all properties under Constraint 
            //bodyA and bodyB are the fixed syntax for constrain between two bodies
            //stiffness property decides obviosly, the stiffness of thread connecting two bodies
            //length property assigns the length of that thread 
            
             this.offsetX =offsetX
             this.offsetY=offsetY
            

            var x = {
                bodyA : bodyA,
                bodyB : bodyB,
                pointB: {x:this.offsetX, y:this.offsetY},
                stiffness : 0.05 
                
            } 

            
        
            //this is synatx to creare a Constraint
            //x is variable storing all properties 
    
             this.thread = Constraint.create(x);
             World.add(world,this.thread);
        }
    
        display(){
        
            //namespacing
        var posA=this.thread.bodyA.position;
        var posB=this.thread.bodyB.position;
    
         //displaying this
        strokeWeight(5);
        stroke(0);
        
        var Anchor1X=posA.x
		var Anchor1Y=posA.y

		var Anchor2X=posB.x+this.offsetX
		var Anchor2Y=posB.y+this.offsetY

		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

        }
    }
