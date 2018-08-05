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
	 var contPar;
	 var contImpar;
	 var contCeros;
	 var promedioPositivos;
	 var sumaNegativos;	
	 var respuesta;
	 var negativos;
	 var positivos;
	 var contPositivos;
	 var numeroMenor;
	 var numeroMayor;
	 var letraNumeroMayor;
	 var letraNumeroMenor;

	 numeroMayor=100;
	 numeroMenor=-100;
	 contPositivos=0;
	 contador=0;
	 contPar=0;
	 contImpar=0;
	 contCeros=0;
	 respuesta='si';

	 while(respuesta=='si')
	 {
	 	contador++;
	 	letra=prompt("Ingrese una letra");
	 	letra=letra.toLowerCase();

	 	numero=parseInt(prompt("Ingrese un numero entre -100 y 100 #"+contador));

	 	while(numero<-100||numero>100);
	 	{
	 		numero=parseInt(prompt("Error. Reingrese un numero entre -100 y 100"));
	 	}
	 	if(numero%2==0)
	 	{
	 		contPar++;
	 	}
	 	else 
	 	{
	 		contImpar++;
	 	}
	 	if(numero==0)
	 	{
	 		contCeros++;
	 	}
	 	if(numero>0)
	 	{
	 		positivos=numero;
	 		contPositivos++;
	 	}
	 	else
	 	{
	 		negativos=numero;
	 		sumaNegativos=negativos+numero;
	 	}
	 	if(numero>numeroMayor)
	 	{
	 		numeroMayor=numero;
	 		letraNumeroMayor=letra;
	 	}
	 	if(numero<numeroMenor)
	 	{
	 		numeroMenor=numero;
	 		letraNumeroMenor=letra;
	 	}
	 	respuesta=prompt("¿Desea seguir ingresando?");
	 }
	 promedioPositivos=positivos/contPositivos;

	document.write("<br> La cantidad de números pares es "+contPar); 
	document.write("<br> La cantidad de números impares es "+contImpar); 
	document.write("<br> La cantidad de ceros es "+contCeros); 
	document.write("<br> El promedio de todos los números positivos ingresados es "+promedioPositivos); 
	document.write("<br> La suma de todos los números negativos es "+sumaNegativos);
	document.write("<br> El número y la letra del máximo es"+numeroMayor+" y del minimo es "+numeroMenor);
}
