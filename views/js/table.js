/* Code Reference: https://github.com/mikhail-cct/ssp-practical by Mikhail. Accessed on 28th of December 2021. */

// function to draw table 
function draw_table() {
	$("#results").empty();
	$.getJSONuncached = function (url) {
		return $.ajax(
			{
				url: url,
				type: 'GET',
				cache: false,
				success: function (html) {
					$("#results").append(html);
					select_row();
				}
			});
	};
	$.getJSONuncached("/get/html")
};

// function to select row when "clicked"
function select_row() {

	console.log("test");
	$("#TechTable tbody tr[id]").click(function () {
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
		var entree = $(this).attr("id") - 1;
		delete_row(section, entree);
	})
};
// function to delete rows when click on the delete button 

function delete_row(sec, ent) {
	$("#delete").click(function () {
		$.ajax(
			{
				url: "/post/delete",
				type: "POST",
				data:
				{
					section: sec,
					entree: ent
				},
				cache: false,
				success: setTimeout(draw_table, 1000)
			})
	})
};

$(document).ready(function () {
	draw_table();
});