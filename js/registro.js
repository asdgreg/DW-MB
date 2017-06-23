function verificacion(){
	var error = false;

	if(!document.getElementById("txt-buscar").value){
		error = true;
		document.getElementById("txt-buscar").style.borderColor = "#FF0000";
	}else{
		document.getElementById("txt-buscar").style.borderColor = "#ccc";
	}

	if(error){
		console.log("ERROR");
		document.getElementById("mensajes").innerHTML = "<p class='text-danger'>Ingrese texto en la busqueda</p>";
	}else{
		document.getElementById("mensajes").innerHTML = "<p class='text-danger'>Buscando:"+ document.getElementById("txt-buscar").value +"</p>";
		console.log("Entra");
		var pass1 = document.getElementById("txt-pass").value;
		var pass2 = document.getElementById("txt-verpass").value;
		if(pass1 != pass2){
			
			console.log("distintos");
			document.getElementById("txt-verpass").style.borderColor = "#FF0000";
			document.getElementById("txt-pass").style.borderColor = "#FF0000";
		}
	}

}