$(document).ready(function(){



	$(document).ready(function(){

		
			// Recuperar tema del localstorage

	let storedTheme = localStorage.getItem("theme");
	if (storedTheme){
		theme.attr("href", storedTheme);
	}
	});





	// Slider

	if(window.location.href.indexOf('index') > -1){				// Solo se ejecuta el código si estamos en la página index.html
	  $('.bxslider').bxSlider({
  		  mode: 'fade',
  		  captions: true,
  		  slideWidth: 1200
 		 });
	}



	// Posts

	if(window.location.href.indexOf('index') > -1){	// Solo se ejecuta el código si estamos en la página index.html
		var posts = [
		{
			title: "Prueba de título 1", 
			date: "Publicado el día " + moment().format('DD-MM-YYYY'),
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			title: "Prueba de título 2", 
			date: "Publicado el día " + moment().format('DD-MM-YYYY'),
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			title: "Prueba de título 3", 
			date: "Publicado el día " + moment().format('DD-MM-YYYY'),
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			title: "Prueba de título 4", 
			date: "Publicado el día " + moment().format('DD-MM-YYYY'),
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			title: "Prueba de título 5", 
			date: "Publicado el día " + moment().format('DD-MM-YYYY'),
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	];


	posts.forEach((item, index) => {
	
		var post = `
			<article class="post">
					<h2>${item.title}</h2>
					<span class="date"> ${item.date}</span>
					<p> ${item.content}</p>
					<a href="#" class="button-more"> Leer más</a>
			</article>
		`;

		$('#posts').append(post);
	});
	}

	




	// theme picker

	var theme = $('#theme');

	$('#to-green').click(function(){
		theme.attr("href", "css/green.css");
		localStorage.setItem("theme", "css/green.css");
	});

	$('#to-blue').click(function(){
		theme.attr("href", "css/blue.css");
		localStorage.setItem("theme", "css/blue.css");
		
	});

	$('#to-red').click(function(){
		theme.attr("href", "css/red.css");
		localStorage.setItem("theme", "css/red.css");
		
	});





	// Scroll arriba de la web
	$('.subir').click(function(e){

		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 800);

		return false;
	});


	// Login falso

	$('#login form').submit(function(){
		var form_name = $('#form_name').val();
		localStorage.setItem("form_name", form_name);
		
	});

	var form_name = localStorage.getItem("form_name");


	if(form_name != null && form_name != "undefined"){

		var about_parrafo = $('#about p');

		about_parrafo.html("<br/> <strong> Bienvenid@," + form_name + "</strong>");
		about_parrafo.append('<a href="#" id="logout"> Cerrar sesión </a>');

		$('#login').hide();

		$('#logout').click(function(){
		//	localStorage.clear();	Limpia TODO el localStorage, en este caso no se puede usar porque borraría tb el tema del fondo
		localStorage.removeItem('form_name');
		location.reload();
		});

	}


	// Acordeón
	if (window.location.href.indexOf('about') > -1) {
		$('#acordeon').accordion();
	}


	// Reloj
	if (window.location.href.indexOf('reloj') > -1) {

		// setInterval permite ejecutar en bucle cada cierto tiempo, el que le indicamos, un bloque de instrucciones
		setInterval(function(){
			var reloj = moment().format("hh:mm:ss a");
			$('#reloj').html(reloj);
		}, 1000);


	
	}	


	// Validación de formulario con plugin de JQ

	if(window.location.href.indexOf('contacto') > -1){

		$('form input[name="fecha-nacimiento"]').datepicker({
			dateFormat: 'dd-mm-yy'
		});



		$.validate({
			lang: 'es',
			errorMessagePosition: 'top',
			scrollToTopOnError: true

		});
	}

});