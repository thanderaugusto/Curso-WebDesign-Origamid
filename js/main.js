﻿$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslides_portfolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false

});

Visibility.onVisible(function(){
	setTimeout(function () {
		$(".introducao h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao blockquote").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".introducao .btn").addClass("animated fadeInDown");
	}, 1200);
	setTimeout(function () {
		$(".animar").addClass("animated fadeInDown");
	}, 1600);

	setTimeout(function () {
		$(".introducao-interna h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao-interna p").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".animar-interno").addClass("animated fadeInDown");
	}, 1200);

});

// Formulario

$('.formphp').on('submit', function() {
	var emailContato = "thander-99@hotmail.com"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
		
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contato com você. Abraços.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});


/*$(document).ready(function(){
    $("#slides").click(function(){
    	var hidden = $(".header_menu");
    	if (hidden.hasClass('visible')){
	    	hidden.show().removeClass('visible')
	        $(".m").addClass('at');
	        $(".m1").addClass('at1');
	        $(".m2").addClass('at2');
	    } else {
        	hidden.hide().addClass('visible');
        	$(".m").removeClass('at');
        	$(".m1").removeClass('at1');
		$(".m2").removeClass('at2');
		$("nav.header_menu").css("display", "");
        }
    });
});*/

$(".btn-menu").click(function(){
				$(".header_menu").show();
				$(".btn-menu").css("display", "none");
				$(".btn-close").addClass('closeative');
});
	
$(".btn-close").click(function(){
				setTimeout(
            function() {
                $(".header_menu").addClass('animated bounceOutDown');
                $(".btn-close").removeClass('closeative');
            },300);

				setTimeout(
            function() {
                $(".header_menu").hide();
                $(".btn-menu").css("display", "").addClass('animated bounceInUp');
                $(".header_menu").removeClass('animated bounceOutDown');
                $("nav.header_menu").css("display", "");
            },900);
});