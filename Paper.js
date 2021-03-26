
class Paper  {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.5,
            fiction:0.5,
            density:0.2
    }  
    this.body=Bodies.circle(x,y,r,options)
    this.w=width
    this.h=height
    this.r=r
    //this.width = width;
     //this.height = height;
   // this.image = loadImage("paper.png");
     World.add(world,this.body)
 }

    
    display() {
        //var pos=this.body.position
      var pos=this.body.position
      
      
        push()
       translate(pos.x,pos.y)
        fill(255,0,255)
        ellipseMode(RADIUS)
       // rectMode(CENTER);
        ellipse(0,0,this.r,this.r)
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        pop();

    }
   
}