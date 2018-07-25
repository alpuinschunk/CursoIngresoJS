function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;

	while(contador)
	{
		numero=parseInt(prompt("Ingrese un número"));

		acumulador=acumulador+numero;

		contador=contador+1;
	}


	promedio=acumulador/contador;

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;
}//FIN DE LA FUNCIÓN