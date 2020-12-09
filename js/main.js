function initObservers(){
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  };

  function observerCallback(entries, observer) {
    entries.forEach(entry => {
      console.log("here")
      if (entry.isIntersecting) {
        // fade in observed elements that are in view
        entry.target.classList.replace('fadeOut', 'fadeIn');
      } else {
        // fade out observed elements that are not in view
        entry.target.classList.replace('fadeIn', 'fadeOut');
      }
    });
  }

  const fadeElms = document.querySelectorAll('.fade');
  console.log(fadeElms)
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  fadeElms.forEach(el => observer.observe(el));
}
