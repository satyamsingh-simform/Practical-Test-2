import { gameData } from "../core/gameState";
import { randomSrumbleWord } from "../core/logic";
import { level } from "../ui/dom";
import { checkTime } from "./checkTime";

level?.addEventListener('change',()=>{
  if(gameData.lifeTracker===0){
    alert('no life left to play');
    return
  }
  gameData.diffcultLevel=level.value;
  gameData.diffWordArr=[];
  gameData.scrumbleWord=randomSrumbleWord();
  console.log(gameData.diffcultLevel);
  checkTime();
})