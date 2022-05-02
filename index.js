// Applicable only for large window
if (window.matchMedia("(min-width: 577px)").matches) {
  window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("scroll-nav", window.scrollY > 50);
  });
} 

function smallMenu () {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav-sp').classList.toggle('menu-in');
}

document.getElementById('hamburger').addEventListener('click', function(){
  smallMenu();
});

$(function(){
$('.tab-btn').click(function(){
  let index = $('.tab-btn').index(this);
  $('.tab-btn').removeClass('active');
  $(this).addClass('active');
  $('.content').hide().eq(index).show();
})
});

