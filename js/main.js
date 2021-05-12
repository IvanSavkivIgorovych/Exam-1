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
    $(".header__menu").toggleClass("active");
    if ($("#nav-icon2").hasClass("open")) {
      $("#why").css("margin-top", 310);
    } else {
      var nav = $("#myNav").height();
      var navPadding = $("#myNav").css("padding-top");
      var a = parseInt(parseInt(nav) + parseInt(navPadding) * 2);
      $("#why").css("margin-top", 80);
    }
  });
});
