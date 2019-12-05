var eyesize, eyecolor;
eyesize = 50;
eyecolor = 255;  //declaring and initializing our variable

function setup() {
  createCanvas(500,500)
}

function draw() {
  background(0, 150, 100);

  fill(218,456,66);//ear fill colors
  stroke(0,0,0);//bear stroke
  ellipse(120,100, 100,100);//left ear shape & size
  ellipse(370,100, 100,100);//right ear shape & size
  fill(218,456,66);//head fill color
  ellipse(250, 250, 350, 350);//head shape & size
  fill(0,0,0);//nose color
  stroke(0,0,0);// nose stroke
  ellipse(250,250,50,50);//nose shape & size
  fill(eyecolor,eyecolor,eyecolor);//left eye color
  ellipse(175,175,eyesize,eyesize);//left eye
  fill(0,0,0);//left eye pupil color
  ellipse(175,175,15,15);//left eye pupil shape & size
  fill(255,255,255);//right eye color
  stroke(0,0,0);//right eye stroke
  fill(eyecolor,eyecolor,eyecolor);//right eye color
  ellipse(325,175,eyesize,eyesize);//right eye
  fill(0,0,0);//right eye pupil color
  stroke(0,0,0);//right eye pupil stroke
  ellipse(325,175,15,15);//right eye pupil
  fill(255,255,255);//mouth color
  arc(250, 310, 125, 135, 0, PI);//smile
  text('POKE THE BEAR',mouseX,mouseY, 100, 100)
}

//If statement...

function mousePressed() {
//make eyes bigger if mouse is pressed
  if (eyesize = 50) {
    eyesize += 50;
    eyecolor = random(0,255);

          }
  // else keep eyes same size
 else {
    eyesize = 50;
  }
}
