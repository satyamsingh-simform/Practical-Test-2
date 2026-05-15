import { gameData } from "./gameState";
import { submit } from "./logic";

document.addEventListener('keyup',(e:KeyboardEvent)=>{
  if(gameData.lifeTracker===0){
    alert('no life left to play');
    return;
  }
  console.log('enter clicked');
  
  console.log(e.key);
  
  if(e.code==='Enter'){
    submit();
  }
})