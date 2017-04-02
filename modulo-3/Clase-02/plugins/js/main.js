$("#item1").click(function(){
	
	$(".list-nav li").removeClass("activo");
	$("#item1").addClass("activo");
	$("body").removeClass();
})

$("#item2").click(function(){
	$(".list-nav li").removeClass("activo");
	$("#item2").addClass("activo");
	$("body").removeClass();
	$("body").addClass("opc-lefsidebar")

})

$("#item3").click(function(){
$(".list-nav li").removeClass("activo");
	$("#item3").addClass("activo");
	$("body").removeClass();
})
 $("#item4").click(function(){
	$(".list-nav li").removeClass("activo");
	$("#item4").addClass("activo");
	$("body").removeClass();
$("body").addClass("opc-nosidebar");

})


/*
$(".list-nav li").click(function(){
	$(".list-nav li").removeClass("activo");
	$(this).addClass("activo");
})*/

$(".ui-more").click(function(e){
	e.preventDefault();
$(".box-modal").fadeIn();
var titulo=$(this).attr("data-titulo");
var rutaImagen=$(this).attr("data-imagen");
 //var titulo=$(this).parent().find(".ui-title").text();
  //var rutaImagen=$(this).parent().find("img").attr("src");
 

 console.log(titulo);
 console.log(rutaImagen);

$(".title-modal").text(titulo);
$(".img-modal").attr("src",rutaImagen);

})

$(".cerrar-modal").click(function(){
$(".box-modal").fadeOut();

})


setTimeout(mensaje,10000);
function mensaje(){
	$(".loadgin").fadeOut("loading-activo")
}