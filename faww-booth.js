const video = document.getElementById("video");

const canvas = document.getElementById("canvas");

const stripCanvas = document.getElementById("stripCanvas");

const startBtn = document.getElementById("start");

const countdown = document.getElementById("countdown");

const downloadBtn = document.getElementById("download");

const photoCount = document.getElementById("photoCount");

const filterSelect = document.getElementById("filterSelect");

let photos=[];

let currentFilter="none";

navigator.mediaDevices.getUserMedia({video:true})

.then(stream=>{

video.srcObject=stream;

});

filterSelect.onchange=function(){

currentFilter=this.value;

};

startBtn.onclick=async function(){

photos=[];

photoCount.innerText="Photos Taken: 0 / 4";

for(let i=0;i<4;i++){

await countdownTimer();

takePhoto(i);

await new Promise(r=>setTimeout(r,700));

}

generateStrip();

downloadBtn.style.display="inline-block";

};

function countdownTimer(){

return new Promise(resolve=>{

let time=3;

countdown.innerText=time;

let interval=setInterval(()=>{

time--;

countdown.innerText=time;

if(time===0){

clearInterval(interval);

countdown.innerText="";

resolve();

}

},1000);

});

}

function takePhoto(index){

const ctx=canvas.getContext("2d");

ctx.filter=currentFilter;

ctx.drawImage(video,0,0,400,300);

let data=canvas.toDataURL("image/png");

photos.push(data);

photoCount.innerText="Photos Taken: "+(index+1)+" / 4";

savePhoto(data);

}

function generateStrip(){

const stripCtx=stripCanvas.getContext("2d");

stripCtx.fillStyle="white";

stripCtx.fillRect(0,0,300,900);

let y=20;

photos.forEach(photo=>{

let img=new Image();

img.src=photo;

img.onload=function(){

stripCtx.drawImage(img,25,y,250,180);

y+=210;

};

});

}

downloadBtn.onclick=function(){

let link=document.createElement("a");

link.download="faww-photostrip.png";

link.href=stripCanvas.toDataURL();

link.click();

};

function savePhoto(data){

fetch("faww-save.php",{

method:"POST",

body:JSON.stringify({image:data})

});

}