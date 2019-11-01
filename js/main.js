$(document).ready(function() {
  // Preload
  if (
    $(window).load(function() {
      $("#preloader").fadeOut("slow", function() {
        $(this).remove();
      });
    })
  ); 
  
  // BODYMOVIN Animation
  
  // 1. Animation Cover
  var animation = bodymovin.loadAnimation({
      container: document.getElementById('animationCover'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'images/bodymovin/cover/data.json',
      name: 'myAnimation',
  });

  // 2. Eksplorasi
  var animation2 = bodymovin.loadAnimation({
      container: document.getElementById('animationExplore'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'images/bodymovin/eksplorasi/data.json',
      name: 'myAnimation',
  });

  // 3. Penambangan
  var animation3 = bodymovin.loadAnimation({
      container: document.getElementById('animationTambang'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'images/bodymovin/penambangan/data.json',
      name: 'myAnimation',
  });
 
  // 4. Pengolahan
  var animation4 = bodymovin.loadAnimation({
      container: document.getElementById('animationOlah'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'images/bodymovin/pengolahan/data.json',
      name: 'myAnimation',
  });
  
  // 5. Product
  var animation5 = bodymovin.loadAnimation({
      container: document.getElementById('animationProduct'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'images/bodymovin/product/data.json',
      name: 'myAnimation',
  });
  
  // 6. Product
  var animation6 = bodymovin.loadAnimation({
      container: document.getElementById('animationPreload'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'images/bodymovin/preloader/data.json',
      name: 'myAnimation',
  });
  
  // 7. Energy Town
  var animation7 = bodymovin.loadAnimation({
      container: document.getElementById('animationEnergy'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'images/bodymovin/town/data.json',
      name: 'myAnimation',
  });
  
  // 8. Gold
  var animation8 = bodymovin.loadAnimation({
      container: document.getElementById('animationGold'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'images/bodymovin/gold/data.json',
      name: 'myAnimation',
  });
  
  // 9. Train
  var animation9 = bodymovin.loadAnimation({
      container: document.getElementById('animationTrain'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'images/bodymovin/train/data.json',
      name: 'myAnimation',
  });
  
  // 10. construction
  var animation10 = bodymovin.loadAnimation({
      container: document.getElementById('animationConstruction'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'images/bodymovin/construction/data.json',
      name: 'myAnimation',
  });

  //Back To Top
  $(window).scroll(function(){		
    if ($(this).scrollTop() >= 150){
      $('.backtop').fadeIn(500);
    } else{
      $('.backtop').fadeOut(500);	
    }
  });
  $('.backtop').click(function () {
      $('body,html').animate({
        scrollTop : 0                       
    }, 750);
  });

  // Scroll Reveal
  window.sr = ScrollReveal();
  sr.reveal('.lazyloaded',{ 
    duration: 1000,
    delay: 500 
  });
  sr.reveal('.lazyloaded1',{ 
    duration: 1000,
    delay: 500 
  });
  sr.reveal('.lazyloaded2',{ 
    duration: 1000,
    delay: 500 
  });

  // Click Function
  var url = "tembaga";    
  $(".object__item--switch").click(function(){
    $(".object__item--switch").fadeOut();
    $(".object__item--switchoff").fadeIn();
    $(".transition").fadeIn();
    setTimeout(function(){        
      $(location).attr('href',url);
    }, 5000);
  })
});

// Mobile Version
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  $(".cover__background").remove();
} else {
  $(".social__item--wa").hide();
}
