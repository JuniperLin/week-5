"use strict";

$(document).ready(function () {
  var url = window.location.pathname;
  $('.nav-item').find('a').each(function () {
    $(this).toggleClass('nav-link--active', $(this).attr('href') == url.split('/week-5/')[1]);
  });
  $(".arrow-btn").click(function (e) {
    e.preventDefault();
    $(".control-panel").toggleClass("control-panel--show");
    $(".fog").toggleClass("fog--show");
  });
});
//# sourceMappingURL=all.js.map
