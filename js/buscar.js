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
		document.getElementById("mensajes").innerHTML = "<p class='text-success'>Buscando:'"+ document.getElementById("txt-buscar").value +"'</p>";
	}

}

function focusProyecto(){
	
}

