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
	}

}