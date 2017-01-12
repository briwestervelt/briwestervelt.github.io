$(document).ready(function(){
  $(".panel").on('show.bs.collapse', function(){
    $(this).find("span.arrow").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
  });

  $(".panel").on('hide.bs.collapse', function(){
    $(this).find("span.arrow").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
  });
});
