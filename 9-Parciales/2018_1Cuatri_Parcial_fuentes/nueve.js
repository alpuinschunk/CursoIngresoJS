function mostrar()
{
	/*Bienvenidos. 
	Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 
	(validar), 
	la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el 
	ingreso por document.write: 
	a) La cantidad de temperaturas pares. 
	b) La marca del producto más pesado 
	c) La cantidad de productos que se conservan a menos de 0 grados. 
	d) El promedio del peso de todos los productos.	
	f) El peso máximo y el mínimo.

	Testeo con los siguientes valores 
	(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
	(m=teem;p = 10; t =0 ) 
	(m=llut;p = 150(mal), 15(bien); t =-13 ) 
	(m=fpy;p = 45; t =-12 )*/

	var marca;
	var peso;
	var temperatura;

	var contador;
	var contTemperaturaPar;
	var marcaPesada;
	var contMenorTemperatura;
	var promedioPeso;
	var marcaMayorPeso
	var pesoMayor;
	var pesoMenor;
	var flag;
	var respuesta;
	var sumaPeso;

	sumaPeso=0;
	respuesta='si';
	flag=0;
	contador=0;
	contTemperaturaPar=0;
	contMenorTemperatura=0;
	contPeso=0;

	while(respuesta=='si')
	{
		contador++
		marca=prompt("Ingrese la marca del producto #"+contador);
		peso=parseInt(prompt("Ingrese el peso del producto"));

		while(peso<1||peso>100)
		{
			peso=parseInt(prompt("Error. Ingrese un peso entre 1 y 100"));
		}
		temperatura=parseInt(prompt("Ingrese la temperatura. #"+contador));
		while(temperatura<-30||temperatura>30)
		{
			temperatura=parseInt(prompt("Error. Ingrese una temperatura entre -30 y 30"));
		}
		if (temperatura%2==0)
		{
			contTemperaturaPar++;
		}
		if(peso>pesoMayor||flag==0)
		{
			contPeso++;
			pesoMayor=peso;
			marcaMayorPeso=marca;
		}
		if(peso<pesoMenor||flag==0)
		{
			pesoMenor=peso;
			flag=1
		}
		if(temperatura<0)
		{
			contMenorTemperatura++;
		}
		
		
		if(peso<sumaPeso||peso>sumaPeso)
		{
			sumaPeso=sumaPeso+peso;
		}
		respuesta=prompt("¿Desea continuar? si/no");
	}
	promedioPeso=sumaPeso/contador;

	document.write("<br> La cantidad de temperaturas pares es "+contTemperaturaPar);
	document.write("<br> La marca del producto más pesado es "+marcaMayorPeso);
	document.write("<br> La cantidad de productos que se conservan a menos de 0 grados es "+contMenorTemperatura); 
	document.write("<br> El promedio del peso de todos los productos es "+ promedioPeso);	
	document.write("<br> El peso máximo es "+pesoMayor+" y el mínimo es "+pesoMenor);


}
