var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(800,650); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(0);

   
        //strokeWeight(100);
    stroke(0);
    noFill();


    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    

    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    push();
    rotate(hrAngle);
    stroke(255,5,5 );
    strokeWeight(7);
    line(0,0,45,0);
    pop()

    push();
    rotate(mnAngle);
    stroke(254,132,73);
    strokeWeight(6);
    line(0,0,85,0);

    pop()

    push();
    rotate(scAngle);
    stroke(106,64,196);
    strokeWeight(2);
    line(0,0,100,0);
    pop()


    stroke(255,0,255);
    point(0,0)


   


  
    strokeWeight(2);
    //noFill();
    stroke(106,64,196);
    arc(0,0,300,300,0,scAngle);

    
    arc(0,0,260,260,0,hrAngle);

    strokeWeight(5);
    stroke(254,132,73);
    arc(0,0,280,280,0,mnAngle);

    strokeWeight(7);
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);


    drawSprites();
  // strokeWeight(5);
   //stroke(0,255,0);
}