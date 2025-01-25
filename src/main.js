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
const init = () => {
  travelScrollAnimation();
  backgroundColorChange();
}
init();

