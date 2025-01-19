import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
const travelScrollAnimation = () => {

  gsap.to(".travel-image", {
    ease: "power1.inOut",
    motionPath: {
      path: "#path",
      align: "#path",
      autoRotate: true,
      markers: true,
      alignOrigin: [0.5, 0.5]
    },
    scrollTrigger: {
      trigger: ".travel-image",
      start: "top 55%",
      end: "bottom 60%",
      scrub: true,
      pin: '.who_is',
      markers: true,
    },

  });
}

const backgroundColorChange = () => {
  ScrollTrigger.create({

    trigger: '.attack_section',
    markers: true,
    start: "top 50%",
    end: "bottom 0%",

    onEnter: () => {
      gsap.to('body', { duration: 1.0, backgroundColor: '#ff0000' })
    },

    onLeaveBack: () => {
      gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff' })
    },


  })

}
const init = () => {
  travelScrollAnimation();
  backgroundColorChange();
}
init();
setupCounter(document.querySelector('#counter'))
