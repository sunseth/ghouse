$(document).ready(function() {
  /* Navigation bar script */
  var optimalOffset = 122 + 25;
  var ID_to_page_position = {"address": 0, 
  "intro": $("#introduction-panel").position().top - 65, 
  "location": $("#location-container").position().top - optimalOffset, 
  "photos": $("#photos-container").position().top - optimalOffset, 
  "floors" : $("#floors-container").position().top - optimalOffset
  , "apply": $("#apply-container").position().top - optimalOffset
  };

  var nav = $(".nav");
  var navPosition = nav.position();
  var stickyNav;
  $(window).scroll(function() {
    stickyNav = nav.hasClass("sticky-nav");
    if($(window).scrollTop() > navPosition.top && !stickyNav){
      nav.addClass("sticky-nav");
    }
    
    if($(window).scrollTop() < navPosition.top && stickyNav){
      nav.removeClass("sticky-nav");
    }
  });

  $(".nav-item").click(function(){
    var pageID = $(this).attr('id');
    var newPosition = parseInt(ID_to_page_position[pageID]);
    $("html, body").animate({ scrollTop: newPosition }, "slow");
  });


  /* Photo carousel script */
  var carouselLength = 8640;
  var carouselPhoto = 960;
  var carouselCaption = 80;

  var marginLeft;
  var marginTop;

  $('#carousel-right').click(function(){
    marginLeft = parseInt($('#photos-carousel').css('margin-left').replace("px", ""));
    marginTop = parseInt($('#photos-caption-carousel').css('margin-top').replace("px", ""));

    if (marginLeft > -carouselLength){
      var updatedMarginLeft = marginLeft - carouselPhoto;
      var updatedMarginTop = marginTop - carouselCaption;
      $('#photos-carousel').css({'margin-left': updatedMarginLeft+'px'});
      $('#photos-caption-carousel').css({'margin-top': updatedMarginTop+'px'});
    }
  });
  $('#carousel-left').click(function(){
    marginLeft = parseInt($('#photos-carousel').css('margin-left').replace("px", ""));
    marginTop = parseInt($('#photos-caption-carousel').css('margin-top').replace("px", ""));

    if (marginLeft < 0){
      var updatedMarginLeft = marginLeft + carouselPhoto;
      var updatedMarginTop = marginTop + carouselCaption;
      $('#photos-carousel').css({'margin-left': updatedMarginLeft+'px'});
      $('#photos-caption-carousel').css({'margin-top': updatedMarginTop+'px'});
    }
  });

  /* Floor carousel script */
  var ID_to_floor_position = {"lower-floor": 0, "ground-floor": 480, "upper-floor": 960};

  $(".floor-bar").click(function(){
    var currentBar = $(this);

    $(".floor-bar").each(function(i, el){
      if ($(this).hasClass("floor-bar-active")){
        $(this).removeClass("floor-bar-active");
        $(this).children("p").slideUp(400);
      }
    });
    if(!currentBar.hasClass("floor-bar-active")){
      currentBar.addClass("floor-bar-active");
      currentBar.children("p").slideDown(400);
    }

    var floorID = $(this).attr('id');
    var newPosition = parseInt(-ID_to_floor_position[floorID]) + "px"
    $('#floors-carousel').css({'margin-left': newPosition});
  });
});

