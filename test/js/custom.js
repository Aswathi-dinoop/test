function openNav() {
  document.getElementById("mySidenav").style.left = "0";
}
function closeNav() {
  document.getElementById("mySidenav").style.left = "-300px";
}



  $(document).ready(function() {
    $("#bannerowl").owlCarousel({
      margin: 0,
      loop: true,
      nav:true,
      navText:["<div class='nav-btn prev-slide'>PREV</div>","<div class='nav-btn next-slide'>NEXT</div>"],
      autoplay:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
    $("#aboutowl").owlCarousel({
      margin: 10,
      loop: true,
      autoplay:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    })


    $("#storyowl").owlCarousel({
      margin: 10,
      loop: true,
      nav:true,
      navText:["<div class='nav-btn prev-slide'>PREV</div>","<div class='nav-btn next-slide'>NEXT</div>"],
      autoplay:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
    $("#productowl").owlCarousel({
      margin: 40,
      loop: true,
      nav:true,
      navText:["<div class='nav-btn prev-slide'>PREV</div>","<div class='nav-btn next-slide'>NEXT</div>"],
      autoplay:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items:2,
          slidesToShow:2,
          slidesToScroll: 1
        }
      }
    })
    $("#brandowl").owlCarousel({
      margin: 10,
      loop: true,
      autoplay:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items:3,
         
        }
      }
    })
  })

  