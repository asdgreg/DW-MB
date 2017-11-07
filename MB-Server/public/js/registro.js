function verificacion(){
	var error = false;

		if(!$("#txt-usuario").val()){
			error = true;
			$("#txt-usuario").css("border-color", "#ff0000");
		}else{
			$("#txt-usuario").css("border-color", "#ccc");
		}	


		if(!$("#txt-nombre").val()){
			error = true;
			$("#txt-nombre").css("border-color", "#ff0000");
		}else{
			$("#txt-nombre").css("border-color", "#ccc");
		}

		if(!$("#txt-correo").val()){
			error = true;
			$("#txt-correo").css("border-color", "#ff0000");
		}else{
			$("#txt-correo").css("border-color", "#ccc");
		}

		if(!$("#txt-pass").val() || !$("#txt-verpass").val()){
			error = true;
			$("#txt-pass").css("border-color", "#ff0000");
			$("#txt-verpass").css("border-color", "#ff0000");
		}else{
			if($("#txt-pass").val() == $("#txt-verpass").val()){
				$("#txt-pass").css("border-color", "#ccc");
				$("#txt-verpass").css("border-color", "#ccc");
			}

		}

		if(error){
			console.log("Error encontrado");
		}else{

			//creacion del usuario
			var parametros = "usuario="+$("#txt-usuario").val()
							+"&nombre="+$("#txt-nombre").val()
							+"&apellido="+$("#txt-apellido").val()
							+"&correo="+$("#txt-correo").val()
							+"&telefono="+$("#txt-telefono").val()
							+"&ocupacion="+$("#txt-ocupacion").val()
							+"&contrasena="+$("#txt-pass").val();

			$.ajax({
				url: 	"/registrar",
				method: "POST",
				data: 	parametros,
				dataType: "json",
				success: function(respuesta){
					if(respuesta == 0 ){
						alert("Usuario Existente");
					}else{
						alert("Usuario Creado Exitosamente");
						window.location.href = 'sesion.html';
					}
				},
				error: function(err){
					console.log(err);
				}
			});

		}
}


function email(){
	$.ajax({
		url:"/email",
		//Tambien se puede utilizar el siguiente patron:
		//url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
		data:"mail="+$("#txt-correo").val(),
		method:"POST",
		dataType:"json",
		success:function(respuesta){
			if(respuesta.changedRows==1){
				alert("Contrasena Modificada / Correo enviado");
			}else{
				alert("Correo no existe");
			}
		},
		error:function(e){
			alert("Correo no existe");
		}
	});
	
}