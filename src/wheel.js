import React, { useEffect } from 'react'
import './wheel.css'
const PI = Math.PI;
const TAD = 2 * PI; 
const height=600, width=600

const Wheel = ({segments=[], winner}) => {
  const arc = TAD / segments.length;  
  let dia = 0;
  let rad = 0;
  let ctx = null;
  let ang = 0; // Angle in radians
  let angVel = 0 // Angular velocity

  useEffect(() =>{
    initCanvas();
    segments.forEach(wheelDraw)  
    rotate(); // Initial rotation
    engine(); // Start engine
  })
  
  const rand = (m, M) => Math.random() * (M - m) + m;
  const initCanvas = () => {
    var canvas = document.getElementById('wheel');
    ctx = canvas.getContext('2d');
    dia = ctx.canvas.width;
    rad = dia / 2
  };

  const wheelDraw = function wheelDraw(v, i) {
    let ang = arc * i;
    ctx.save();
    
    // COLOR
    ctx.beginPath();
    ctx.fillStyle = v.color;
    ctx.moveTo(rad, rad);
    ctx.arc(rad, rad, rad - 10, ang, ang + arc);
    ctx.lineTo(rad, rad);
    ctx.fill();

    // TEXT
    ctx.translate(rad, rad);
    ctx.rotate(ang + arc / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.font = "bold 15px sans-serif";
    ctx.fillText(v.label, rad - 40, 10);
    ctx.restore();
  }
  
  const rotate = () => {
    let SegmentIndex = Math.floor(segments.length - ang / TAD * segments.length) % segments.length
    ctx.canvas.style.transform = `rotate(${ang}rad)`;
    if(angVel == 0 ) {
      winner(segments[SegmentIndex])
    }
  }

const frame = () => {
  if (!angVel) return;

  angVel *= rand(0.985, 0.998); // Decrement velocity

  if (angVel < 0.002)
    angVel = 0; // Bring to stop

    ang += angVel; // Update angle
    ang %= TAD; // Normalize angle

  rotate();
}

const engine = () => {
  frame();
  requestAnimationFrame(engine)
}

const handleSpin = () => {
  angVel = rand(0.25, 0.35);
}

  return (
     <div id="wheelOfFortune">
      <canvas id="wheel" width={width} height={height}></canvas>
      <div id="spin" onClick={handleSpin}><b>SPIN</b></div>
     </div>
  )
}

export default Wheel