import React from 'react';
import './App.css';
import copter from './copter.gif'
import useWebAnimations from "@wellyshen/use-web-animations";


function App() {
  

  const { ref, getAnimation } = useWebAnimations({
    keyframes: {
      transform: "translateX(1450px) translateY(-80px)", // Move by 500px

       // Go through three colors
    },
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 4200, // Run for 1000ms
      iterations: Infinity, // Repeat once
       // Run the animation forwards and then backwards
      easing: "ease-in", // Use a fancy timing function
  }});

  const play = () => {
    getAnimation().play();
  };

  const pause = () => {
    getAnimation().pause();
  };

  const speedDown = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 0.25);
  };

  const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate / 0.25);
  };



  return (
    <div className="App">
      <img  ref={ref} className="copter"  src={copter} alt="copter"/>
      <div className="btns">
      <button className="btn" onClick={play}> Play</button>
      <button className="btn" onClick={pause}>Pause</button>
      <button className="btn" onClick={speedUp}>Speed Up</button>
      <button className="btn" onClick={speedDown}>Slow Down</button>
      </div>


      
  
    </div>
  );
}

export default App;
