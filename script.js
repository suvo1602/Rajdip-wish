// Create floating balloons

function createBalloons(){

    let colors=[
        "red",
        "yellow",
        "pink",
        "cyan",
        "lime",
        "orange"
    ];


    for(let i=0;i<15;i++){

        let balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.style.left=Math.random()*100+"%";

        balloon.style.background=
        colors[Math.floor(Math.random()*colors.length)];


        balloon.style.animationDelay=
        Math.random()*5+"s";


        document.body.appendChild(balloon);

    }

}


createBalloons();



// Simple click sound function for future pages

function playSound(){

    let audio=new Audio("pop.mp3");

    audio.play();

}

