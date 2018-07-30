function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var promedio;

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta!="n")
	{
		contador=contador+1;
		numero=prompt("Ingrese un numero #"+contador);
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		respuesta=prompt("¿Desea seguir ingresando números?: (si/n)");
	}

	promedio=acumulador/contador;
	document.getElementById('suma').value="La suma es "+acumulador;
	document.getElementById('promedio').value="El promedio es "+promedio;

	/*
	while()
	{
		numero=parseInt(prompt("Ingrese un número"));

		acumulador=acumulador+numero;

		contador=contador+1;

		respuesta=prompt("¿Desea seguir ingresando números?");

	}


	promedio=acumulador/contador;

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;
	*/

}//FIN DE LA FUNCIÓN