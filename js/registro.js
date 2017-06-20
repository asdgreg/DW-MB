function verificacion(){
	var error = false;

	if(!document.getElementById("txt-nombre").value){
		error = true;
		document.getElementById("txt-nombre").style.borderColor = "#FF0000";
	}else{
		document.getElementById("txt-nombre").style.borderColor = "#ccc";
	}

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

	if(!document.getElementById("txt-verpass").value){
		error = true;
		document.getElementById("txt-verpass").style.borderColor = "#FF0000";
	}else{
		document.getElementById("txt-verpass").style.borderColor = "#ccc";
	}

	if(error){
		console.log("ERROR");
	}else{
		console.log("Entra");
		var pass1 = document.getElementById("txt-pass").value;
		var pass2 = document.getElementById("txt-verpass").value;
		if(pass1 != pass2){
			document.getElementById("mensajes").innerHTML = "<p class='text-danger'>No coinciden las Contrasenas</p>";
			console.log("distintos");
			document.getElementById("txt-verpass").style.borderColor = "#FF0000";
			document.getElementById("txt-pass").style.borderColor = "#FF0000";
		}
	}

}