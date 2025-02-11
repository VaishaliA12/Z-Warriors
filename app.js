const maxScore=10
let timerCount=12
let bullets=11
let timer;
let startTimerCount=4;
let startTimer;
let gameStarted=false
let score=0;
let canShoot=false

// CAPTURED ELEMENTS
const shootAudio= new Audio("https://cdn.pixabay.com/download/audio/2022/03/26/audio_d0ed19ffb1.mp3?filename=gun_in_small_room_02-107590.mp3");
shootAudio.volume=0.07;
const moneySound=new moneySound("https://cryptogunner.online/wp-content/uploads/2023/05/coins.mp3");
moneySound.volume=0.2;
const bulletElement=document.querySelector("#bullets");
const scoreElement=document.querySelector("#score");
const timerElement=document.querySelector("#timer");
const bulletElementNum=document.querySelector("#bullets-num");
const scoreElementNum=document.querySelector("#score-num");
const timerElementNum=document.querySelector("#timer-num");
const cursor=document.querySelector(".cursor");
const container=document.querySelector(".container");
const bulletHole=document.querySelector(".bulletHole");
const bloodSpot=document.querySelector(".bloodSpot");
const button=document.querySelector(".button");
const zombie=document.createElement("img");
const startTimerElementNum=document.getElementById("start-timer");
const gameRules=document.querySelector(".game-rules");

// ZOMBIE AND MUSIC SPAWN SETTINGS
zombie.setAttribute("class","zombie");
const randomNumber=Math.floor(Math.random()*100);
let backgroundMusic;
 // if randomNumber is between 0 and 33, spawn zombie 1
 if(randomNumber>=0 && randomNumber<=33)
 {
    zombie.setAttribute("src","https://clipart-library.com/images_k/zombie-head-silhouette/zombie-head-silhouette-24.png");
    backgroundMusic=new Audio('https://cryptogunner.online/wp-content/uploads/2023/05/background-sound.mp3');
 }
 else
 // if randomNumber is between 34 and 66, spawn zombie 2
 if(randomNumber>=34 && randomNumber<=66)
 {
    zombie.setAttribute("src","https://clipart-library.com/images_k/zombie-head-silhouette/zombie-head-silhouette-24.png");
    backgroundMusic=new Audio('https://cryptogunner.online/wp-content/uploads/2023/04/Creepy-Action.mp3');
 }
 else 
 // if randomNumber is between 67 and 100, spawn zombie 3
if(randomNumber>=67 && randomNumber<=100){
    zombie.setAttribute("src","https://clipart-library.com/images_k/zombie-head-silhouette/zombie-head-silhouette-24.png");
    backgroundMusic=new Audio('https://cryptogunner.online/wp-content/uploads/2023/04/Castle-of-Horrors.mp3');
} 
const contHeight=container.offsetHeight;
const contWidth=container.offsetWidth;
setInterval(()=>{
    const randTop=Math.random()*(contHeight-100);
    const randLeft=Math.random()*(contWidth-100);
    zombie.style.position="absolute";
    zombie.style.top=randTop+"px";
    zombie.style.left=randLeft+"px";
},1000);

// GAME INFO SCORE
button.addEventListener("mousedown",startGame)
bulletElementNum.innerHTML=bullets;
scoreElementNum.innerHTML=`${score}/${maxScore}`;
timerElementNum.innerHTML=timerCount;

// FUNCTIONS
