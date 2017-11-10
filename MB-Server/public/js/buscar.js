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

$(document).ready(function(){
	//cargaropciones();
	topproyectos();
});

function cargaropciones(){	

	$.ajax({
		url:"/opciones",
		//Tambien se puede utilizar el siguiente patron:
		//url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
		data:"",
		method:"POST",
		dataType:"json",
		success:function(respuesta){
			if(respuesta.length > 0){
				for (var i = 0; i < respuesta.length; i++) {
					$("#div-opciones").append(respuesta[i].nombre_categoria+"<br>");
				}
			}else{
			}
		},
		error:function(e){
			alert("Error: " + JSON.stringify(e));
		}
	});

}

function cargarProyecto(idproyecto,nombre,info,actual,meta,imagen){
	  var html = "<div class='col-lg-4 col-md-6 col-sm-6 col-xs-12' onclick='verProyecto("+idproyecto+")'>"+
   					"<div class='panel panel-default'>"+
				      "<div class='panel-heading'><strong>"+nombre+"</strong></div>"+
				     " <img src="+imagen+" class='img-responsive imgProyecto' alt='Responsive image'>"+
				      "<div class='panel-body'>"+
				        "<div id='cont'>"+info+"</div>"+
				      "</div>"+
				      "<!-- BARRA -->"+
				      "<div class='progress'>"+
				        "<div class='progress-bar' style='width: "+((actual/meta)*100)+"%'></div>"+
				      "</div>"+

				      "<div class='table-responsive'>"+
				        "<table class='table table-bordered'>"+
				          "<tr>"+
				           "<td>"+
				             " <h6>Actual</h6><h4><strong>"+actual+"</strong></h4>"+
				            "</td>"+
				            "<td>"+
				            "  <h6>Meta</h6><h4><strong>"+meta+"</strong></h4>"+
				            "</td>"+
				         " </tr>"+
				       " </table>"+
				     " </div>"+
				   " </div>"+
				  "</div>";
	$("#resultados").append(html);
}

function topproyectos(){	

	$.ajax({
		url:"/topproyecto",
		//Tambien se puede utilizar el siguiente patron:
		//url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
		data:"limit=1",
		method:"POST",
		dataType:"json",
		success:function(respuesta){
			if(respuesta.length > 0){
				for (var i = 0; i < respuesta.length; i++) {
					cargarProyecto(respuesta[i].Id_Proyecto,respuesta[i].Nombre_Proyecto,
						respuesta[i].Descripcion,respuesta[i].Monto_Recaudado,
						respuesta[i].Monto_Meta,"/img/"+respuesta[i].imagen);
				}
			}else{
				alert("No hay Proyectos");
			}
		},
		error:function(e){
			alert("Error: " + JSON.stringify(e));
		}
	});

}

function busqueda(){	

	$.ajax({
		url:"/search",
		//Tambien se puede utilizar el siguiente patron:
		//url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
		data:"search="+$("#txt-buscar").val(),
		method:"POST",
		dataType:"json",
		success:function(respuesta){
			if(respuesta.length > 0){
				$("#resultados").html("");
				for (var i = 0; i < respuesta.length; i++) {
					cargarProyecto(respuesta[i].Id_Proyecto,respuesta[i].Nombre_Proyecto,
						respuesta[i].Descripcion,respuesta[i].Monto_Recaudado,
						respuesta[i].Monto_Meta,"/img/"+respuesta[i].imagen);
				}
				$("#txt-buscar").val("");

			}else{
				$("#resultados").html("NO SE ENCONTRARON COINCIDENCIAS");
			}
		},
		error:function(e){
			alert("Error: " + JSON.stringify(e));
		}
	});





}

function verProyecto(id){
	window.location = "detalleProyecto.html?pro="+id
}