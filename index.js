// Applicable only for large window
if (window.matchMedia("(min-width: 577px)").matches) {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("scroll-nav", window.scrollY > 50);
  });
}

$(function () {
  $(".tab-btn").click(function () {
    let index = $(".tab-btn").index(this);
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");
    $(".content").hide().eq(index).show();
  });

  $(".menu-trigger").on("click", function () {
    $(this).toggleClass("active");
    $("#nav-sp").toggleClass("active");
    return false;
  });
});
