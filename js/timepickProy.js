$(document).ready(function(){
//Le asignamos la función a los elementos con clase "next"
$('.next').click(function(){
//Obtenemos el id siguiente de la lista de los tab
var siguienteId = $(this).parents('.tab-pane').next().attr("id");
//mostramos el tab con el id que oobtuvimos anteriormente
$('[href=#'+siguienteId+']').tab('show');
})
//levantamos un listener cada vez que se activa un enlace del nav
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//Obtenemos el valor del paso del elemento nav
var paso = $(e.target).data('paso');
//Sacamos el porcentaje del progreso según el valor obtenido.
var porcentaje = (parseInt(paso) / 4) * 100;
//Asignamos el ancho de la barra
$('.progress-bar').css({width: porcentaje + '%'});
//Cambiamos la etiqueta de la barra
$('.progress-bar').text("Paso " + paso + " de 4");
})
//Botón de "Volver a empezar"
$('.first').click(function(){
//activamos la primera tab
$('#miAsistente a:first').tab('show')
})
});

//date time picker
/*
window.onerror = function(errorMsg) {
	$('#console').html($('#console').html()+'<br>'+errorMsg)
}*/

$.datetimepicker.setLocale('en');

$('#datetimepicker_format').datetimepicker({value:'2015/04/15 05:03', format: $("#datetimepicker_format_value").val()});
console.log($('#datetimepicker_format').datetimepicker('getValue'));

$("#datetimepicker_format_change").on("click", function(e){
	$("#datetimepicker_format").data('xdsoft_datetimepicker').setOptions({format: $("#datetimepicker_format_value").val()});
});
$("#datetimepicker_format_locale").on("change", function(e){
	$.datetimepicker.setLocale($(e.currentTarget).val());
});

$('#datetimepicker').datetimepicker({
dayOfWeekStart : 1,
lang:'en',
disabledDates:['1986/01/08','1986/01/09','1986/01/10'],
startDate:	'1986/01/05'
});
$('#datetimepicker').datetimepicker({value:'2015/04/15 05:03',step:10});

$('.some_class').datetimepicker();

$('#default_datetimepicker').datetimepicker({
	formatTime:'H:i',
	formatDate:'d.m.Y',
	//defaultDate:'8.12.1986', // it's my birthday
	defaultDate:'+03.01.1970', // it's my birthday
	defaultTime:'10:00',
	timepickerScrollbar:false
});


$('#datetimepicker_mask').datetimepicker({
	mask:'9999/19/39 29:59'
});
