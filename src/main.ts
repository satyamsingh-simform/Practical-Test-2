interface User{
  id:number,
  scrumbleWord:string,
  correctWord:string,
  difficulty:string,
}

const gameData:User[]=[
  {id:1,scrumbleWord:"alepp",correctWord:'apple',difficulty:'easy'},
  {id:2,scrumbleWord:"orgean",correctWord:'orange',difficulty:'easy'},
  {id:3,scrumbleWord:"magon",correctWord:'mango',difficulty:'easy'},
]

const scrambleWordDiv=document.querySelector<HTMLDivElement>('.word-appear');
const correctWordDiv=document.querySelector<HTMLInputElement>('.fill-word');
const submitBtn=document.querySelector<HTMLInputElement>('.getWord');
const score=document.querySelector<HTMLElement>('.score');
const nextBtn=document.querySelector<HTMLElement>('.next-word');
const timer=document.querySelector<HTMLElement>('.timer');



function randomSrumbleWord(){
  const index=Math.floor(Math.random()*gameData.length)
  const scrumbleWord= gameData[index]["scrumbleWord"];

  scrambleWordDiv.textContent=scrumbleWord;

  const correctWord= gameData[index]["correctWord"];
  return correctWord;
}
let scrumbleWord=randomSrumbleWord();
let scoreTracker:number=0;



submitBtn.addEventListener('click',()=>{
  const guess=correctWordDiv.value;
  console.log(guess);
  if(guess===scrumbleWord){
    scoreTracker++;
    console.log(scoreTracker);
    score.textContent=String(scoreTracker);
    clearInterval(clear);
  }
  correctWordDiv.value=''
})

nextBtn.addEventListener('click',()=>{
  scrumbleWord=randomSrumbleWord();
  clearInterval(clear);
  checkTime();
})

let clear:number;
function checkTime(){
    let sec=0;
    submitBtn.disabled=false;

    clear=setInterval(()=>{
      sec++;
      timer.innerHTML=`<strong>Total time:${sec}</strong>`;

      if(sec===10){
        submitBtn.disabled=true;
        clearInterval(clear);
      }
  },1000)
}
checkTime();
