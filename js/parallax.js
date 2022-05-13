const imagesSrc = [
            "./img/background/j1.png",
            "./img/background/j2.png",
            "./img/background/j3.png",
            "./img/background/j4.png"
]


let images = []
let bgs = []

for(let i = 0 ; i < imagesSrc.length ; i ++){
    let image = new Image();
    image.src = imagesSrc[i];
    images.push(image);
    let bg1 = new Background({
        position : {
            x:0,
            y:0
        },
        image:image,
    })
    bgs.push(bg1);
}

function parllaxEffectDraw(overLayVelocity){

    let offset = [2, 1.2, 1, .6, 1.2, 1 , 0.5];

    for(let i = bgs.length-1 ; i >= 0 ; i--){
        bgs[i].draw(overLayVelocity,offset[i]);
    }

    for(let i = 0 ; i < images.length ; i++){
        if((playerPosition + 100) > images[i].width){
            
        }
    }
}