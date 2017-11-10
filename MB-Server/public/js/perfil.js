var activo = 0; 
var edicion = 0; 
var id_edicion;
var id_img;
$(document).ready(function(){
	bloquear(1);
	$.ajax({
		url:"/sesion",
		//Tambien se puede utilizar el siguiente patron:
		//url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
		data:"",
		method:"get",
		dataType:"json",
		success:function(respuesta){
			if(respuesta.length > 0){
				$("#txt-usuario").val(respuesta);
				$("#usimagen").val(respuesta);
					cargarDatos(respuesta);
					cargarProy();
			}else{
				window.location = "/sesion.html";
			}
		},
		error:function(e){
			alert("Error: " + JSON.stringify(e));
		}
	});	

});


function cargarDatos(id){
	$.ajax({
		url:"/datosuser",
		//Tambien se puede utilizar el siguiente patron:
		//url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
		data:"usuario="+id,
		method:"post",
		dataType:"json",
		success:function(respuesta){
			if(respuesta.length > 0){
				$("#txt-nombre").val(respuesta[0].Nombres);
				$("#txt-apellido").val(respuesta[0].Apellidos);
				$("#txt-correo").val(respuesta[0].Correo);
				$("#txt-telefono").val(respuesta[0].Telefono);
				$("#txt-ocupacion").val(respuesta[0].Ocupacion);
				$("#user-img").attr("src", "img/User/"+id+".jpg");
			}else{
				window.location = "/sesion.html";
			}
		},
		error:function(e){
			alert("Error: " + JSON.stringify(e));
		}
	});	


}

function bloquear(int){
	var campos = ["#txt-nombre","#txt-apellido","#txt-correo","#txt-telefono","#txt-ocupacion"];
	for (var i = 0; i < campos.length; i++) {
		if (int == 1) {//bloquenado
			$(campos[i]).attr("disabled", "");
		}else{
			$(campos[i]).prop("disabled", false);
		}
	}

}


function editarcrear(){
		if(edicion == 1){
			editseleccionado();
		}else{
			nuevo();
		}
}


function editarparm(){
		if(activo == 1){
			guardarcambios();
		}else{
			$("#edit").html(" GUARDAR");
			bloquear(0);
			activo = 1;
		}
}


function guardarcambios(){
		if($("#txt-nombre").val() && $("#txt-apellido").val() && $("#txt-correo").val() && $("#txt-telefono").val() && $("#txt-ocupacion").val()){

			var parametros = "usuario="+$("#txt-usuario").val()
							+"&nombre="+$("#txt-nombre").val()
							+"&apellido="+$("#txt-apellido").val()
							+"&correo="+$("#txt-correo").val()
							+"&telefono="+$("#txt-telefono").val()
							+"&ocupacion="+$("#txt-ocupacion").val()
							

				$.ajax({
				url:"/edit-user",
				//Tambien se puede utilizar el siguiente patron:
				//url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
				data:parametros,
				method:"POST",
				dataType:"json",
				success:function(respuesta){
					if(respuesta.affectedRows  == 1){
						$("#edit").html(" EDITAR");
						bloquear(1);
						activo = 0;
					}else{
						alert("No se guardaron los cambios");
					}
				},
				error:function(e){
					alert("Error: " + JSON.stringify(e));
				}
			});
		}else{
			alert("Error: campos vacios");

		}
}

function cargarProy(){
$("#tbl-registros").html("");
	var parametros = "usuario="+$("#txt-usuario").val();
	$.ajax({
		url:"/user-proy",
		//Tambien se puede utilizar el siguiente patron:
		//url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
		data:parametros,
		method:"POST",
		dataType:"json",
		success:function(respuesta){
			if(respuesta.length > 0){
				for (var i = 0; i < respuesta.length; i++) {
					agregarP(respuesta[i].Id_Proyecto,respuesta[i].Nombre_Proyecto,
							 respuesta[i].Descripcion,respuesta[i].Monto_Meta,
							 respuesta[i].Monto_Recaudado,respuesta[i].Fecha);
					
				}
			}else{
				alert("ERROR EN CARGA");

			}
		},
		error:function(e){
			alert("Error: " + JSON.stringify(e));
		}
	});
}


function agregarP(id,nombre, info,meta,actual,fecha){
	var html ="<tr>"+
      "<td>"+nombre+"</td>"+
      "<td>"+info+"</td>"+
      "<td>"+meta+"</td>"+
      "<td>"+actual+"</td>"+
      "<td>"+fecha+"</td>"+
      "<td><button class='btn btn-warning glyphicon glyphicon-picture' onclick='subirimgnueva("+id+")'    data-toggle='modal' data-target='.bs-example-modal-sm'> </button> <button class='btn btn-info glyphicon glyphicon-pencil' onclick='editProyecto("+id+")' href='#miModal' data-toggle='modal'> </button>  <button class='btn btn-default glyphicon glyphicon-eye-open' onclick='verProyecto("+id+")'> </button></td>"+
    "</tr>";
    $("#tbl-registros").append(html);
}


