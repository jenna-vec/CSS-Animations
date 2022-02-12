window.addEventListener("load", function(){
    $("#hello").css("animation", "popUp 2s 1")
    $("#hello").css("opacity", "1")
});

$(document).ready(function(){
  $("#pink-button").hover(function(){
    $(this).toggleClass("big");
  })
});

