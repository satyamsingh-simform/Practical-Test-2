import { gameData } from "../core/gameState";
import { bestScore } from "../ui/dom";

export function setScoreToLocalStorage(){
    let score=getScoreLocalStorage();
    if(!score || Number(score)<gameData.scoreTracker){
        localStorage.setItem('bestScore',JSON.stringify(gameData.scoreTracker));
        getScoreLocalStorage();
    }
}

export function getScoreLocalStorage(){
    let score:string=JSON.parse(localStorage.getItem('bestScore')!);
    if(!score) return;
    if(!bestScore) return;
    bestScore.textContent=score;
    return score;
}