function mostrar()
{

	var contador;
	//declarar contadores y variables
	var numero;
	var sumaPositivos;
	var sumaNegativos; 
	var respuesta;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var promedioPositivos;

	contador=0;
	sumaPositivos=0;
	sumaNegativos=0; 
	respuesta="si";
	cantidadPositivos=0;
	cantidadNegativos=0;


	while(respuesta!="no")
	{
		contador++;
		numero=prompt("Ingrese un numero #"+contador);
		numero=parseInt(numero);

		if(numero>0)
		{
			sumaPositivos=sumaPositivos+numero;
			cantidadPositivos=contador;
			promedioPositivos=(sumaPositivos*contador)/100;
		}

		if(numero<0)
		{
			sumaNegativos=sumaNegativos+numero;
			cantidadNegativos=contador;
			promedioNegativos=(sumaNegativos*contador)/100;
		}

		if(numero==0)
		{
			cantidadCeros=contador;
		}

		if(numero)








		respuesta=prompt("¿Desea seguir ingresando números?: (si/no)")	}
	}




}//FIN DE LA FUNCIÓN