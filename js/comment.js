
$(document).ready(function(){
    $(".comments_trigger").click(function(){
	$(".comments_panel").toggle("fast");
	$(this).toggleClass("active");
	return false;
    });
});
