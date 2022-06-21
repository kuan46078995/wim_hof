
const sessionNumber = window.prompt("how many sessions?");
const getTime = () => {
    let sessionLength = window.prompt('what level for session #'+ parseInt(sessionSet.indexOf(sessionSet[i])+1));
 return sessionLength;
};
const sessionSet = Array.from({length: sessionNumber}, (_, i) => i + 1);
for(i=0; i < sessionSet.length; i++) {
  sessionSet[i]= getTime()
};
let s1 = parseInt(sessionSet[0])-1;
let s2 = parseInt(sessionSet[1])-1;
let s3 = parseInt(sessionSet[2])-1;
let s4 = parseInt(sessionSet[3])-1;
let s5 = parseInt(sessionSet[4])-1;
let s6 = parseInt(sessionSet[5])-1;
let s7 = parseInt(sessionSet[6])-1;
let s8 = parseInt(sessionSet[7])-1;
let s9  = parseInt(sessionSet[8])-1;
let s10 = parseInt(sessionSet[9])-1;
const getDelayTime = (sNumber) => {
  return 176750 + 31000*sNumber
};
let d0 = 17850;
let d1 = getDelayTime(s1)+d0;
let d2 = getDelayTime(s2)+d1;
let d3 = getDelayTime(s3)+d2;
let d4 = getDelayTime(s4)+d3;
let d5 = getDelayTime(s5)+d4;
let d6 = getDelayTime(s6)+d5;
let d7 = getDelayTime(s7)+d6;
let d8 = getDelayTime(s8)+d7;
let d9 = getDelayTime(s9)+d8;
let d10= getDelayTime(s10)+d9;
let delaySet = [d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10];
let finalDelay = delaySet[0, parseInt(sessionNumber)];
let openningFile = new Audio('./beginning.mp3');
let audioFileLevel1 = new Audio('./breathing_level_1.mp3');
let audioFileLevel2 = new Audio('./breathing_level_2.mp3');
let audioFileLevel3 = new Audio('./breathing_level_3.mp3');
let audioFileLevel4 = new Audio('./breathing_level_4.mp3');
let audioFileLevel5 = new Audio('./breathing_level_5.mp3');
let audioFileLevel6 = new Audio('./breathing_level_6.mp3');
let audioFileLevel7 = new Audio('./breathing_level_7.mp3');
let audioFileLevel8 = new Audio('./breathing_level_8.mp3');
let audioFileLevel9 = new Audio('./breathing_level_9.mp3');
let audioFileLevel10 = new Audio('./breathing_level_10.mp3');
let endingFile = new Audio('./ending.mp3');
let backgoundMusic = new Audio('./rainBackgroundSound.mp3');
let extraFile = new Audio('00004DG_Melos_Quartet_Schumann_Brahms_Quartets_1988_Chamber_3discs_2_4236702 copy.flac');
let audioFiles = [audioFileLevel1, audioFileLevel2, audioFileLevel3, 
                  audioFileLevel4,audioFileLevel5, audioFileLevel6,
                  audioFileLevel7, audioFileLevel8,audioFileLevel9, 
                  audioFileLevel10,extraFile];
function playAudio() {
  openningFile.play();
  backgoundMusic.play();
  setTimeout(() => {audioFiles[s1].play()}, d0);
  setTimeout(() => {audioFiles[s2].play()}, d1);
  setTimeout(() => {audioFiles[s3].play()}, d2);
  setTimeout(() => {audioFiles[s4].play()}, d3);
  setTimeout(() => {audioFiles[s5].play()}, d4);
  setTimeout(() => {audioFiles[s6].play()}, d5);
  setTimeout(() => {audioFiles[s7].play()}, d6);
  setTimeout(() => {audioFiles[s8].play()}, d7);
  setTimeout(() => {audioFiles[s9].play()}, d8);
  setTimeout(() => {audioFiles[s10].play()}, d9);
  setTimeout(() => {endingFile.play()}, finalDelay-1800);
};
document.write('<h3>' + `You're doing ${sessionNumber} session(s)` + '</h3>');
document.write('<h3>' + `Level(s): ${sessionSet}` + '</h3>');
setTimeout(() => {document.write('<h3>' + "Congratulations, you just finished you customized Wim Hof breathing session! Have a good day, night, and life!" + '</h3>');}, finalDelay+46000);
