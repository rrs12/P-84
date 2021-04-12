canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1img = "https://i.postimg.cc/YqdnnNX1/car1.png"
bgimg = "https://i.postimg.cc/bv5d35nK/racing.jpg"
car1_x = 10;
car1_y = 10;
car1_height = 70;
car1_width = 90;

car2_x = 10;
car2_y = 100;
car2_height = 70;
car2_width = 90;
car2img = "https://www.pngitem.com/pimgs/m/248-2486206_car-vehicle-lamborghini-transportation-travel-car-clipart-side.png"




function right() {
    if (car1_x >= 0) {
        car1_x += 25
        uploadBackground()
        uploadcar1()
        uploadcar2()
        console.log(car1_x)
        if (car1_x >= 700) {
            document.getElementById("result1").innerHTML = "Game Result: Car 1 Wins!";
            car2_x = 10;
            car1_x = 10;
        }
    }
}

function left() {
    if (car1_x >= 0) {
        car1_x -= 10
        uploadBackground()
        uploadcar2()
        uploadcar1()
        if (car1_x <= 0) {
            document.getElementById("crash").innerHTML = "Car 1 Crashed!";
            car1_x = 10;
        }
    }
}


function right2() {
    if (car2_x >= 0) {
        car2_x += 27.57
        uploadBackground()
        uploadcar1()
        uploadcar2()
        if (car2_x >= 700) {
            document.getElementById("result1").innerHTML = "Game Result: Car 2 Wins!";
            car2_x = 10;
            car1_x = 10;
        }
    }
}

function left2() {
    if (car2_x >= 0) {
        car2_x -= 10
        uploadBackground()
        uploadcar2()
        uploadcar1()
        if (car2_x <= 0) {
            document.getElementById("crash").innerHTML = "Car 2 Crashed!";
            car2_x = 10;
        }  
    }
}


function add() {
    bgImgTag = new Image();
    bgImgTag.onload = uploadBackground;
    bgImgTag.src = bgimg;

    car1ImgTag = new Image();
    car1ImgTag.onload = uploadcar1;
    car1ImgTag.src = car1img;

    car2ImgTag = new Image();
    car2ImgTag.onload = uploadcar2;
    car2ImgTag.src = car2img;
}

function uploadBackground() {
    ctx.drawImage(bgImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1ImgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2ImgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_kd)

function my_kd(e) {
    keyPressed = e.keyCode;

    if (keyPressed == '37') {
        left()
    }

    if (keyPressed == '39') {
        right()
    }

    if (keyPressed == '65') {
        left2()
    }

    if (keyPressed == '83') {
        right2()
    }}
