/* ========================================================== */
/* ✅ FILE: main-gsap.js – Scroll Animations                  */
/* ========================================================== */

/* ✅ REGISTER: Required GSAP Plugin */
gsap.registerPlugin(ScrollTrigger);

/* ✅ CHECK: Respect User Accessibility Preferences */
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  
  /* ✅ SELECT & ANIMATE: Elements with .animate-fade-up */
  gsap.utils.toArray('.animate-fade-up').forEach((el) => {
    gsap.to(el, {
      opacity: 1,       // Fully visible
      y: 0,             // Reset vertical position
      duration: 0.8,    // Animation speed
      ease: 'power2.out', // Easing function
      
      /* ✅ SCROLLTRIGGER CONFIG */
      scrollTrigger: {
        trigger: el,                 // Start trigger on the element
        start: 'top 85%',            // When element enters 85% viewport height
        toggleActions: 'play none none reverse' // Play when in view, reverse when out
      }
    });
  });

}
