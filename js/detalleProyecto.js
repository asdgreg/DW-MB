
function extraerImagenes(id,url){

	$.ajax({
		url:"/extraerImg",
		data:"id_pro="+id,
		method:"get",
		dataType:"json",
		success:function(respuesta){

        if(respuesta.length > 0){
        	$("#div-c1").append('<div class="galleryThumbnail col-lg-14 col-md-12 col-sm-12 col-xs-12">');
        	$("#div-c1").append('<img src="img/video.jpg" width ="50px" height="50px" onclick="cambiarVideo(\''+url+'\');" >');
			for (var i = 0; i < respuesta.length; i++) {
				$("#div-c1").append('<img src="'+respuesta[i].Imagen+'" width ="50px" height="50px" onclick="cambiarImg(\''+respuesta[i].Imagen+'\');" >');
			}

			$("#div-c1").append('</div>');



		}else{
				alert("sin sesion");

			}
		},
		error:function(e){
			alert("ErrorPro: " + JSON.stringify(e));
		}
	});	


}

function cambiarImg(ruta){
	$("#cambiarImagen").html('<img class="col-lg-12 col-md-12 col-sm-12 col-xs-12" src="'+ruta+'">');
}

function cambiarVideo(ruta){
	$("#cambiarImagen").html('<video class="col-lg-10 col-md-12 col-sm-12 col-xs-12" src="'+ruta+'" controls></video><hr>');
}



$(document).ready(function(){
	//cargaropciones();

	var URLsearch = window.location.search;
	var res = URLsearch.split("=");
	//alert("QUERY = " + res[1]);

		$.ajax({
		url:"/verpro",
		//Tambien se puede utilizar el siguiente patron:
		//url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
		data:"id_pro="+res[1],
		method:"get",
		dataType:"json",
		success:function(respuesta){

			if(respuesta.length > 0){
				$("#div-c1").html("");
				
				var html1 =
					'<div id="cambiarImagen" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
			          '<video class="col-lg-10 col-md-12 col-sm-12 col-xs-12" src="'+respuesta[0].url_video+'" controls></video><hr>'+
			        '</div>';

			        extraerImagenes(respuesta[0].Id_Proyecto, respuesta[0].url_video);


				$("#div-c1").html(html1);




				var html2 = 
				'<br>'+
				'<h4>'+respuesta[0].Nombre_Proyecto+'</h4>'+
  				'<table class="table col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
	  				'<tr>'+
		  	 			'<br><td colspan="2"><label>Descripción del proyecto:</label><br><br>'+
		                '<p id="dp" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
		                respuesta[0].Descripcion+
		                '</p>'+
		                '</td>'+
	  				'</tr>'+
	  				'<tr>'+
		  	 			'<td><img class="redondo" src="img/profile.png" width="70" height="70"></td>'+
		                '<td><br><label>'+respuesta[0].Nombre_Usuario+'</label></td>'+
	  				'</tr>'+
	              	'<tr>'+
	              	    '<td><label>Monto Meta</label></td>'+
	              	    '<td><label> $'+respuesta[0].Monto_Meta+'</label></td>'+
	              	'</tr>'+
	              	'<tr>'+
	                	'<td><label>Monto Recaudado</label></td>'+
	                	'<td><label> $'+respuesta[0].Monto_Recaudado+'</label></td>'+
	              	'</tr>'+
	              	'<tr>'+
	                	'<td colspan="2">'+
	                		'<div class="progress">'+
	                			'<div class="progress-bar" style="width:'+((respuesta[0].Monto_Recaudado/respuesta[0].Monto_Meta)*100)+'%"></div>'+
	                		'</div>'+ 
	                	'</td>'+
	              	'</tr>'+
	              	'<tr>'+
	                	'<td colspan="2">'+
	                		'<label>'+((respuesta[0].Monto_Recaudado/respuesta[0].Monto_Meta)*100)+'% de Recaudación</label><br>'+
	                	'</td>'+
	              	'</tr>'+
  			    '</table>'+
                '<div>'+
                	'<button class="btn btn-success btn-group-justified" style="width: 200px">Donar</button>'+
                '</div>';
            


	             $("#div-c2").html(html2);

			}else{
				alert("sin sesion");

			}
		},
		error:function(e){
			alert("ErrorPro: " + JSON.stringify(e));
		}
	});	

});