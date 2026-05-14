import { gameData } from "../core/gameState";
import { randomSrumbleWord } from "../core/logic";
import { checkTime } from "./checkTime";

export function nextWord(){
  gameData.scrumbleWord=randomSrumbleWord();
  clearInterval(gameData.clear);
  checkTime();
}