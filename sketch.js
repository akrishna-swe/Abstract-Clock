

let grass
let flowers;
let x, y;
let angle = 0;
let bgColor;
let radius = 50;
let winWidth = 800;
let winHeight = 500;

let prevMin;

function setup() {
    createCanvas(winWidth, winHeight);
    colorMode(HSB, 360, 100, 100, 100);
    angleMode(DEGREES);

    flowers = new Array(60);
    for (let i = 0; i < flowers.length; i++) {
        flowers[i] = new Flower(i * (winWidth/60) + 20, winHeight- 150);
    }
        
    startY = winHeight/2
    startX = winWidth/2

    bgColor = color(206, 53, 95);
}

function draw() {
    if (prevMin != minute()) {
        console.log(minute)
        prevMin = minute()
    }

    background(bgColor);
    x = hour() * (winWidth/24);
    y = winHeight/2 -100

    noStroke();

    if (hour() > 6 && hour() <= 18) {
        //day
        bgColor = color(206, 53, 95)
        fill(50,36,100);
        ellipse(x, y, radius);
    } else {
        //night
        bgColor = color(221, 83, 30)
        fill(50,36,100);
        ellipse(x,y,radius);
        
        fill(bgColor)
        ellipse(x-10,y,radius);
    }
    
    //it takes 60 seconds for one flower to bloom
    let min = minute();
    for (let i = 0; i <= min; i++){
        if (i == min) {
            flowers[i].bloom();
        } else{
            flowers[i].draw();
        }  
    }
}