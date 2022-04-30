if (window.matchMedia("(min-width: 577px)").matches) {
  window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("scroll-nav", window.scrollY > 50);
  });
} 