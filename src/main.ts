interface User{
  id:number,
  scrumbleWord:string,
  correctWord:string,
  difficulty:string,
}

const gameData: User[] = [
  { id: 1, scrumbleWord: "alepp", correctWord: "apple", difficulty: "easy" },
  { id: 2, scrumbleWord: "orgean", correctWord: "orange", difficulty: "easy" },
  { id: 3, scrumbleWord: "magon", correctWord: "mango", difficulty: "easy" },

  // { id: 4, scrumbleWord: "naanab", correctWord: "banana", difficulty: "easy" },
  // { id: 5, scrumbleWord: "agrpes", correctWord: "grapes", difficulty: "easy" },
  // { id: 6, scrumbleWord: "yrrebc", correctWord: "cherry", difficulty: "easy" },
  // { id: 7, scrumbleWord: "paayap", correctWord: "papaya", difficulty: "easy" },
  // { id: 8, scrumbleWord: "nolem", correctWord: "melon", difficulty: "easy" },
  // { id: 9, scrumbleWord: "aechp", correctWord: "peach", difficulty: "easy" },
  // { id: 10, scrumbleWord: "nipoepal", correctWord: "pineapple", difficulty: "medium" },
  // { id: 11, scrumbleWord: "awtremelno", correctWord: "watermelon", difficulty: "medium" },
  // { id: 12, scrumbleWord: "bwerryrast", correctWord: "strawberry", difficulty: "medium" },
  // { id: 13, scrumbleWord: "kiiw", correctWord: "kiwi", difficulty: "easy" },
];

const scrambleWordDiv=document.querySelector<HTMLDivElement>('.word-appear');
const correctWordDiv=document.querySelector<HTMLInputElement>('.fill-word');
const submitBtn=document.querySelector<HTMLInputElement>('.getWord');
const score=document.querySelector<HTMLElement>('.score');
const nextBtn=document.querySelector<HTMLElement>('.next-word');
const timer=document.querySelector<HTMLElement>('.timer');
const life=document.querySelector<HTMLElement>('.life');


let diffWordArr:number[]=[];
console.log(diffWordArr);

function randomSrumbleWord(){
  const index=Math.floor(Math.random()*gameData.length);
  for(let ind of diffWordArr){
    if(index===ind){
      randomSrumbleWord();
      return;
    }
  }
  const scrumbleWord= gameData[index]["scrumbleWord"];

  scrambleWordDiv.textContent=scrumbleWord;

  const correctWord= gameData[index]["correctWord"];
  diffWordArr.push(index);
  console.log(diffWordArr);
  
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
let lifeTracker=3;
function checkTime(){
    let sec=10;
    submitBtn.disabled=false;

    clear=setInterval(()=>{
      sec--;
      timer.innerHTML=`<strong>Total time:${sec}</strong>`;

      if(sec===0){
        submitBtn.disabled=true;
        lifeTracker--;
        gameOver(lifeTracker);
        life.innerHTML=`<strong>Total life:${lifeTracker}</strong>`
        clearInterval(clear);
      }
  },1000)
}
checkTime();

function gameOver(lifeTracker:number){
  if(lifeTracker===0){

  }
  return;
}