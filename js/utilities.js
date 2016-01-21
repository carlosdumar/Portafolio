$(window).ready(function() {
	if (screen.width >= 1024) {
		$("#listablogs").addClass("row");		
		$("header").removeClass("column");
		$("#sectionportfolio").removeClass("column").addClass("row");
		$("footer").removeClass("column").addClass("row");
	};
})
