import { correctWordDiv, hint, resetBtn, score, scrambleWordDiv } from "../ui/dom";
import { setScoreToLocalStorage } from "../utils/bestScore";
import { decreaseLife } from "../utils/decreaselife";
import { increaseLevelHard, increaseLevelMedium } from "../utils/graduallyLevel";
import { nextWord } from "../utils/nextWord";
import { gameData } from "./gameState";

export function randomSrumbleWord(){
  const index=Math.floor(Math.random()*gameData.categoryOption.length);

  //ensure difficult level is what user choosed
  if(gameData.diffcultLevel!==gameData.categoryOption[index]['difficulty']){
    return randomSrumbleWord();
  }

  //handel unique value
  for(let ind of gameData.diffWordArr){
    if(index===ind){
      return randomSrumbleWord();
    }
  }

  gameData.scrumbleWord=gameData.categoryOption[index]["scrumbleWord"];
  scrambleWordDiv.textContent=gameData.scrumbleWord.toUpperCase();

  const correctWord=gameData.categoryOption[index]["correctWord"];
//   console.log('correctWord:',correctWord);
  gameData.diffWordArr.push(index);

  hint?.addEventListener('click',()=>{
    console.log('hint:',gameData.categoryOption[index]['hint']);
    if(!gameData.categoryOption[index]['hint']){
      console.log('no hint');
      hint.innerText='no hint';
      return;      
    }
    hint.textContent=gameData.categoryOption[index]['hint']!
  })

  return correctWord;
}



export function submit(){
  const guess=correctWordDiv.value.toUpperCase();
  console.log('guess:',guess);
  console.log('scrumble:',gameData.scrumbleWord.toUpperCase());
  
  if(guess===gameData.scrumbleWord.toUpperCase()){
    alert('correct guess')
    gameData.scoreTracker++;
    setScoreToLocalStorage();
    score.textContent=String(gameData.scoreTracker);
    if(gameData.scoreTracker>=3){
      increaseLevelMedium()
    }
    if(gameData.scoreTracker>=6){
      increaseLevelHard()
    }
    clearInterval(gameData.clear);
    nextWord();
  }
  else{
    alert('oops wrong guess');
    if(!decreaseLife()){
      nextWord();
    };
  }
  correctWordDiv.value=''
}


export function gameOver(lifeTracker:number){
  if(lifeTracker===0){
    alert('game over as our life is 0, restart to play');
    scrambleWordDiv.textContent='GAME OVER';
    return true;
  }
  return;
}


resetBtn?.addEventListener('click',()=>{
  window.location.reload();
})