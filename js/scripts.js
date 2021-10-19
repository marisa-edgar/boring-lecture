$(document).ready(function() {

  $(".dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
  });
  
  $(".light").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
  });
  
  $("p").click(function() {
    $(".highlight").show();
  });
  
});