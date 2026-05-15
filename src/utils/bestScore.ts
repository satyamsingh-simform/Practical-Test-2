import { gameData } from "../core/gameState";
import { bestScore } from "../ui/dom";

export function setScoreToLocalStorage(){
    let score=getScoreLocalStorage();
    if(score<gameData.scoreTracker){
        localStorage.setItem('bestScore',JSON.stringify(gameData.scoreTracker));
        getScoreLocalStorage();
    }
}

export function getScoreLocalStorage(){
    let score=JSON.parse(localStorage.getItem('bestScore'));
    bestScore.textContent=score;
    return score;
}