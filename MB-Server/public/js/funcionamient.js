	 $(document).ready(function(){
	 	//deshabilitar botones
	 	deshabilitarbtns();
	 	function deshabilitarbtns(){
	 	 for (var i = 2; i <= 4; i++) {
		 	$(".paso"+i).addClass("btn disabled");
		 }
		}


	 //Le asignamos la función a los elementos con clase "next"
	 var pasoact;
	 $('.next').click(function(){
	 //Obtenemos el id siguiente de la lista de los tab
	 pasoact = $(this).parents('.tab-pane').attr("id");
		 if(verificar(pasoact)){
		 	 var siguienteId = $(this).parents('.tab-pane').next().attr("id");
			 //mostramos el tab con el id que oobtuvimos anteriormente
			 $('[href="#'+siguienteId+'"]').tab('show');
			 //bloqueo de boton
			 $('.'+siguienteId).removeClass("btn disabled");
			 console.log(siguienteId);
		 }
	 })

	 //levantamos un listener cada vez que se activa un enlace del nav
	 $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

	 //Obtenemos el valor del paso del elemento nav
	 var paso = $(e.target).data('paso');
	 //Sacamos el porcentaje del progreso según el valor obtenido.
	 var porcentaje = (parseInt(paso) / 4) * 100;
	 //Asignamos el ancho de la barra
	 $('.progress-bar').css({width: porcentaje + '%'});
	 //Cambiamos la etiqueta de la barra
	 $('.progress-bar').text("Paso " + paso + " de 4");
	 })

	 //Botón de "Volver a empezar"
	 $('.first').click(function(){
	 //activamos la primera tab
	 $('#asistente a:first').tab('show')
	 deshabilitarbtns(); //deshabilitado
	 $('input').val(""); //limpiado
	 $('#mensaje3').html("");
	 $('#correo').css("border-color","#ccc");
	 })




	var verificar = function(paso) {
		switch(paso) {
		    case "paso1":
		        var error = 0;
		        var mensaje1 ="";
		        var nombre = ["nombre-pro","des-pro","mon-pro","datepicker"];
		        for (var i = 0; i < 4; i++) {
		        	if($('#'+nombre[i]).val().length == 0){
		         		error++;
		         		mensaje1 += "<tr><td>El Campo "+nombre[i]+" esta vacio </td></tr>";
		         		$('#'+nombre[i]).css("border-color","#FF0000");
		         	}else{
		         		$('#'+nombre[i]).css("border-color","#ccc");
		         	}
		        }

		        console.log(mensaje1)
		        if(error == 0){
		         	return true;
		        }else{
		        	$('#mensaje1').html(mensaje1);
		        }
		        break;
		    case "paso2":
		        	error = 0;
		        	var mensaje2 = "";
		        	var regurl = '^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$';
					var regu = new RegExp(regurl);
					
			        var nombre = ["img-pro","face","twi"];
			        for (var i = 0; i < 4; i++) {
			        	if(true){
				        	if(!regu.test($("#"+nombre[i]).val()) ){
				         		error++;
				         		console.log("Error de expresion");
				         		mensaje2 += "<tr><td>Formato incorrecto de "+nombre[i]+" </td></tr>";
				         		$('#'+nombre[i]).css("border-color","#FF0000");
				         	}else{
				         		$('#'+nombre[i]).css("border-color","#ccc");
				         		console.log("CORRECTA EXPESION");
				         	}
			         	}else{
			         		$('#'+nombre[i]).css("border-color","#ccc");
			         	}
			        }
			        regurl = '(https?:\\/\\/)?(www\\.)?(yotu\\.be\\/|youtube\\.com\\/)?((.+\\/)?(watch(\\?v=|.+&v=))?(v=)?)([\\w_-]{11})(&.+)?';
			        regu2 = new RegExp(regurl);
			        if(!regu2.test($("#you").val())){
			        	error++;
			        	$('#you').css("border-color","#FF0000");
			        	mensaje2 += "<tr><td>Formato incorrecto de www.youtube.com/ </td></tr>";
			        }else{
			        	$('#you').css("border-color","#ccc");
			        }


				if(error == 0){
		         	return true;
		        }else{
		        	$('#mensaje2').html(mensaje2);
		        }
		        break;
		    case "paso3":
		    	error = 0;
		    	var mensaje3 = "";
		        var nombre = ["correo-pro"];
		        for (var i = 0; i < 1; i++) {
		        	if($('#'+nombre[i]).val().length == 0){
		         		error++;
		         		mensaje3 += "<tr><td>Campo "+nombre[i]+" Vacio </td></tr>";
		         		$('#'+nombre[i]).css("border-color","#FF0000");
		         	}else{
		         		$('#'+nombre[i]).css("border-color","#ccc");
		         	}
		        }
		        /*
	 				if($("#pass").val() != $("#passr").val()){
	 					error++;
	 					mensaje += "<tr><td>contrasenas no coinciden </td></tr>";
	 					$('#pass').css("border-color","#ff8000");
	 					$('#passr').css("border-color","#ff8000");
	 				}

	 				var regemail = '^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$';
					var regem = new RegExp(regemail);
					

					if(regem.test($("#correo").val())) {
						$("#correo").css("border-color","#00FF00");
					}else{
						mensaje += "<tr><td>El Correo debe contener formato (ejemplo@dominio.com) </td></tr>";
						$("#correo").css("border-color","#ff8000");
						error++;
					}


					var regpass = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$';
					var regp = new RegExp(regpass);
					

					if(regp.test($("#pass").val())) {
						console.log("PASS CORRECTO");	
					}else{
						mensaje += "<tr><td>Contrasena debe contener 8 caracteres, simbolo, mayuscula (Sin puntos)</td></tr>";
						$('#pass').css("border-color","#ff8000");
	 					$('#passr').css("border-color","#ff8000");
						error++;
					}
	 					    */    

		        if(error == 0){
		         	return true;
		        }else{
		        	$('#mensaje3').html(mensaje3);
		        }
		        break;
		    default:
        		console.log("ERROR");
		}
	};

});

