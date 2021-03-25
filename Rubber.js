class RUBBER{
	constructor(x,y,r)
	{
		var options = {
			'density':4,
			'friction': 0.1,
			'restitution':0.5
		  };
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y,  (this.r-20)/2, options)
		//this.body=Bodies.circle(x,y,this.r,this.r);
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball

			pop()
	}

}