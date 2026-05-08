interface User{
  id:number,
  scrumbleWord:string,
  correctWord:string,
  difficulty:string,
}

//fruitCategory
const fruitData:User[]=[
  { id: 1, scrumbleWord: "alepp", correctWord: "apple", difficulty: "easy" },
  { id: 2, scrumbleWord: "orgean", correctWord: "orange", difficulty: "easy" },
  { id: 3, scrumbleWord: "magon", correctWord: "mango", difficulty: "easy" },
  { id: 11, scrumbleWord: "awtremelno", correctWord: "watermelon", difficulty: "medium" },
  { id: 12, scrumbleWord: "bwerryrast", correctWord: "strawberry", difficulty: "medium" },
  { id: 10, scrumbleWord: "nipoepal", correctWord: "pineapple", difficulty: "medium" },
  { id: 13, scrumbleWord: "kiiw", correctWord: "kiwi", difficulty: "hard" },
  { id: 4, scrumbleWord: "naanab", correctWord: "banana", difficulty: "hard" },
  { id: 5, scrumbleWord: "agrpes", correctWord: "grapes", difficulty: "hard" },
  { id: 6, scrumbleWord: "yrrebc", correctWord: "cherry", difficulty: "hard" },
];
//movieCategory
const movieData:User[]=[
  { id: 1, scrumbleWord: "galaan", correctWord: "lagaan", difficulty: "hard" },
  { id: 2, scrumbleWord: "dagnal", correctWord: "dangal", difficulty: "easy" },
  { id: 3, scrumbleWord: "asholy", correctWord: "sholay", difficulty: "easy" },
  { id: 4, scrumbleWord: "abahubli", correctWord: "bahubali", difficulty: "medium" },
  { id: 5, scrumbleWord: "kp", correctWord: "pk", difficulty: "easy" },
  { id: 6, scrumbleWord: "raw", correctWord: "war", difficulty: "easy" },
  { id: 7, scrumbleWord: "nzidgia", correctWord: "zindagi", difficulty: "medium" },
  { id: 8, scrumbleWord: "nmkbai", correctWord: "kabmin", difficulty: "hard" },
  { id: 9, scrumbleWord: "ultsan", correctWord: "sultan", difficulty: "medium" },
  { id: 10, scrumbleWord: "eavrd", correctWord: "drave", difficulty: "hard" },
];

//cricketcategory
const cricketerData:User[]=[
  { id: 1, scrumbleWord: "lohki", correctWord: "kohli", difficulty: "easy" },
  { id: 2, scrumbleWord: "inohd", correctWord: "dhoni", difficulty: "easy" },
  { id: 3, scrumbleWord: "hitro", correctWord: "rohit", difficulty: "easy" },
  { id: 4, scrumbleWord: "bubmrah", correctWord: "bumrah", difficulty: "medium" },
  { id: 5, scrumbleWord: "nhipta", correctWord: "pathin", difficulty: "hard" },
  { id: 6, scrumbleWord: "lrahku", correctWord: "rahul", difficulty: "easy" },
  { id: 7, scrumbleWord: "anadph", correctWord: "pandha", difficulty: "medium" },
  { id: 8, scrumbleWord: "rniaeg", correctWord: "raina", difficulty: "easy" },
  { id: 9, scrumbleWord: "ceahsnit", correctWord: "sachin", difficulty: "medium" },
  { id: 10, scrumbleWord: "vjaedja", correctWord: "jadeja", difficulty: "medium" },
];

const scrambleWordDiv=document.querySelector<HTMLDivElement>('.word-appear');
const correctWordDiv=document.querySelector<HTMLInputElement>('.fill-word');
const submitBtn=document.querySelector<HTMLInputElement>('.getWord');
const score=document.querySelector<HTMLElement>('.score');
const nextBtn=document.querySelector<HTMLElement>('.next-word');
const timer=document.querySelector<HTMLElement>('.timer');
const life=document.querySelector<HTMLElement>('.life');
const level=document.querySelector<HTMLSelectElement>('.difficulty-level');
const catogery=document.querySelector<HTMLSelectElement>('.catogery');

let diffWordArr:number[]=[];
console.log(diffWordArr);

let diffcultLevel='easy';
let categoryOption=fruitData;

level.addEventListener('change',()=>{
  diffcultLevel=level.value;
  diffWordArr=[];
  scrumbleWord=randomSrumbleWord();
  console.log(diffcultLevel);
})

catogery.addEventListener('change',()=>{
  diffWordArr=[];
  if(catogery.value==='fruitData'){
    categoryOption=fruitData;
    scrumbleWord=randomSrumbleWord();
  }
  else if(catogery.value==='movieData'){
    categoryOption=movieData;
    scrumbleWord=randomSrumbleWord();
  }
  else{
    categoryOption=cricketerData;
    scrumbleWord=randomSrumbleWord();
  }
})

function randomSrumbleWord(){
  const index=Math.floor(Math.random()*categoryOption.length);

  if(diffcultLevel!==categoryOption[index]['difficulty']){
    return randomSrumbleWord();
  }

  for(let ind of diffWordArr){
    if(index===ind){
      return randomSrumbleWord();
    }
  }

  const scrumbleWord=categoryOption[index]["scrumbleWord"];
  scrambleWordDiv.textContent=scrumbleWord;

  const correctWord=categoryOption[index]["correctWord"];
  console.log('correctWord:',correctWord);
  diffWordArr.push(index);
  return correctWord;
}

let scrumbleWord=randomSrumbleWord();
let scoreTracker:number=0;

submitBtn.addEventListener('click',()=>{
  const guess=correctWordDiv.value;
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
    alert('game over as our life is 0')
    window.location.reload();
  }
  return;
}