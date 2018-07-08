
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base=prompt("Ingrese la base");
	altura=prompt("Ingrese la altura");

	superficie=(base*altura)/2;
	perimetro=base*3

	alert("La superficie del triangulo es "+superficie+", y el perimetro es "+perimetro);
}
