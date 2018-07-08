function mostrar()
{
	var precio;
	var descuento;
	var iva;
	var precioFinal;

	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el porcentaje de descuento");

	descuento=(descuento*precio)/100
	precio=precio-descuento;
	iva=(21*precio)/100;

	alert("El descuento en dinero es de $"+descuento+". El precio con el descuento es de $"+precio+". El IVA es de $"+iva);

	precioFinal=precio+iva;

	document.getElementById('elPrecioFinal').value=precioFinal;
}
