/*inicia fuicion de carga */
$(document).ready(function(){
/*ejecutamos funcion de modal*/
    $('.modal').modal();

/*hacemos una funcion que agregue un nuevo contacto	*/

 var agregarContacto = function(){
   /*treaemos elementos*/
   var $nombre = $('#input_text_nombre').val();
   var $telefono = $('#input_text_tel').val();
	 
  /* creamos elementos nuevos */
  var $contenedorContactos = $(".contenedor-contactos");
  var $fila = $("<div/>", { "class": "row"});
  var $contacto = $("<div/>", { "class": "card-panel col s4 offset-s2 purple lighten-4"});
  var $contenedorTelefono = $("<p/>",{"class": "purple-text text-lighten-1"});
  var $contenedorNombre = $("<p/>",{"class":"purple-text text-lighten-1" }); 
  var $eliminar = $("<i/>",{"class": "material-icons purple-text text-lighten-1 eliminar"});
	 
 /*agregarlos al dom*/
  $contenedorNombre.text("NOMBRE:" +" "+  $nombre);
  $contenedorTelefono.text("TELEFONO:"+" "+ $telefono);
  $eliminar.text("delete");
  $contacto.append($contenedorNombre);
  $contacto.append($contenedorTelefono); 
  $contacto.append($eliminar);
  $fila.append($contacto);
  $contenedorContactos.append($fila);
	 
	 /*dentro de esta funcion(ya que aqui se crearon los elementos)agregamos la funcion de eliminar ese elemento creado dinamicamente*/
	 
	var eliminarContacto = function (){
      $(this).parent().remove();
	};
	
	/*llamamos a la funcion con un evento de click*/
	 
	var $btnEliminarContacto = $('.eliminar');
	$btnEliminarContacto.click(eliminarContacto);
	 
   };
	
/*termina funcion agregar contacto */
	
/*llamamos a la funcion agregar para que se ejecute*/
	
	var $btnAgregar = $('#btnAgregar'); 
	$btnAgregar.click(agregarContacto);

});	

/*termina funcion de carga*/
	
 
 
  
 