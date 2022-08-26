let h= Math.floor(Math.random() * 6) + 1;
switch(h){
    case 1:
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
        break;
}
let g= Math.floor(Math.random() * 6) + 1;
switch(g){
    case 1:
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
        break;
}
if(g>h){
    document.querySelector("div h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("div h1").innerHTML="Player 1 Wins";
}