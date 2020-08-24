import React, { useState, useRef } from 'react';
import gsap from 'gsap';

const DarkModeToggle = () => {
  const [active, setActive] = useState('light');

  // let page = document.querySelector(".container");
  // let knob = document.querySelector(".toggle");
  // let circle = document.querySelector(".circle");

  let page = useRef();
  let knob = useRef();
  let circle = useRef();

  const toggle = () => {
    if (active === "light") {
      toDark();
      setActive("dark");
    } else if (active === "dark") {
      toLight();
      setActive("light");
    }
  };

  const toDark = () => {
    console.log(active);
    // page.classList.add("dark");
    // circle.style.visibility = "hidden";

    let circleTimeline = gsap.timeline();
    circleTimeline.set(".circle", { x: -150, autoAlpha: 0 });
    circleTimeline.to(".circle", {
      x: 0,
      ease: "circ.out",
      duration: 0.6,
      autoAlpha: 1
    });

    gsap.set(".yellowstar", { x: -15, y: -5, rotate: 100 });
    gsap.to(".yellowstar", { x: 0, y: 0, rotate: 0, duration: 0.4 });

    gsap.set(".redstar", { x: -10, y: -10, rotate: -60 });
    gsap.to(".redstar", { x: 0, y: 0, rotate: 0, duration: 0.6 });

    gsap.set(".bluestar", { x: 15, y: -10, rotate: -180 });
    gsap.to(".bluestar", { x: 0, y: 0, rotate: 0, duration: 0.8 });
  };

  const toLight = () => {
    // page.classList.remove("dark");
    // circle.style.visibility = "hidden";

    let tl = gsap.timeline();
    tl.set(".circle", { x: 150, autoAlpha: 0 });
    tl.to(".circle", { x: 0, ease: "circ.out", duration: 0.6, autoAlpha: 1 });

    gsap.set(".lake", { fill: "#567684" });
    gsap.to(".lake", { fill: "#7F8CCF", duration: 0.8 });

    gsap.set(".tree1", { y: 5, autoAlpha: 0 });
    gsap.to(".tree1", { y: 0, autoAlpha: 1, duration: 0.8, ease: "bounce.out" });

    gsap.set(".tree2", { y: 5, autoAlpha: 0 });
    gsap.to(".tree2", { y: 0, autoAlpha: 1, duration: 0.6, ease: "bounce.out" });

    gsap.set(".tree3", { y: 5, autoAlpha: 0 });
    gsap.to(".tree3", { y: 0, autoAlpha: 1, duration: 1, ease: "bounce.out" });
  };

  // knob.addEventListener("click", () => {
  //   toggle();
  // });

  return (
    <div className={active === "light" ? "dark-mode-toggle" : "dark-mode-toggle dark"} ref={page}>
      <div className="toggle" ref={knob} onClick={toggle}>
        <div className="night">
          <svg className="stars" width="100" height="100" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="bluestar" d="M15.5489 2.92705C15.8483 2.00574 17.1517 2.00574 17.4511 2.92705L17.5103 3.10942C17.6442 3.52145 18.0281 3.80041 18.4614 3.80041H18.6531C19.6219 3.80041 20.0246 5.04002 19.2409 5.60942L19.0858 5.72214C18.7353 5.97678 18.5886 6.42815 18.7225 6.84017L18.7818 7.02254C19.0811 7.94385 18.0266 8.70998 17.2429 8.14058L17.0878 8.02786C16.7373 7.77322 16.2627 7.77322 15.9122 8.02786L15.7571 8.14058C14.9734 8.70998 13.9189 7.94385 14.2182 7.02254L14.2775 6.84017C14.4114 6.42815 14.2647 5.97678 13.9142 5.72214L13.7591 5.60942C12.9754 5.04002 13.3781 3.80041 14.3469 3.80041H14.5386C14.9719 3.80041 15.3558 3.52145 15.4897 3.10942L15.5489 2.92705Z" fill="#D1EEE7" />
            <path className="redstar" d="M5.54894 9.92705C5.8483 9.00574 7.1517 9.00574 7.45106 9.92705L7.73483 10.8004C7.8687 11.2124 8.25266 11.4914 8.68588 11.4914H9.60419C10.5729 11.4914 10.9757 12.731 10.192 13.3004L9.44905 13.8402C9.09856 14.0948 8.9519 14.5462 9.08578 14.9582L9.36955 15.8316C9.6689 16.7529 8.61442 17.519 7.83071 16.9496L7.08779 16.4098C6.7373 16.1552 6.2627 16.1552 5.91221 16.4098L5.16929 16.9496C4.38558 17.519 3.3311 16.7529 3.63045 15.8316L3.91422 14.9582C4.0481 14.5462 3.90144 14.0948 3.55095 13.8402L2.80803 13.3004C2.02432 12.731 2.42709 11.4914 3.39582 11.4914H4.31412C4.74734 11.4914 5.1313 11.2124 5.26517 10.8004L5.54894 9.92705Z" fill="#EEC0C0" />
            <path className="yellowstar" d="M18.5489 15.9271C18.8483 15.0057 20.1517 15.0057 20.4511 15.9271L20.9593 17.4914C21.0932 17.9034 21.4772 18.1824 21.9104 18.1824H23.5552C24.524 18.1824 24.9267 19.422 24.143 19.9914L22.8123 20.9582C22.4618 21.2128 22.3152 21.6642 22.449 22.0762L22.9573 23.6406C23.2567 24.5619 22.2022 25.328 21.4185 24.7586L20.0878 23.7918C19.7373 23.5372 19.2627 23.5372 18.9122 23.7918L17.5815 24.7586C16.7978 25.328 15.7433 24.5619 16.0427 23.6406L16.551 22.0762C16.6848 21.6642 16.5382 21.2128 16.1877 20.9582L14.857 19.9914C14.0733 19.422 14.476 18.1824 15.4448 18.1824H17.0896C17.5228 18.1824 17.9068 17.9034 18.0407 17.4914L18.5489 15.9271Z" fill="#EDEED1" />
          </svg>
        </div>
        <div className="circle" ref={circle}></div>
        <div className="day">
          <svg className="trees" width="100" height="100" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="lake" d="M15.5 16.5C21.5 14.5 11.5 13.1667 8 13.5C9.5 14 14.1 15 10.5 15C5.99999 15 0.999997 15.5 0.499997 17C0.0999972 18.2 14 18.5 21 18.5C31.5 18.5 24.5 15.5 15.5 16.5Z" fill="#7F8CCF" />
            <path className="tree2" d="M14.6769 5.63227C14.9534 4.66826 16.3186 4.66591 16.5984 5.62897L18.7457 13.0197C18.9314 13.6588 18.4526 14.2976 17.7871 14.2987L13.5179 14.3061C12.8524 14.3072 12.3715 13.6701 12.555 13.0304L14.6769 5.63227Z" fill="#A0CBBE" />
            <path className="tree1" d="M5.39462 5.25385C5.66294 4.30117 7.00405 4.27548 7.30864 5.21719L9.96138 13.4187C10.1678 14.0569 9.69972 14.7134 9.02906 14.7262L4.03956 14.8218C3.36889 14.8346 2.87601 14.1965 3.05786 13.5509L5.39462 5.25385Z" fill="#C5E7AA" />
            <path className="tree3" d="M21.5428 3.16507C21.8293 2.21771 23.1707 2.2177 23.4572 3.16507L26.8732 14.4605C27.0674 15.1026 26.5868 15.75 25.916 15.75H19.084C18.4132 15.75 17.9326 15.1026 18.1268 14.4605L21.5428 3.16507Z" fill="#CDE7B3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default DarkModeToggle;