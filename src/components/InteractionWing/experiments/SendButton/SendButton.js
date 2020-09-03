import React, { useState, useRef } from 'react';
import gsap from 'gsap';

const SendButton = () => {
  const [sending, setSending] = useState(false);
  let mobile = false;
  if (typeof window !== 'undefined') {
    mobile = window.matchMedia('(max-width: 600px)');
  }
  const isBrowser = typeof window !== `undefined`;
  let isSent = true;
  const btn = useRef();
  const plane = useRef();
  const check = useRef();
  const wind = useRef();
  const wind2 = useRef();
  const wind3 = useRef();
  const send = useRef();
  const sent = useRef();
  const resetButton = useRef();

  const random = (min, max) => {
    return Math.random() * (max - min) + min
  };

  const sendMessage = () => {
    console.log('sending message...')
    setSending(true);
    // message will be sent 2.5 seconds after clicking
    setTimeout(() => { 
      isSent = true;
      console.log(isSent);
    }, 3000)
  }

  const checkIfSent = () => {
    if (isSent === false) {
      return false;
    } else if (isSent === true) {
      return true;
    }
  }

  const part1 = () => {
    let tl = gsap.timeline();
    tl.to(send.current, {
      autoAlpha: 0,
      duration: 0.1
    })
    tl.to(plane.current, {
      x: 0,
      duration: 0.1
    })
    tl.to(btn.current, {
      backgroundColor: '#69C0DB',
      borderColor: '#69C0DB',
      width: 140,
      padding: 0,
      duration: 0.2,
      delay: 0.1,
      boxShadow: 'none'
    })
    tl.to([wind.current, wind2.current, wind3.current], { autoAlpha: 1 });

    return tl;
  }

  const part2 = (object) => {
    if (isSent === false) {
      let randomX = random(-70,70);
      let randomY = random(-70,70);
      let randomRotate = random(-70,70);
    
      gsap.to(object, {
        x: randomX,
        y: randomY,
        rotate: randomRotate,
        duration: 0.1,
        onComplete: part2,
        onCompleteParams: [object]
      })
    } 
  }

  const windEffect = () => {
    let tl = gsap.timeline();
    if (isSent === false) {
      tl.set(wind.current, {
        x: 0
      })
      tl.to(wind.current, {
        x: -600,
        duration: 2,
        ease: 'none',
        onComplete: windEffect
      })
    } else {
      return tl;
    }
  }

  const windEffect2 = () => {
    let tl = gsap.timeline();
    if (isSent === false) {
      tl.set(wind2.current, {
        x: 0
      })
      tl.to(wind2.current, {
        x: -800,
        duration: 3,
        ease: 'none',
        onComplete: windEffect2
      })
    } else {
      return tl;
    }
  }

  const windEffect3 = () => {
    let tl = gsap.timeline();
    if (isSent === false) {
      tl.set(wind3.current, {
        x: 0
      })
      tl.to(wind3.current, {
        x: -1400,
        duration: 6,
        ease: 'none',
        onComplete: windEffect3
      })
    } else {
      return tl;
    }
  }

  const part3 = () => {
    let tl = gsap.timeline();
    tl.to(plane.current, {
      autoAlpha:0,
      x: -120,
      y: 0,
      rotate: 200,
      duration: 0.3,
      ease: 'power4.in'
    })
    tl.to([wind.current, wind2.current, wind3.current], {
      autoAlpha: 0,
      duration: 0.1
    })
    tl.to(btn.current, {
      backgroundColor: '#74B8B4',
      borderColor: '#74B8B4',
      duration: 0.2
    })
    if (!mobile.matches) {
      tl.to(btn.current, {
        width: 360,
        duration: 0.2,
        ease: 'Circ.easeInOut'
      })
    }
    if (!mobile.matches) {
      tl.fromTo(sent.current, {
        y: -20,
        autoAlpha: 0
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.1,
        ease: 'Circ.easeOut'
      })
    }
    tl.fromTo(check.current, {
      y: 20
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.3,
      ease: 'Circ.easeOut'
    })
    return tl;
  }

  const reset = () => {
    console.log('reset')
    if (isSent === true) {
      gsap.to(resetButton.current, {
        autoAlpha: 0
      })
      gsap.to('.wind', { autoAlpha: 0 }) 
      gsap.to([sent.current, check.current], {
        autoAlpha: 0
      })
      gsap.to(plane.current, {
        autoAlpha: 1,
        rotate: 0,
        x: 0,
        y: 0
      })
      gsap.to([wind.current, wind2.current, wind3.current], {
        autoAlpha: 1,
        x: 0
      })
      gsap.to(btn.current, {
        backgroundColor: '#B87474',
        width: 140
      })
    }
  }

  const onMouseOver = () => {
    if (sending === false && !mobile.matches) {
      gsap.to(btn.current, {
        width: 360,
        duration: 0.2
      })
      gsap.to(plane.current, {
        x: -100,
        duration: 0.1,
        ease: 'circ.out'
      })
      gsap.to(send.current, {
        autoAlpha: 1,
        duration: 0.1,
        ease: 'power4.in'
      })
    }
  };

  const onMouseOut = () => {
    if (sending === false) {
      gsap.to(btn.current, {
        width: 140,
        padding: 0,
        duration: 0.2
      })
      gsap.to(plane.current, {
        x: 0,
        duration: 0.1,
        ease: 'power4.out'
      })
      gsap.to(send.current, {
        autoAlpha: 0,
        duration: 0.1
      })
    }
  };

  const onSend = () => {
    if (sending === false) {
      // setIsSent(false);
      isSent = false;
      sendMessage();
      let tl = gsap.timeline();
      tl.add(part1());
      tl.call(part2, [plane.current], '>');
      tl.add(windEffect, '<');
      tl.add(windEffect2, '<');
      tl.add(windEffect3, '<');
      let checkInterval = setInterval(() => {
        console.log(checkIfSent());
        if (isSent === true) {
          console.log(isSent)
          tl.add(part3());
          tl.to(resetButton.current, {
            autoAlpha: 1,
            delay: 0.5
          })
          clearInterval(checkInterval);
        }
      }, 1000);
    } 
  };

  const onReset = () => {
    console.log('reset')
    if (isSent === true) {
    console.log('reset')

      reset();
      setSending(false);
    }
  };

  return (
    <div class="send-button">
      <div ref={btn} class="btn" onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onSend}>
        <svg ref={plane} class="plane" width="56" height="56" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="plane-path" d="M22.7751 11.1209L1.54452 0.0656855C1.45823 0.0208743 1.35924 0.0103306 1.26534 0.0340542C1.04961 0.0894091 0.915089 0.316101 0.968388 0.542792L3.15617 9.8266C3.18916 9.96631 3.28815 10.0797 3.42012 10.1245L7.16879 11.4609L3.42266 12.7973C3.29068 12.8448 3.1917 12.9555 3.16125 13.0952L0.968388 22.3922C0.945546 22.4897 0.955698 22.5925 0.998845 22.6795C1.09783 22.8877 1.34148 22.9721 1.54452 22.8693L22.7751 11.8774C22.8538 11.8378 22.9173 11.7693 22.9579 11.6902C23.0569 11.4793 22.9756 11.2263 22.7751 11.1209ZM3.47088 19.7509L4.74751 14.3314L12.2398 11.6612C12.2981 11.6401 12.3464 11.5927 12.3667 11.5294C12.4022 11.4187 12.3464 11.3001 12.2398 11.2606L4.74751 8.59298L3.47596 3.19456L19.4148 11.4952L3.47088 19.7509V19.7509Z" fill="white" />
        </svg>
        <svg ref={check} class="checkmark" width="56" height="56" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.1719 0.494141H25.7827C25.4478 0.494141 25.1299 0.647949 24.9248 0.911133L10.8325 18.7632L4.0752 10.2012C3.97298 10.0714 3.84268 9.96644 3.6941 9.89422C3.54551 9.822 3.3825 9.78438 3.21729 9.78418H0.828129C0.599125 9.78418 0.47266 10.0474 0.612796 10.2251L9.97461 22.0854C10.4121 22.6392 11.2529 22.6392 11.6938 22.0854L28.3872 0.931641C28.5273 0.757324 28.4009 0.494141 28.1719 0.494141Z" fill="white" />
        </svg>
        <h1 ref={send} class="send-text">
          SEND
        </h1>
        <h1 ref={sent} class="send-text sent">
          SENT!
        </h1>
        <div ref={wind} class="wind">
          <div class="particle pos1"></div>
          <div class="particle pos1"></div>
          <div class="particle pos2"></div>
          <div class="particle pos2"></div>
          <div class="particle pos3"></div>
          <div class="particle pos3"></div>
          <div class="particle pos4"></div>
          <div class="particle pos4"></div>
          <div class="particle pos1"></div>
          <div class="particle pos1"></div>
          <div class="particle pos2"></div>
          <div class="particle pos2"></div>
          <div class="particle pos3"></div>
          <div class="particle pos3"></div>
          <div class="particle pos4"></div>
          <div class="particle pos4"></div>
        </div>
        <div ref={wind2} class="wind wind2">
          <div class="particle pos1"></div>
          <div class="particle pos1"></div>
          <div class="particle pos2"></div>
          <div class="particle pos2"></div>
          <div class="particle pos3"></div>
          <div class="particle pos3"></div>
          <div class="particle pos4"></div>
          <div class="particle pos4"></div>
          <div class="particle pos1"></div>
          <div class="particle pos1"></div>
          <div class="particle pos2"></div>
          <div class="particle pos2"></div>
          <div class="particle pos3"></div>
          <div class="particle pos3"></div>
          <div class="particle pos4"></div>
          <div class="particle pos4"></div>
        </div>
        <div ref={wind3} class="wind wind3">
          <div class="particle pos1"></div>
          <div class="particle pos1"></div>
          <div class="particle pos2"></div>
          <div class="particle pos2"></div>
          <div class="particle pos3"></div>
          <div class="particle pos3"></div>
          <div class="particle pos4"></div>
          <div class="particle pos4"></div>
          <div class="particle pos1"></div>
          <div class="particle pos1"></div>
          <div class="particle pos2"></div>
          <div class="particle pos2"></div>
          <div class="particle pos3"></div>
          <div class="particle pos3"></div>
          <div class="particle pos4"></div>
          <div class="particle pos4"></div>
        </div>
      </div>
      <h2 ref={resetButton} class="reset" onClick={onReset}>reset</h2>
    </div>
  )
}

export default SendButton;