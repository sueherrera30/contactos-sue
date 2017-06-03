/*inicia fuicion de carga */
$(document).ready(function(){
/*ejecutamos funcion de modal*/
    $('.modal').modal();
	
/*hacemos una funcion que agregue un nuevo contacto	*/

 var agregarContacto = function(){
   /*treaemos elementos*/
   var $nombre = $('#input_text_nombre');
   var $telefono = $('#input_text_tel');
   var $email = $("#input_text_email");
	 
  /* creamos elementos nuevos */
  var $contenedorContactos = $(".contenedor-contactos");
  var $fila = $("<div/>", { "class": "row"});
  var $contacto = $("<div/>", { "class": "card-panel col s4 offset-s2 teal lighten-2 contacto"});
  var $contenedorTelefono = $("<p/>",{"class": "white-text"});
  var $contenedorNombre = $("<p/>",{"class":"white-text"});
  var $contenedorEmail = $("<p/>",{"class":"white-text"});
  var $eliminar = $("<i/>",{"class": "material-icons eliminar white-text"});
	 
 /*agregarlos al dom*/
  $contenedorNombre.text("NOMBRE:" +" "+  $nombre.val());
  $contenedorTelefono.text("TELEFONO:" + " " + $telefono.val());
   $contenedorEmail.text("EMAIL:" + " " + $email.val());
  $eliminar.text("delete");	 
  $contacto.append($contenedorNombre);
  $contacto.append($contenedorTelefono); 
  $contacto.append($contenedorEmail); 
  $contacto.append($eliminar);
  $fila.append($contacto);
  $contenedorContactos.append($fila);
	 
	 /*creamos una funcion que deje los valores del input vacios*/
	  var vaciarEntradas=function(){
	  $nombre.val("");
	  $telefono.val("");
	  $email.val("");
    };
	 /*llamamos funcion vaciar entradas*/
	 vaciarEntradas(); 
	 
	 /*dentro de esta funcion(ya que aqui se crearon los elementos)agregamos la funcion de eliminar ese elemento creado dinamicamente*/
	var eliminarContacto = function (){
      $(this).parent().remove();
	};
	

	/*llamamos a la funcion de eliminar al hacer click en el modal */
	var $btnEliminarContacto = $('.eliminar');
	$btnEliminarContacto.click(eliminarContacto);
	 
	 
	 /*funcion que contabiliza el numero de contactos*/
	 var contadorContactos = function(){
	  var $contactoNuevo = $(".contacto").length; 
	  var $contador = $("#contador");
	  $contador.text("Cantidad de contactos:" +" "+ $contactoNuevo +" "+"❤" );
	  $contenedorContactos.prepend($contador);
   }
	 /*llamamos funcion de contador*/
	 contadorContactos();
	 
	 
   };
	
	
		
/*termina funcion agregar contacto */
	
/*llamamos a la funcion agregar para que se ejecute*/
	
	var $btnAgregar = $('#btnAgregar'); 
	$btnAgregar.click(agregarContacto);

});


/*termina funcion de carga*/
	
 
 
  
 