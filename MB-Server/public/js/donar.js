$("#slc-donar").change(function(){
	var slc = $('#slc-donar').val();
	var boton = "";

	if ($("#c").val()=="" || $("#n").val()=="") {
		alert("Completa los campos");

	}else{

		switch(slc){
        case '1':
           boton =
           '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'+
		   '<input type="hidden" name="cmd" value="_s-xclick">'+
		   '<input type="hidden" name="hosted_button_id" value="SUAMZ2V2R334G">'+
		   '<input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">'+
		   '<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">'+
		   '</form>';

		   $("#div-boton").html(boton);
     
        break; 

        case '5':
           boton =
           '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'+
			'<input type="hidden" name="cmd" value="_s-xclick">'+
			'<input type="hidden" name="hosted_button_id" value="L27T5DE3C8D5C">'+
			'<input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">'+
			'<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">'+
			'</form>';

		$("#div-boton").html(boton);
       

        break;

        case '10':
             boton = 
             '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'+
			'<input type="hidden" name="cmd" value="_s-xclick">'+
			'<input type="hidden" name="hosted_button_id" value="PUJNQYGURZ9MW">'+
			'<input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">'+
			'<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">'+
			'</form>';

			$("#div-boton").html(boton);

          
        break;

        case '20' :
            boton = 
            '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'+
			'<input type="hidden" name="cmd" value="_s-xclick">'+
			'<input type="hidden" name="hosted_button_id" value="YVQ6YJFN8LHVA">'+
			'<input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">'+
			'<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">'+
			'</form>';

            $("#div-boton").html(boton);


        break;

        case '50':
             boton =
            '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'+
			'<input type="hidden" name="cmd" value="_s-xclick">'+
			'<input type="hidden" name="hosted_button_id" value="EH9MDMTGAME5W">'+
			'<input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">'+
			'<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">'+
			'</form>';


			$("#div-boton").html(boton);

           
        break;

        case '100':
        	boton =

        	'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'+
			'<input type="hidden" name="cmd" value="_s-xclick">'+
			'<input type="hidden" name="hosted_button_id" value="URGNFDSCPRCHG">'+
			'<input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">'+
			'<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">'+
			'</form>';


        	$("#div-boton").html(boton);
     
        break;

        case '500':
            boton=
            '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'+
			'<input type="hidden" name="cmd" value="_s-xclick">'+
			'<input type="hidden" name="hosted_button_id" value="KAHKQQUKWNDNQ">'+
			'<input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">'+
			'<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">'+
			'</form>';


 			$("#div-boton").html(boton);
     
        break;

        case '1000':
        	boton = 
        	'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'+
			'<input type="hidden" name="cmd" value="_s-xclick">'+
			'<input type="hidden" name="hosted_button_id" value="E2VDKKA3QCVCA">'+
			'<input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">'+
			'<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">'+
			'</form>';

			$("#div-boton").html(boton);
    
        break;

        default:
            alert("No ha elejido su aporte");
        break;
        }
        registrarDonacion($("#id").val());
	}

});

function hacerDonacion(){
	var errores = false;
	var errorEmail = "";
	var errorNombre= "";

	if(document.getElementById("c").value){
		document.getElementById("c").style.borderColor = "#ccc";
		errorEmail = "";
	}else{
		document.getElementById("c").style.borderColor = "#FF0000";
		errores = true;
		errorEmail = "El campo correo esta vacio";
	}

	if(document.getElementById("n").value){
		document.getElementById("n").style.borderColor = "#ccc";
		errorNombre = "";
	}else{
		document.getElementById("n").style.borderColor = "#FF0000";
		errores = true;
		errorNombre = "El campo nombre esta vacio";
	}

    var reg=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
    
    if(reg.test(document.getElementById("c").value)){
      null//return true;//email correcto
     } else{
     	errores = true;
     	document.getElementById("c").style.borderColor = "#FF0000";
     	errorEmail = "El formato del correo es incorrecto";
        //return false; //email incorrecto
     }

	if (errores) {
		document.getElementById("c").innerHTML = errorEmail;
		document.getElementById("n").innerHTML = errorNombre;
	}else{
		document.getElementById("c").innerHTML = errorEmail;
		document.getElementById("n").innerHTML = errorNombre;

		var boton =
           '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'+
		   '<input type="hidden" name="cmd" value="_s-xclick">'+
		   '<input type="hidden" name="hosted_button_id" value="SUAMZ2V2R334G">'+
		   '<input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">'+
		   '<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">'+
		   '</form>';

		   $("#div-boton").html(boton);

	}
}

function cargarDatos(id){
	$.ajax({
		url:"/cargarDatosDonar",
		data:"id_pro="+id,
		method:"get",
		dataType:"json",
		success:function(respuesta){
			if(respuesta.length > 0){
        		$("#div-nombre").html('<h4>Está contribuyendo con el proyecto '+respuesta[0].Nombre_Proyecto+'</h4><br>');
   				
			}else{
					alert("sin sesion");
            }
                 
		},
		error:function(e){
			alert("ErrorPro: " + JSON.stringify(e));
		}
	});	

}

//Si se realiza el pago

function registrarDonacion(id){

        var parametros = "id_pro="+id+"&"+
                          "monto="+$('#slc-donar').val()+"&"+
                          "nombre="+$('#n').val()+"&"+
                          "correo="+$('#c').val();
         alert(parametros);

        $.ajax({
		url:"/registrarDonacion",
		data:parametros,
		method:"post",
		dataType:"json",
		success:function(respuesta){
           obtenerMonto(id);
		},
		error:function(e){
			alert("ErrorPro: " + JSON.stringify(e));
		}
	});	
}

function obtenerMonto(id){

	$.ajax({
		url:"/obtenerMonto",
		data:"id_pro="+id,
		method:"post",
		dataType:"json",
		success:function(respuesta){
		   actualizarMonto(id,respuesta[0].monto_recaudado);
		},
		error:function(e){
			alert("ErrorPro: " + JSON.stringify(e));
		}
	});	

}

function actualizarMonto(id,monto){

	var m = (parseInt(monto) + parseInt($('#slc-donar').val()));
	//alert(m);

	var parametros = "id_pro="+id+"&"+
                     "monto="+m;

	$.ajax({
		url:"/actualizarMonto",
		data:parametros,
		method:"post",
		dataType:"json",
		success:function(respuesta){

		},
		error:function(e){
			alert("ErrorPro: " + JSON.stringify(e));
		}
	});	

}
//fin si se realiza el pago




$(document).ready(function(){

	var URLsearch = window.location.search;
	var res = URLsearch.split("=");

	$.ajax({
		url:"/proyect",
		data:" ",
		method:"get",
		dataType:"json",
		success:function(respuesta){
                 //alert(respuesta);
                 cargarDatos(res[1]);
                 $("#id").val(res[1]);
		},
		error:function(e){
			alert("ErrorPro: " + JSON.stringify(e));
		}
	});	

		
});



