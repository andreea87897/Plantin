import './style.css'

gsap.registerPlugin(ScrollTrigger);



const textScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from([".who", ".is", ".christophe", ".who_is_text", ".who_is_img"], {
    scrollTrigger: {
      trigger: "div",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from([".one_night_section h1", ".one_night_section h2", ".one_night_section_text p"], {
    scrollTrigger: {
      trigger: ".one_night_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from([".new_beggining_section h1", ".new_beggining_section h2", ".new_beggining_section p"], {
    scrollTrigger: {
      trigger: ".new_beggining_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from([".learn_section h1", ".learn_section h2", ".learn_section p"], {
    scrollTrigger: {
      trigger: ".learn_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from([".building_section h1", ".building_section h2"], {
    scrollTrigger: {
      trigger: ".building_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
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

