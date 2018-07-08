function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el porcentaje de descuento");

	descuento=(descuento*precio)/100;
	precioFinal=precio-descuento;

	document.getElementById('elPrecioFinal').value=precioFinal;
}
