import { correctWordDiv, hint, resetBtn, score, scrambleWordDiv } from "../ui/dom";
import { decreaseLife } from "../utils/decreaselife";
import { increaseLevelHard, increaseLevelMedium } from "../utils/graduallyLevel";
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
  if(guess===gameData.scrumbleWord.toUpperCase()){
    alert('correct guess')
    gameData.scoreTracker++;
    
    score.textContent=String(gameData.scoreTracker);
    if(gameData.scoreTracker>=3){
      increaseLevelMedium()
    }
    if(gameData.scoreTracker>=6){
      increaseLevelHard()
    }
    clearInterval(gameData.clear);
  }
  else{
    alert('oops wrong guess');
    decreaseLife();
  }
  correctWordDiv.value=''
}


export function gameOver(lifeTracker:number){
  if(lifeTracker===0){
    alert('game over as our life is 0')
    window.location.reload();
  }
  return;
}


resetBtn?.addEventListener('click',()=>{
  window.location.reload();
})