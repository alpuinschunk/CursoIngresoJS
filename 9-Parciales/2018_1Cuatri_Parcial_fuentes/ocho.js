function mostrar()
{
	/*Bienvenidos. 
	Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 
	(validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
	a) La cantidad de números pares. 
	b) La cantidad de números impares. 
	c) La cantidad de ceros. 
	d) El promedio de todos los números positivos ingresados. 
	e) La suma de todos los números negativos. 
	f) El número y la letra del máximo y el mínimo.

	Testeo con los siguientes datos 
	( d , -150(mal) , -50(bien)) 
	( z , 0) 
	( g , 20) 
	( a , 150(mal) , 0(bien)) 
	( b , 3) 
	( k , 7)*/

	var letra;
	var numero;
	var respuesta;
	var contPares;
	var contImpares;
	var contCeros;
	var positivos;
	var sumaPositivos;
	var contPositivos;
	var negativos;
	var sumaNegativos;
	var contador;

	respuesta='si';
	contPares=0;
	contImpares=0;
	contCeros=0;
	contPositivos=0;
	sumaNegativos=0;
	sumaPositivos=0;
	contador=0;



	while(respuesta=='si')
	{
		contador++;
		letra=prompt("Ingrese una letra");
		numero=parseInt(prompt("Ingrese un número entre el -100 y 100"));

		while(numero<-100||numero>100)
		{
			numero=parseInt(prompt("Error, reingrese un número entre el -100 y 100"));
		}
		if(numero%2==0)
		{
			contPares++;
		}
		else
		{
			contImpares++;
		}
		if(numero==0)
		{
			contCeros++;
		}//hasta aca esta bien.
		if(numero>0)
		{
			positivos=numero;
			sumaPositivos=sumaPositivos+positivos;
			contPositivos++;
		}
		else
		{
			negativos=numero;
			sumaNegativos=sumaNegativos+negativos;
		}
		if(contador==1)
		{
			numeroMayor=numero;
			letraNumMayor=letra;
			numeroMenor=numero;
			letraNumMenor=letra
		}
		else
		{
			if (numero>numeroMayor)
			{
				numeroMayor=numero;
				letraNumMayor=letra;
			}
			if(numero<numeroMenor)
			{
				numeroMenor=numero;
				letraNumMenor=letra;
			}
		}
		respuesta=prompt("¿Desea continuar? si/no");
	}
	promedioPositivos=sumaPositivos/contPositivos;

	document.write("<br>La cantidad de números pares es "+contPares); 
	document.write("<br>La cantidad de números impares es "+contImpares); 
	document.write("<br> La cantidad de ceros es "+contCeros);
	document.write("<br>El promedio de todos los números positivos ingresados es "+promedioPositivos); 
	document.write("<br>La suma de todos los números negativos es "+sumaNegativos);
	document.write("<br>El número del máximo es "+numeroMayor+" y su letra es "+letraNumMayor);
	document.write("<br> El numero mínimo es "+numeroMenor+" y su letra es "+letraNumMenor);
}
