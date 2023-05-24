
import Controls from "./components/controls.js";
import Timer from "./components/timer.js";
import Sound from "./components/sounds.js";
import Events from "./components/events.js";
import { 
  buttonPause, 
  buttonPlay,
  buttonSet, 
  buttonStop, 
  minutesDisplay, 
  secondsDisplay 
} from "./components/elements.js"


const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
}) 
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
}) 

const sound = Sound()

Events({controls, timer, sound})