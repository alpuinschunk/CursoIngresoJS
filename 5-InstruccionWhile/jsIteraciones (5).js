function mostrar()
{

	var sexo = prompt("Ingrese f ó m.");
	sexo= sexo.toLowerCase(); 

	//para pasar a mayuscula: toUpperCase()


	while(!(sexo=="f"||sexo=="m"))
	{
		sexo = prompt("Error. Reingrese f ó m.");
		sexo= sexo.toLowerCase();
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN