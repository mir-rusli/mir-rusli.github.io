
var active_popup = 0;

function center_popup(popup_number) {
  var popup = "#popup" + popup_number;
  $(popup).css({"top": -200, "left": -100});
}

function show_popup(popup_number) {
  center_popup(popup_number);
  var popup = "#popup" + popup_number;
  if (active_popup == 0) {
    $("#popup_background").css({"opacity": "0.7"});
    $("#popup_background").fadeIn("slow");
    $(popup).fadeIn("slow");
    active_popup = popup_number;
  }
}

function hide_popup() {
  if (active_popup > 0) {
    var popup = "#popup" + active_popup;
    $("#popup_background").fadeOut("slow");
    $(popup).fadeOut("slow");
    active_popup = 0;
  }
}

$(document).ready(function() {
  $("#button1").click(function() { show_popup(1); });
  $("#button2").click(function() { show_popup(2); });
  $("#button3").click(function() { show_popup(3); });
  $("#button4").click(function() { show_popup(4); });
  $("#button5").click(function() { show_popup(5); });
  $("#button6").click(function() { show_popup(6); });
  $("#button7").click(function() { show_popup(7); });
  $("#button8").click(function() { show_popup(8); });
  $("#popup_background").click(function() { hide_popup(); });
});
