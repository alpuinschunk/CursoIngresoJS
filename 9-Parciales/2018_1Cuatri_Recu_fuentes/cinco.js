function mostrar()
{
	var dia=prompt("Ingrese un dia de la semana");

	dia=dia.toLowerCase();

	switch(dia)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			alert("¡A trabajar!");
			break;
		case "sabado":
		case "domingo":
			alert("¡Buen finde!");
			break;
		default:
			alert("Dia no válido");
	}
}
