
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	var $btnAgregar = $('#btnAgregar');
    $('.modal').modal();
	$btnAgregar.click(agregarContacto);
  });


 var agregarContacto = function(){
   /*treaemos elementos*/
   var $nombre = $('#input_text_nombre').val();
   var $telefono = $('#input_text_tel').val();
   
  /* obtenemos valores de elementos*/
 	
  /* creamos elementos nuevos */
  var $contenedorContactos = $(".contenedor-contactos");
  var $fila = $("<div/>", { "class": "row"});
  var $contacto = $("<div/>", { "class": "card-panel col s6 offset-s2 purple lighten-4"});
  var $contenedorTelefono = $("<p/>");
  var $contenedorNombre = $("<p/>");
  
 /*agregarlos al dom*/
  $contenedorNombre.text("Nombre:" +""+  $nombre);
  $contenedorTelefono.text("Telefono:"+""+ $telefono);
  $contacto.append($contenedorNombre)
  $contacto.append($contenedorTelefono);
  $fila.append($contacto);
  $contenedorContactos.append($fila);
	 
 }
  