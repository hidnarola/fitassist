$("#navigation").mCustomScrollbar({
	axis:"Y",
	theme:"dark-thin",
	autoExpandScrollbar:true,
	advanced:{autoExpandHorizontalScroll:true}
});
$('.selectpicker').selectpicker();

$("#benchpress-inr").mCustomScrollbar({
	axis:"Y",
	theme:"3d",
	scrollbarPosition:"inside"
});
$("#notification-box").mCustomScrollbar({
	axis:"Y",
	theme:"3d",
	scrollbarPosition:"inside"
});
$("#messenger-box").mCustomScrollbar({
	axis:"Y",
	theme:"3d",
	scrollbarPosition:"inside"
});
$("#chat-body").mCustomScrollbar({
	axis:"Y",
	theme:"3d",
	scrollbarPosition:"inside"
});

$('.header-alert a').click(function(event){
	event.preventDefault();
    jQuery('.notifications-wrap').toggle({direction: "left" });
})
$('.header-email a').click(function(event){
	event.preventDefault();
    jQuery('.messenger-wrap').toggle({direction: "left" });
})
$('.header-nav a').click(function(event){
	event.preventDefault();
    jQuery('.chat-wrap').toggle({direction: "left" });
})

function closeSidebar(classname){
	jQuery('.'+classname).hide()
}