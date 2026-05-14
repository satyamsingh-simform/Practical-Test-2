import { gameData } from "../core/gameState";
import { hint, timer } from "../ui/dom";
import { decreaseLife } from "./decreaselife";

export function checkTime(){
    clearInterval(gameData.clear);
    // let sec=11;
    // submitBtn.disabled=false;
    hint.textContent='hint'
    hint.style.display='none'


    gameData.clear=setInterval(()=>{
      gameData.sec--;
      timer.innerHTML=`<strong>Total time:${gameData.sec}</strong>`;
      if(gameData.sec<=5){
        hint.style.display='flex'
      }
      if(gameData.sec===0){
        // submitBtn.disabled=true;
        decreaseLife()
        // lifeTracker--;
        // gameOver(lifeTracker);
        // life.innerHTML=`<strong>Total life:${'❤️'.repeat(lifeTracker)}</strong>`
        // clearInterval(clear);
      }
  },1000)
}
checkTime();