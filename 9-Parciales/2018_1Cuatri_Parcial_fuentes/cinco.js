function mostrar()
{
	var planetas;

	planetas=prompt("Ingrese un planeta del sistema solar");
	planetas=planetas.toLowerCase();

	switch(planetas)
	{
		case "mercurio":
		case "venus":
			alert("Acá hace más calor");
			break;
		case "tierra":
			alert("Acá vivimos");
			break
		case "marte":
		case "jupiter":
		case "saturno":
		case "neptuno":
		case "urano":
			alert("Acá hace más frio");
			break;
		default:
			alert("Planeta no válido");

	}
}
