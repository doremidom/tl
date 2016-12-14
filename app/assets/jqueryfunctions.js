
$(document).on('click','.add, .close',function(){
    $('div#add-contact').toggle();
    $('div#screen').toggle();
});

$(document).on('submit', '#contact-form', function(){
	addContact();
});

function addContact(){
	var formInfo = $('#contact-form').serializeArray();
	var formData = {};
	
	$.map(formInfo, function(n, i){
        formData[n['name']] = n['value'];
    });

    formData = JSON.stringify(formData);

	$.ajax({
    url: 'http://localhost:3000/contacts',
    method: 'POST',
    data: formData,
    contentType: "application/json",
    dataType: 'json'
	}).done(function (response) {});
}



	