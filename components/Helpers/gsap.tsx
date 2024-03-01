import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const textAnimation = (
  className: string,
  text: string,
  duration: number,
  ease: string,
) => {
  const elements = document.querySelectorAll(className);
  gsap.to(elements, {
    duration,
    text,
    ease,
    delay: 0.5,
  });
};

const animateLeftToRight = (className: string) => {
  const elements = document.querySelectorAll(className);

  gsap.set(elements, { opacity: 0, x: '-10%' });

  gsap.to(elements, {
    opacity: 1,
    x: '0%',
    duration: 0.8,
    ease: 'power4.out',
    stagger: 0.2,
    delay: 0.3,
  });
};

const animateToTop = (className: string) => {
  const elements = document.querySelectorAll(className);

  gsap.set(elements, { opacity: 0, y: '30%' });

  gsap.to(elements, {
    opacity: 1,
    y: '0%',
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: elements,
      start: 'top 500%', // Start animation when the top of the element hits 50% of the viewport
      end: '+=500', // End animation after scrolling 300 pixels
      scrub: true, // Smoothly animates the element as you scroll
      markers: false, // Show markers on the scrollbar to visualize the trigger
    },
  });
};

export { animateLeftToRight, animateToTop, textAnimation };
