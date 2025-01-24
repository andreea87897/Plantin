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

// Get all the buttons inside the quiz container
const buttons = document.querySelectorAll(".buttons button");

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Check if the button is the correct answer
    const isCorrect = button.getAttribute("data-correct") === "true";

    if (isCorrect) {
      button.classList.add("correct"); // Turn the button green
    } else {
      button.classList.add("wrong"); // Turn the button red
    }

    // Disable all buttons after an answer is selected
    buttons.forEach(btn => btn.disabled = true);
  });
});

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

const navigation = () => {
  document.querySelector('.js').innerHTML = "Enabled";

  const $nav = document.querySelector('.nav');
  const $navButton = document.querySelector('.nav__button');
  const $navList = document.querySelector('.nav__list');
  const $iconLink = document.querySelector('#iconlink');
  const listItems = $navList.querySelectorAll("li a");

  $navButton.classList.remove('hidden');
  $navList.classList.add("hidden");

  const openNavigation = () => {
    $navButton.setAttribute("aria-expanded", "true");
    $iconLink.setAttribute("xlink:href", "#close");
    $navList.classList.remove("hidden");
    $nav.classList.add('nav--fixed');
  }

  const closeNavigation = () => {
    $navButton.setAttribute("aria-expanded", "false");
    $iconLink.setAttribute("xlink:href", "#navicon");
    $navList.classList.add("hidden");
    $nav.classList.remove('nav--fixed');
  }

  const toggleNavigation = () => {
    const open = $navButton.getAttribute("aria-expanded");
    open === "false" ? openNavigation() : closeNavigation();
  }


  const handleBlur = () => {
    //if (!event.relatedTarget || !$navList.contains(event.relatedTarget)) {
    closeNavigation();
    //}
  }

  $navButton.addEventListener("click", toggleNavigation);

  // add event to the last item in the nav list to trigger the disclosure to close if the user tabs out of the disclosure
  listItems[listItems.length - 1].addEventListener("blur", handleBlur);

  // Close the disclosure if a user presses the escape key
  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      $navButton.focus();
      closeNavigation();
    }
  });
}

const wordsPopUp = () => {
  // Wait until the DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animation
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: ".vision_section", // The section to trigger animation
        start: "top center", // Animation starts when section top hits center of viewport
      },
    })
      .to(".vision_one", { opacity: 1, y: 0, duration: 0.5 })
      .to(".vision_two", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3") // Overlap animations
      .to(".vision_three", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .to(".vision_four", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
  });
}

const init = () => {
  travelScrollAnimation();
  backgroundColorChange();
  navigation();
  wordsPopUp();
}
init();
setupCounter(document.querySelector('#counter'))
