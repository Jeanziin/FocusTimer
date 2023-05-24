import  Controls  from "./components/controls.js";
import Timer from "./components/timer.js";

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;



const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: Controls.reset,
    
})



const controls = Controls({buttonPause, buttonPlay, buttonSet, buttonStop})


buttonPlay.addEventListener('click', ButtonPlay);
buttonPause.addEventListener('click', ButtonPause);
buttonStop.addEventListener('click', ButtonStop);
buttonSoundOn.addEventListener('click', ButtonSoundOn);
buttonSoundOff.addEventListener('click', ButtonSoundOff);
buttonSet.addEventListener('click', ButtonSet);






function ButtonPlay()
{
    controls.play()
    timer.countDown();
}

function ButtonPause()
{

    controls.pause();
    timer.hold();
    clearTimeout(timerTimeOut);
 
}

function ButtonStop()
{
    controls.reset();
    timer.reset();
 
}

function ButtonSoundOff()
{
    buttonSoundOn.classList.remove('hide');
    buttonSoundOff.classList.add('hide');
}

function ButtonSoundOn()
{
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
}

function ButtonSet()
{
   let newMinutes = controls.getMinutes()

   if(!newMinutes) {
    timer.reset();
    return
   }
   timer.updateDisplay(newMinutes, 0);
   timer.updateMinutes(newMinutes);
}
