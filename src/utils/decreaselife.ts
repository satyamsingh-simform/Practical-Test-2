import { gameData } from "../core/gameState";
import { gameOver } from "../core/logic";
import { life } from "../ui/dom";

export function decreaseLife(){
  gameData.lifeTracker--;
  gameOver(gameData.lifeTracker);
  life.innerHTML=`<strong>Total life:${'❤️'.repeat(gameData.lifeTracker)}</strong>`
  clearInterval(gameData.clear);
}