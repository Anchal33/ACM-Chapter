$(document).ready(function () {
  /* For the sticky navigation */
  $(".section-about").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    }
  );

  //Mobile Responsive
  $(".mobile-nav-icon").click(function () {
    var nav = $(".js-main-nav");
    var icon = $(".mobile-nav-icon i");

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
    nav.slideToggle(200);
  });

  $(".past").click(function () {
    $(".upCarousel div:first").removeClass("show");
    $(".pastCarousel div:first").removeClass("hide");
    $(".pastCarousel div:first").addClass("show");
    $(".upCarousel div:first").addClass("hide");
    $(".past h3").addClass("borderdown");
    $(".up h3").removeClass("borderdown");
  });

  $(".up").click(function () {
    $(".pastCarousel div:first").removeClass("show");
    $(".pastCarousel div:first").addClass("hide");
    $(".upCarousel div:first").removeClass("hide");
    $(".upCarousel div:first").addClass("show");
    $(".up h3").addClass("borderdown");
    $(".past h3").removeClass("borderdown");
  });
});

//Events counter
const counters = document.querySelectorAll(".counter");

counters.forEach(function (counter) {
  var observer = new IntersectionObserver(
    function (entries) {
      // isIntersecting is true when element and viewport are overlapping
      // isIntersecting is false when element and viewport don't overlap
      if (entries[0].isIntersecting === true) {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const inc = 2;

          if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 20);
          } else {
            count.innerText = target;
          }
        };
        updateCount();
      }
    },
    { threshold: [0.1] }
  );

  observer.observe(counter)});    

  const toggelButton = document.querySelector('button');

toggelButton.addEventListener("click",()=>{
  const nav = document.querySelector('nav');
  if(toggelButton.getAttribute('aria-expanded') == "false"){
    const nav = document.querySelector('nav');
    if(!nav.classList.contains('sticky')){
      nav.style.backgroundColor = "rgba(0,0,0,1)";
    }
  }
  else if(!nav.classList.contains('sticky')){
    nav.style.backgroundColor = "transparent";

  }
  
});