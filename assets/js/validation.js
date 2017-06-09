$(function() {

	$.validator.setDefaults({
		highlight: function(element) {
			$(element)
			.closest('.fixed-form__input').css({
				border: '1px solid red'
			}),
			$(element)
			.closest('.newletter__input').css({
				border: '1px solid red'
			})
		}
	})

	$( "#newletter__form" ).validate({
		rules: {
			newletter__input: {
				required: true,	
				email: true
			}
		},
		errorLabelContainer: '.error-container'
	});

	$( "#fixed-form" ).validate({
		rules: {
			fixed__form_name: {
				required: true,
				minlength: 4
			},
			fixed__form_email: {
				required: true,
				email: true
			},
			fixed__form_textarea: {
				required: true,
				minlength: 12
			}
		},
		errorPlacement: function(error, element) {
			if (element.attr("name") == "fixed__form_name" ) {
				error.appendTo( $('.fixed-form__error-container_name') )
			} else if (element.attr("name") == "fixed__form_email" ) {
				error.appendTo( $('.fixed-form__error-container_email') )
			} else if (element.attr("name") == "fixed__form_textarea" ) {
				error.appendTo( $('.fixed-form__error-container_text') )
			}

    	// error.appendTo( $('.fixed-form__name-error') );
    }
  });

});