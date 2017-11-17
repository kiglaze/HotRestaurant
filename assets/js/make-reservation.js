$(document).ready(function() {
	$('#submit').on('click', function(e) {
		e.preventDefault();
		alert("submitted");
		var name = $("#name").val();
		var phoneNumber = $("#phone-number").val();
		var email = $("#email").val();
		var uniqueId = $("#unique-id").val();
		$.post('api/tables', {
			name: name, 
			phone: phoneNumber,
			email: email,
			id: uniqueId
		}).done(
			function(response) {
				console.log(response);
			}
		);
	});
});