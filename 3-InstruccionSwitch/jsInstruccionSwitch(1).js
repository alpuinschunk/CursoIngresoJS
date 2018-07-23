function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	console.log(mesDelAño);

	switch(mesDelAño)
	{
		case "Enero":
			alert("¡Que comiences bien el año!");
			break;

		case "Marzo":
			alert("¡A clases!");
			break;

		case "Julio":
			alert("¡Se vienen las vacaciones!");
			break;

		case "Diciembre":
			alert("¡Felices Fiestas!");
			break;
	}

	/*if(mes=="Enero")
	{

	}
	if(mes=="Febrero")
	{
	Para evitar el if
	}
	switch(mes)
	{
		case "Febrero":
			alert("verano");
			break;
		case "Enero":
			alert("verano");
			break;
	}*/




}//FIN DE LA FUNCIÓN