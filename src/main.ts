


















// let diffWordArr:number[]=[];
// console.log(diffWordArr);

// let diffcultLevel='easy';
// let categoryOption=fruitData;

// level?.addEventListener('change',()=>{
//   diffcultLevel=level.value;
//   diffWordArr=[];
//   scrumbleWord=randomSrumbleWord();
//   console.log(diffcultLevel);
//   checkTime();
// })

// catogery?.addEventListener('change',()=>{
//   diffWordArr=[];
//   if(catogery?.value==='fruitData'){
//     categoryOption=fruitData;
//     scrumbleWord=randomSrumbleWord();
//     checkTime()
//   }
//   else if(catogery.value==='movieData'){
//     categoryOption=movieData;
//     scrumbleWord=randomSrumbleWord();
//     checkTime()
//   }
//   else{
//     categoryOption=cricketerData;
//     scrumbleWord=randomSrumbleWord();
//     checkTime()
//   }
// })



// let scrumbleWord=randomSrumbleWord();
// let scoreTracker:number=0;



// document.addEventListener('keyup',(e:KeyboardEvent)=>{
//   console.log('enter clicked');
  
//   console.log(e.key);
  
//   if(e.code==='Enter'){
//     submit();
//     nextWord();
//   }
// })

// function increaseLevelMedium(){
//   diffcultLevel='medium'
// }
// function increaseLevelHard(){
//   diffcultLevel='medium'
// }

// function submit(){
//   const guess=correctWordDiv.value.toUpperCase();
//   if(guess===scrumbleWord.toUpperCase()){
//     alert('correct guess')
//     scoreTracker++;
    
//     console.log(scoreTracker);
//     score.textContent=String(scoreTracker);
//     if(scoreTracker>=3){
//       increaseLevelMedium()
//     }
//     if(scoreTracker>=6){
//       increaseLevelHard()
//     }
//     clearInterval(clear);
//   }
//   else{
//     alert('oops wrong guess');
//     decreaseLife();
//   }
//   correctWordDiv.value=''
// }

// function nextWord(){
//   scrumbleWord=randomSrumbleWord();
//   clearInterval(clear);
//   checkTime();
// }
// submitBtn?.addEventListener('click',()=>{
//   const guess=correctWordDiv.value;
//   if(guess===scrumbleWord){
//     scoreTracker++;
    
//     console.log(scoreTracker);
//     score.textContent=String(scoreTracker);
//     clearInterval(clear);
//   }
//   correctWordDiv.value=''
// })

// nextBtn?.addEventListener('click',()=>{
//   scrumbleWord=randomSrumbleWord();
//   clearInterval(clear);
//   checkTime();
// })

// let clear:number;
// let lifeTracker=3;

// function decreaseLife(){
//   lifeTracker--;
//   gameOver(lifeTracker);
//   life.innerHTML=`<strong>Total life:${'❤️'.repeat(lifeTracker)}</strong>`
//   clearInterval(clear);
// }

// function checkTime(){
//     clearInterval(clear);
//     let sec=11;
//     // submitBtn.disabled=false;
//     hint.textContent='hint'
//     hint.style.display='none'


//     clear=setInterval(()=>{
//       sec--;
//       timer.innerHTML=`<strong>Total time:${sec}</strong>`;
//       if(sec<=5){
//         hint.style.display='flex'
//       }
//       if(sec===0){
//         // submitBtn.disabled=true;
//         decreaseLife()
//         // lifeTracker--;
//         // gameOver(lifeTracker);
//         // life.innerHTML=`<strong>Total life:${'❤️'.repeat(lifeTracker)}</strong>`
//         // clearInterval(clear);
//       }
//   },1000)
// }
// checkTime();

// function gameOver(lifeTracker:number){
//   if(lifeTracker===0){
//     alert('game over as our life is 0')
//     window.location.reload();
//   }
//   return;
// }

// resetBtn?.addEventListener('click',()=>{
//   window.location.reload();
// })