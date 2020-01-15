function setup() {
  createCanvas(390, 550);  
}


//as I put no stroke i need to create another functio to create the line
function draw(){ 
  background(47,50,193);
  stroke(24);
  line(194, 70, 195, 200); 
  noStroke();
  ellipse(100, 60, 55, 55);
  
//Grayscale for shadowing 0(darker) to 6(lighter)

  var gray0 = color(24);
  var gray1 = color(32);
  var gray2 = color(48);
  var gray3 = color(80);
  var gray4 = color(104);
  var gray5 = color(128);
  var gray6 = color(188);
  var gray7 = color(195);
  
  push();
  fill(gray1);
  rect(0,130,50,300);
  fill(gray7);
  rect(120,200,20,300);
  fill(gray2);
  rect(20,200,100,300);
  fill(gray7);
  rect(260,150,70,300);
  fill(gray0);
  rect(192,110,6,300);
  fill(gray0);
  rect(192,110,6,300);
  fill(gray0);
  rect(189,120,12,300);
  fill(gray0);
  rect(179,130,32,300);
  fill(gray0);
  rect(176.5,135,37,300);
  fill(gray0);
  rect(172.5,145,45,300);
  fill(gray0);
  rect(165,150,60,300);
  fill(gray0);
  rect(165,150,60,300);
  fill(gray5);
  rect(220,280,35,300);
  fill(gray5);
  rect(220,280,35,300);
  fill(gray6);
  rect(180,280,40,300);
  fill(gray5);
  rect(10,220,50,300);
  fill(gray6);
  rect(60,220,25,300);
  fill(gray6);
  rect(70,260,30,300);
  fill(gray1);
  rect(160,350,30,300);
  fill(gray1);
  rect(100,300,60,300);
  fill(gray2);
  rect(300,230,60,300);
  fill(gray1);
  rect(320,260,60,300);
  fill(gray0);
  rect(355,250,60,300);
  fill(gray0);
  rect(315,350,60,120);
  fill(gray0);
  rect(255,370,60,120);
  fill(gray5);
  rect(265,425,25,120);
  fill(gray5);
  rect(255,435,10,120);
  fill(gray2);
  rect(230,400,25,120);
  fill(gray3);
  rect(200,400,30,120);
  fill(gray1);
  rect(180,440,40,120);
  fill(gray1);
  rect(180,420,20,120);
  fill(gray0);
  rect(120,400,60,120);
  fill(gray2);
  rect(110,400,40,120);
  fill(gray3);
  rect(110,370,60,120);
  fill(gray3);
  rect(110,350,23,130);
  fill(gray5);
  rect(80,350,30,100);
  fill(gray0);
  rect(120,380,60,150);
  fill(gray2);
  rect(0,280,70,400);
  fill(gray2);
  rect(0,280,70,400);
  fill(gray4);
  rect(30,415,70,140);
  fill(gray1);
  rect(60,280,20,400);
  fill(gray1);
  rect(0,350,30,200);
  fill(gray4);
  rect(30,415,70,140);
  fill(gray1);
  rect(0,350, 30,200);
  fill(gray2);
  rect(30,435,15,130);
  fill(gray3);
  rect(45,435,40,130);
  fill(gray2);
  rect(340,440,50,110);
  fill(gray1);
  rect(120,450,250,100);
  fill(gray6);
  rect(75,450,70,100);
  
}

