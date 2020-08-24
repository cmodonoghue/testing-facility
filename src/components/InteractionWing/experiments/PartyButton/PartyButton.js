import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const PartyButton = () => {
  let refCount = 25;
  const colors = ["#81CAA7", "#D46B84", "#88ABEE", "#C0ADF6"];
  const shapes = ["oval", "triangle", "parallelogram"];
  let particleRef = useRef([]);

  const [, updateState] = useState();

  useEffect(() => {
    particleRef.current = particleRef.current.slice(0, refCount);
  }, [refCount]);
  let btn = useRef();

  const addToRefs = el => {
    if (el && !particleRef.current.includes(el)) {
      particleRef.current.push(el);
    }
   };

  const createParticle = () => {
    let color = colors[Math.floor(Math.random() * colors.length)];
    let shape = shapes[Math.floor(Math.random() * shapes.length)];

    if (shape === "triangle") {
      shape = "polygon(50% 0%, 10% 92%, 97% 92%)";
    } else if (shape === "parallelogram") {
      shape = "polygon(25% 0%, 73% 0, 43% 98%, 0% 100%)";
    } else if (shape === "oval") {
      shape = "ellipse(25% 40% at 50% 50%)";
    } else if (shape === "star") {
      shape =
        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    }

    let particle = {};

    particle.color = color;
    particle.shape = shape;
    
    return particle;

  }

  let particles = [
    {
      color: '#81CAA7',
      shape: 'ellipse(25% 40% at 50% 50%)'
    },
    {
      color: '#D46B84',
      shape: 'polygon(50% 0%, 10% 92%, 97% 92%)'
    }
  ];

  for (let i = 0; i < 25; i++) {
    let temp = createParticle();
    particles.push(temp);
  }
  
  const animateParticles = (i) => {

    let directionX = Math.random() * (200 - -200) - 200;
    let directionY = Math.random() * (120 - -120) - 120;
    let rotateDirection = Math.random() * (720 - -720) - 720;
    console.log(particleRef.current)
    gsap.fromTo(particleRef.current[i], 
      {
        x: 0,
        y: 0,
        autoAlpha: 1,
        rotation: 0
      },
      {
        x: directionX,
        y: directionY,
        autoAlpha: 0.8,
        ease: "circ.out",
        duration: 0.7,
        rotation: rotateDirection
      }
    );
    gsap.to(particleRef.current[i], {
      autoAlpha: 0,
      duration: 0.2,
      delay: 0.8
    })
  };

  const onMouseOver = () => {
    console.log(btn)
    gsap.to(btn.current, { scale: 1.07, duration: 0.2 });
  };

  const onMouseLeave = () => {
    gsap.to(btn.current, { scale: 1, duration: 0.2 });
  };

  const onMouseDown = () => {
    gsap.to(btn.current, { scale: 1, duration: 0.05 });
  };

  const onMouseUp = () => {
    gsap.to(btn.current, { scale: 1.07, duration: 0.2, ease: "circ.out" });
    for (let i = 0; i < particleRef.current.length; i++) {
      animateParticles(i);
    }
  };

  return (
    <div className="party-button">
      <button 
        ref={btn}
        className="btn"
        onMouseOver={ onMouseOver }
        onMouseLeave={ onMouseLeave }
        onMouseDown={ onMouseDown }
        onMouseUp={ onMouseUp }
      >
        party
      </button>
      <div className="particles">
        { particles.map((particle, i) => (
          <div key={i} ref={addToRefs} className="particle" style={{background: particle.color, clipPath: particle.shape}}></div>
          ))
        }
      </div>
    </div>
  )
}

export default PartyButton;