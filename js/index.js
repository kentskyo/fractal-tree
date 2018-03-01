
var parms = {
	angle: 0,
	branchLength: 0.67,
	baseLength: 200
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	parms.angle = PI/4;

	var gui = new dat.GUI();
	gui.add(parms, 'angle', 0, TWO_PI, 0.01);
	gui.add(parms, 'baseLength', 10, 400, 1);
	gui.add(parms, 'branchLength', 0, 0.8, 0.001);
	gui.close();
}

function draw() {  
	background(0);
	angle = parms.angle
	stroke(255,0,0);
	translate(width/2, height);
	branch(parms.baseLength);

}

function branch(len) {
	if (len <= 10) return;
	line(0,0,0,-len);
	translate(0,-len);
	push();
	rotate(angle);
	branch(len * parms.branchLength);
	pop();
	push();
	rotate(-angle);
	branch(len * parms.branchLength);
	pop();
}