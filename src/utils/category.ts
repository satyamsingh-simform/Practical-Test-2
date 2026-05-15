import { cricketerData, fruitData, movieData } from "../core/constant";
import { gameData } from "../core/gameState";
import { randomSrumbleWord } from "../core/logic";
import { catogery } from "../ui/dom";
import { checkTime } from "./checkTime";

catogery?.addEventListener('change',()=>{
  if(gameData.lifeTracker===0){
    alert('no life left to play');
    return
  }
  gameData.diffWordArr=[];
  if(catogery?.value==='fruitData'){
    gameData.categoryOption=fruitData;
    gameData.scrumbleWord=randomSrumbleWord();
    checkTime()
  }
  else if(catogery.value==='movieData'){
    gameData.categoryOption=movieData;
    gameData.scrumbleWord=randomSrumbleWord();
    checkTime()
  }
  else{
    gameData.categoryOption=cricketerData;
    gameData.scrumbleWord=randomSrumbleWord();
    checkTime()
  }
})