import { nextWord } from "../utils/nextWord";
import { submit } from "./logic";

document.addEventListener('keyup',(e:KeyboardEvent)=>{
  console.log('enter clicked');
  
  console.log(e.key);
  
  if(e.code==='Enter'){
    submit();
    nextWord();
  }
})