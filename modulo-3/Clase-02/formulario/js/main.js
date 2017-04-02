$("#registro").click(function (e){
	e.preventDefault();

	var valueCheck=$("#inpCheck").val();
	var estadoCheck=$('#inpCheck').is(':checked')
	console.log("estado check ", estadoCheck);
	console.log("estado check ", valueCheck);
	if(estadoCheck==false){

	}
	else{
		
	}
	var estadoNombre=false;
	var estadoCorreo=false;
	//alert("manejando el formulario");
    var nombre=$("#inpNombre").val();
    // usamos el metodo trim para limpiar los espacios en blanco
    // de las cadenas de textos
	var nombreSinEspacios=$.trim(nombre);

	if(nombreSinEspacios==""){
		//el nombre esta vacio
		
		$("#labelNombre span").html("* (Ingresa el nombre!)")
	}
	else{
		$("#labelNombre span").html("")
		estadoNombre=true;
		//$("#listacontacto").append("<article><h2>"+nombreSinEspacios+"</h2></article>")
	}


	 // Expresion regular para validar el correo
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    var datoCorreo=$("#inpCorreo").val();
    var correosinespacio=$.trim(datoCorreo);
    // Se utiliza la funcion test() nativa de JavaScript

    if (regex.test(correosinespacio)) {
       estadoCorreo=true;

    } else {
        alert('La direccón de correo no es valida');
    }


    if(estadoNombre==true && estadoCorreo==true){
    	$("#listacontacto").append("<article><h2>"+nombreSinEspacios+"</h2></article>")
    }



})


$("#inpNombre").keypress(function(e){
	//console.log("estas presionando la tecla del input nombre");
	var codigo=e.keyCode;
	console.log(codigo);
	if(codigo>0 && codigo<64)
	{
		console.log("haz presionado un numero")
		e.preventDefault()
	}
	else{

	}
	
})

$("#inpTelefono").keypress(function(e){
	//console.log("estas presionando la tecla del input nombre");
	var codigo=e.keyCode;
	console.log(codigo);
	if(codigo>47 && codigo<58)
	{
	 // son numeros
	}
	else{
		console.log("haz presionado un numero")
		e.preventDefault();
	}
	
})


// link para expresiones regulares
// http://jquery-manual.blogspot.pe/2012/05/expresiones-regulares-con-jquery-match.html