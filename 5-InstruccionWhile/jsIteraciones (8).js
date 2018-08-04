function mostrar()
{

	var positivos;
	var contador;
	var numero;
	var respuesta;
	var negativos;

	negativos=1
	positivos=0;
	contador=0;
	respuesta='si';

	while(respuesta=='si')
	{
		contador++;
		numero=parseInt(prompt("Ingrese un numero"));

		if(numero>0)
		{
			positivos=positivos+numero;
		}
		else
		{
			negativos=negativos*numero;
		}

		respuesta=prompt("¿Desea seguir ingresando numeros? si/no");
	}

	document.getElementById('suma').value=positivos;
	document.getElementById('producto').value=negativos;

}//FIN DE LA FUNCIÓN