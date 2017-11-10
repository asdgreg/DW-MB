$(document).ready(function(){
	//cargaropciones();
	console.log("error");
	$.ajax({
		url:"/sesion",
		//Tambien se puede utilizar el siguiente patron:
		//url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
		data:"",
		method:"get",
		dataType:"json",
		success:function(respuesta){
			if(respuesta.length > 0){
			window.location = "/perfil_cliente.html";
			}else{
				alert("sin sesion");

			}
		},
		error:function(e){
			alert("Error: " + JSON.stringify(e));
		}
	});	

});


function verificacion(){
	var error = false;
	if(!document.getElementById("txt-usuario").value){
		error = true;
		document.getElementById("txt-usuario").style.borderColor = "#FF0000";
	}else{
		document.getElementById("txt-usuario").style.borderColor = "#ccc";
	}



	if(!document.getElementById("txt-pass").value){
		error = true;
		document.getElementById("txt-pass").style.borderColor = "#FF0000";
	}else{
		document.getElementById("txt-pass").style.borderColor = "#ccc";
	}

	if(error){
		console.log("ERROR");
		document.getElementById("mensajes").innerHTML = "<p class='text-danger'>Campos Vacios</p>";
	}else{
		login();
	}

}	

function login(){

	var parametros = 	"usuario="+$("#txt-usuario").val()+"&"+
						"pass="+$("#txt-pass").val();
	
	alert("Informacion a enviar a la peticion AJAX: " + parametros);

	$.ajax({
		url:"/login",
		//Tambien se puede utilizar el siguiente patron:
		//url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
		data:parametros,
		method:"POST",
		dataType:"json",
		success:function(respuesta){
			if(respuesta.length == 1){
				alert("Acceso Correcto");
				window.location="/perfil_cliente.html";
			}else{
				alert("ERROR DE CONTRASENA");

			}
		},
		error:function(e){
			alert("Error: " + JSON.stringify(e));
		}
	});
}

