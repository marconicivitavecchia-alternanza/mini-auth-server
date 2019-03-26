window.onload = function () {
	var url, i, jqxhr;

	url = document.URL + 'login/?auth=bHVpZ2k6bHVpZ2kk=';
	console.log(url);
	jqxhr = $.getJSON(url, function(data) {
		console.log('API response received');
		$('#input').append('<p>'+data['status']+'</p>');
	});
};
