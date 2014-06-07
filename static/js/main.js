function animateLogo() {
	var svg = d3.selectAll("svg");

	circles =svg.selectAll(".highlight > circle").attr("opacity", 0.5);

	circles.transition().duration(500)
	.attr({
		r : function (d) {
			return 10;
		},
		fill : function () {
			return '#bbece3';
		}
	})
	.transition().duration(500).attr({
		r : function () {
			return 7;
		},
		fill : function () {
			return '#00b7c3';
		}
	});

	setTimeout(animateLogo, 2000);
}