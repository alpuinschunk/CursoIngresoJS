function mostrar()
{
	var numero;
	var contador;
	var respuesta;
	var negativos;
	var positivos;
	var contNegativos;
	var contPositivos;
	var contCeros;
	var contPares;
	var sumaNegativos;
	var sumaPositivos;
	var promedioNegativos;
	var promedioPositivos;

	contador=0;
	respuesta='si';
	negativos=0;
	positivos=0;
	contPositivos=0;
	contNegativos=0;
	contCeros=0;
	contPares=0;


	while(respuesta=='si')
	{
		contador++;
		numero=parseInt(prompt("Ingrese un numero #"+contador));

		if(numero<0)
		{
			negativos= negativos + numero;
			sumaNegativos=negativos;
			contNegativos++;
			promedioNegativos=negativos/contNegativos;
		}
		else
		{
			positivos=positivos + numero;
			sumaPositivos=positivos;
			contPositivos++;
			promedioPositivos=positivos/contPositivos;
		}

		if(numero % 2==0)
		{
			contPares++;
		}

		if(numero==0)
		{
			contCeros++;
		}

		respuesta=prompt("Desea seguir ingresando numeros? si/no");
	}

	document.write("<br> La suma de los positivos es "+sumaPositivos);
	document.write("<br> La suma de los negativos es "+sumaNegativos);
	document.write("<br> La cantidad de negativos es "+contNegativos);
	document.write("<br> La cantidad de positivos es "+contPositivos);
	document.write("<br> La cantidad de ceros es "+contCeros);
	document.write("<br> La cantidad de numeros pares es "+contPares);
	document.write("<br> EL promedio de los positivos es "+promedioPositivos);
	document.write("<br> El promedio de los negativos es "+promedioNegativos);

/*prueba de escritorio
3 2 -3 -2 -1 
suma p : 5 
suma n: -6 
cant n: 3
cant p: 2
prom p: 2.5 
prom n: -2 
cant 0: 0
cant pares: 2*/

}//FIN DE LA FUNCIÓN