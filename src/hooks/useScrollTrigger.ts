import { useEffect } from 'react';

export const useScrollTrigger = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-trigger class
    const scrollTriggerElements = document.querySelectorAll('.scroll-trigger, .reveal-up');
    scrollTriggerElements.forEach((el) => observer.observe(el));

    return () => {
      scrollTriggerElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useScrollTrigger;