function mostrar()
{
	/*Bienvenidos. 
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser 
entre 1 y 1000 y la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al 
terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares.  listo
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados.  listo
d) El promedio del peso de todos los animales.	listo
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/

	var nombre;
	var peso;
	var temperatura;
	var respuesta;
	var contador;
	var cantTemperaturaPar;
	var cantAnimalesBajoCero;
	var acumuladorPeso;
	var pesoMayorBajoCero;
	var pesoMenorBajoCero;
	var masPesado;
	var masPesadoNombre;
	var masPesadoTemp;

	respuesta='si';
	contador=0;
	cantTemperaturaPar=0;
	cantAnimalesBajoCero=0;
	acumuladorPeso=0;


	while(respuesta=='si')
	{
		contador++;
		nombre=prompt("Ingrese el nombre del animal");

		peso=prompt("Ingrese el peso del animal");
		peso=parseInt(peso);

		while(peso<1||peso>1000)
		{
			peso=prompt("Peso invalido. Reingrese el peso del animal");
			peso=parseInt(peso);
		}

		temperatura=prompt("Ingrese la temperatura del hábitat");
		temperatura=parseInt(temperatura);

		while(temperatura<-30||temperatura>30)
		{
			temperatura=prompt("Temperatura invalida. Reingrese la temperatura del hábitat");
			temperatura=parseInt(temperatura);
		}

		if(temperatura%2==0)
		{
			cantTemperaturaPar++;
		}

		if(contador==1)
		{
			masPesado=peso;
			masPesadoNombre=nombre;
			masPesadoTemp=temperatura;
		}
		else
		{
			if (peso>masPesado)
			{
				masPesado=peso;
				masPesadoNombre=nombre;
				masPesadoTemp=temperatura;
			}
		}

		if(temperatura<0)
		{
			cantAnimalesBajoCero++;

			if(cantAnimalesBajoCero==1)
			{
				pesoMenorBajoCero=peso;
				pesoMayorBajoCero=peso;
			}
			else
			{
				if(peso<pesoMenorBajoCero)
				{
					pesoMenorBajoCero=peso;
				}
				if(peso>pesoMayorBajoCero)
				{
					pesoMayorBajoCero=peso;
				}
			}
		}


		acumuladorPeso=acumuladorPeso+peso;
		respuesta=prompt("¿Desea continuar ingresando? (si/no)");
		respuesta=respuesta.toLowerCase();
	}
	promedio=acumuladorPeso/contador;

	document.write("<br> La cantidad de temperaturas pares es "+cantTemperaturaPar);
	document.write("<br> El nombre del animal más pesado es "+masPesadoNombre+" y su temperatura es "+masPesadoTemp);
	document.write("<br> La cantidad de animales que viven a menos de 0 grados es "+cantAnimalesBajoCero);
	document.write("<br> El promedio del peso de todos los animales es "+promedio);
	document.write("<br> El peso máximo de todos los animales cuyas temperaturas sean bajo cero es "+pesoMayorBajoCero+" y el mínimo es "+pesoMenorBajoCero);
}
