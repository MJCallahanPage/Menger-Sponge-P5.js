var sponge = [];
var clickCount = 0;

function setup() {
    
    //Create Canvas Area
    createCanvas(windowWidth,windowHeight,WEBGL).parent("mengerSponge");
    
    //Set Frame Rate - 25 FPS
    frameRate(15);
    
    //Lighting
    ambientLight(50,130,185);
    pointLight(180, 100, 75, 500, 400, 0);
        
    //Initial Single Box State
    sponge.push(new Box(0, 0, 0, min(width*0.5,height*0.5)));

}

function draw() {
    
    //Set Background Colour
    background(50);
    
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.03);
        
    sponge.forEach(function(box) {
      box.show();  
    });
}

function windowResized() { 
    resizeCanvas(windowWidth, windowHeight); 
}

function mousePressed() {
    clickCount++;
    var newSponge = [];
    if(clickCount > 3){
        newSponge.push(new Box(0, 0, 0, min(width*0.5,height*0.5)));
        clickCount = 0;
    } else {
        sponge.forEach(function(box) {
            newSponge.push(...box.subDivide());
        })
    }
    sponge = newSponge;
}