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
