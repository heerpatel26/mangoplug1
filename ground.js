class ground
{
	constructor()
	{
		var options={
			isStatic:true,
			friction: 0			
			}
		
		this.body=Bodies.rectangle(500, 625, 1200, 20, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			rectMode(CENTER)
			//strokeWeight(4);
			fill("red");
			rect(500, 625, 1200, 20);
			
			
	}

}