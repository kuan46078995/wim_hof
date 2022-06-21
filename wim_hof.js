const sessionNumber = window.prompt("how many sessions?");
let sessionSet = [];
for (i = 0; i < sessionNumber; i++) {
  let currentSessionLevel = window.prompt('what level for session #'+ parseInt(i+1));
  sessionSet.push(currentSessionLevel);
}
let openingFile = new Audio('./beginning.mp3');
let endingFile = new Audio('./ending.mp3');
let backgoundMusic = new Audio('./rainBackgroundSound.mp3');
function playAudio() {
  let cumulativeDelay = 17850;
  openingFile.play();
  backgoundMusic.play();
  for (i = 0; i < sessionNumber; i++) {
    let currentAudio = new Audio('./breathing_level_'+sessionSet[i]+'.mp3');
    setTimeout(() => {currentAudio.play()}, cumulativeDelay);
    cumulativeDelay = cumulativeDelay + (176750+(31000*(sessionSet[i]-1)));
  }
  setTimeout(() => {endingFile.play()}, cumulativeDelay);
  setTimeout(() => {document.write('<h3>' + "Congratulations, you just finished you customized Wim Hof breathing session! Have a good day, night, and life!" + '</h3>');}, cumulativeDelay);
};
document.write('<h3>' + `You're doing ${sessionNumber} session(s)` + '</h3>');
document.write('<h3>' + `Level(s): ${sessionSet}` + '</h3>');