function nuevo(){

var res = $("#datepicker").val().split("/");
var fecha = res[1] +"/"+res[0]+"/"+res[2].substring(2, 4)
alert($("#img-pro").val());


			var parametros = "usuario="+$("#txt-usuario").val()
							+"&nombre="+$("#nombre-pro").val()
							+"&descripcion="+$("#des-pro").val()
							+"&monto="+$("#mon-pro").val()
							+"&fecha="+fecha
							+"&categoria=1"
							+"&face="+$("#Facebook").val()
							+"&twi="+$("#Twitter").val()
							+"&video="+$("#Yotube").val();
							//+"&categoria="+$("#txt-usuario").val();

			$.ajax({
				url: 	"/nuevo-proyecto",
				method: "POST",
				data: 	parametros,
				dataType: "json",
				success: function(respuesta){
					if(respuesta == 1 ){
						alert("Proyecto Creado");
						window.location = "/perfil_cliente.html"
					}else{
						alert("Error creando");
					}
				},
				error: function(err){
					console.log(err);
				}
			});
}


function verProyecto(id){

	window.location = "detalleProyecto.html?pro="+id
}

function logout(){

}

function editseleccionado(){
var res = $("#datepicker").val().split("/");
var fecha = res[1] +"/"+res[0]+"/"+res[2].substring(2, 4);
if(res[2].length > 2){
	var fecha = res[1] +"/"+res[0]+"/"+res[2].substring(2, 4);
}else{
	var fecha = res[1] +"/"+res[0]+"/"+res[2];
}

			var parametros = "nombre="+$("#nombre-pro").val()
							+"&descripcion="+$("#des-pro").val()
							+"&fecha="+fecha
							+"&face="+$("#Facebook").val()
							+"&twi="+$("#Twitter").val()
							+"&video="+$("#Yotube").val()
							+"&id_pro="+id_edicion;
							//+"&categoria="+$("#txt-usuario").val();
console.log(parametros);
			$.ajax({
				url: 	"/editproyecto",
				method: "POST",
				data: 	parametros,
				dataType: "json",
				success: function(respuesta){
					if(respuesta.affectedRows == 1 ){
						alert("Proyecto Modificado");
						window.location = "/perfil_cliente.html"
					}else{
						alert("Error creando");
					}
				},
				error: function(err){
					console.log(err);
				}
			});
}


function editProyecto(num){
edicion = 1;
id_edicion= num;
		$.ajax({
		url:"/vercompleto",
		data:"id_pro="+num,
		method:"post",
		dataType:"json",
		success:function(respuesta){
						$("#nombre-pro").val(respuesta[0].Nombre_Proyecto);
						$("#des-pro").val(respuesta[0].Descripcion);
						$("#mon-pro").val(respuesta[0].Monto_Meta);
						$("#mon-pro").attr("disabled", "");
						$("#datepicker").val(respuesta[0].Fecha);
						$("#face").val(respuesta[0].facebook);
						$("#twi").val(respuesta[0].twitter);
						$("#you").val(respuesta[0].url_video);

				},
				error: function(err){
					console.log(err);
				}
			});
}

function limpiar (){
						$("#nombre-pro").val("");
						$("#des-pro").val("");
						$("#mon-pro").val("");
						$("#mon-pro").prop("disabled", false);
						$("#datepicker").val("");
						$("#Facebook").val("");
						$("#Twitter").val("");
						$("#Yotube").val("");
}

//UPDATE `mb_db`.`tbl_proyectos` SET `Nombre_Proyecto`= ?, `Descripcion`= ?, `Fecha`= ?, `url_video`= ?, `facebook`= ?, `twitter`= ? WHERE `Id_Proyecto`= ;


function guardarImagen(){
var form = $('#form1')[0];
var data = new FormData(form);
	if($("#usimagen").val()){
		if($("#archivo").val()){
			$.ajax({
					url:"/subirimg",
		            type: "POST",
		            enctype: 'multipart/form-data',
		            data: data,
		            processData: false,
		            contentType: false,
		            cache: false,
		            timeout: 600000,		
				success:function(respuesta){
						console.log(respuesta);	
						$("#archivo").val("");
						alert("Imagen Actualizada!");
				},
				error:function(e){
					alert("Error: " + JSON.stringify(e));
				}
			});
		}
		else
		{
			alert("Campos Vacios");
		}
	}
	else 
	{
		alert("Inicie Sesion Antes");
	}



}

function subirimgnueva(id){
	$("#idproyimg").val(id);

}