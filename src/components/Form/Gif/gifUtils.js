
import amazingGif from "../../assets/amazing.gif"
import balloonsGif from "../../assets/balloons.gif"
import cactusGif from "../../assets/cactus.gif"
import carltonGif from "../../assets/carlton.gif"
import catGif from "../../assets/cat.gif"
import charlieBrownGif from "../../assets/charlieBrown.gif"
import confettiGif from "../../assets/confetti.gif"
import ducksGif from "../../assets/ducks.gif"
import highFiveGif from "../../assets/highFive.gif"
import monstersGif from "../../assets/monsters.gif"
import oprahGif from "../../assets/oprah.gif"
import thumbsupGif from "../../assets/thumbsup.gif"
import watermelonGif from "../../assets/watermelon.gif"
import yayGif from "../../assets/yay.gif"


export function getRandomGif() {
    const gifs = [
      amazingGif,
      balloonsGif,
      cactusGif,
      carltonGif,
      catGif,
      charlieBrownGif,
      confettiGif,
      ducksGif,
      highFiveGif,
      monstersGif,
      oprahGif,
      thumbsupGif,
      watermelonGif,
      yayGif,
    ];
  
    const randomIndex = Math.floor(Math.random() * gifs.length);
    return gifs[randomIndex];
  }
  