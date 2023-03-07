function jalarGatillo(max){
    const random = Math.round(Math.random() * max);
    console.log(random);
    if(random == 1 ) {
        console.log("HeadShot!");
    }
}

const limit = 6;
jalarGatillo(limit);