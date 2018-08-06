function mostrar()
{
	/*Bienvenidos. 
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser 
entre 1 y 1000 y la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al 
terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/

	var nombreAnimal;
	var peso;
	var temperatura;
	var respuesta;

	var cantTemperaturaPar;
	var animalMasPesado;
	var nombreAnimalPesado;
	var	temperaturaAnimalPesado;
	var cantAnimalesBajaTemperatura;
	var bandera;
	var animalMenosPesado;
	var nombreMenosPesado;
	var temperaturaMenosPesado;
	var acumulador;
	var contador;
	var pesoMaximoBajoCero;
	var pesoMinimoBajoCero;


	respuesta='si';
	contador=0;
	cantTemperaturaPar=0;
	cantAnimalesBajaTemperatura=0;
	bandera=0;
	acumulador=0;

	while(respuesta=='si')
	{
		contador++;

		nombreAnimal=prompt("Ingrese el nombre del animal");

		peso=prompt("Ingrese el peso del animal");
		peso=parseInt(peso);

		while(peso<1 || peso>1000)
		{
			peso=prompt("Peso incorrecto. Reingrese el peso del animal");
			peso=parseInt(peso);
		}
		
		temperatura=prompt("Ingrese la temperatura del hábitat");
		temperatura=parseInt(temperatura);

		while(temperatura<-30||temperatura>30)
		{
			temperatura=prompt("Temperatura incorrecta. Reingrese la temperatura del hábitat");
			temperatura=parseInt(temperatura);
		}
		
		if(temperatura%2==0)
		{
			cantTemperaturaPar++;
		}

		if(peso>animalMasPesado||bandera==0)
		{
			animalMasPesado=peso;
			nombreAnimalPesado=nombreAnimal;
			temperaturaAnimalPesado=temperatura;
		}

		if(temperatura<0)
		{
			cantAnimalesBajaTemperatura++;
			
			if(cantAnimalesBajaTemperatura==1)
			{
				pesoMaximoBajoCero=peso;
				pesoMinimoBajoCero=peso;
			}
			else
			{
				if(peso<pesoMinimoBajoCero)
				{
					pesoMinimoBajoCero=peso;
				}
				if(peso>pesoMaximoTempCero)
				{
					pesoMaximoBajoCero=peso;
				}
			}
		}

		acumulador=acumulador+peso;
		respuesta=prompt("¿Desea continuar ingresando datos? (si/no)");
		respuesta=respuesta.toLowerCase();
	}

	promedio=acumulador/contador;

	document.write("<br> La cantidad de temperaturas pares es "+cantTemperaturaPar);
	document.write("<br> El nombre del animal más pesado es "+nombreAnimalPesado+" y su temperatura es "+temperaturaAnimalPesado);
	document.write("<br> La cantidad de animales que viven a menos de 0 grados es "+cantAnimalesBajaTemperatura);
	document.write("<br> El promedio del peso de todos los animales es "+promedio);
	document.write("<br> El peso máximo  de todos los animales cuyas temperaturas sean bajo cero es "+pesoMaximoBajoCero+" y el mínimo es "+pesoMinimoBajoCero);

}
