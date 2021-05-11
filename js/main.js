$(document).ready(function () {
  var win = $(window).height();
  $(".click").click(function () {
    $("body,html").animate(
      {
        scrollTop: win,
      },
      800
    );
    return false;
  });
});
$(document).ready(function () {
  $("#nav-icon2").click(function () {
    $(this).toggleClass("open");
  });
});
