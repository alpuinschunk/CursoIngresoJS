/*
Ingreso: 

Maria F 15
Jose M 33
Pepe M 81

mostrar: 
	Cantidad
		1- De mayores de edad=2
		2- De menores de edad=1
		3- Mujeres=1
		4- Hombres=2
		5- Nombre del mayor edad= pepe
		6- Nombre del menor edad= maria
		7- Nombre del hombre menor de edad=jose

*/
function mostrar()
{
	/*
	var nombre;
	var edad;
	var sexo;
	var contador;
	var contadorMayoresDeEdad;
	var contadorMenoresDeEdad;
	var contadorMujeres;
	var contadorHombres;

	contador=0;
	contadorMujeres=0;
	contadorHombres=0;
	contadorMenoresDeEdad=0;
	contadorMayoresDeEdad=0;

	while(contador<3)
	{
		contador++;
		nombre=prompt("Ingrese su nombre");
		sexo=prompt("Ingrese su sexo");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Error. Ingrese su sexo");
			if(sexo=="f")
			{
				contadorMujeres++;
			}
			if(sexo=="m")
			{
				contadorHombres++;
			}
		}

		edad=parseInt(prompt("Ingrese su edad"));
		while(edad<0||edad>100)
		{
			edad=parseInt(prompt("Error. Ingrese su edad"));
		
		//analisis

			if (edad>17)
			{
				contadorMayoresDeEdad++;
			}

			else
			{
				contadorMenoresDeEdad++;
			}
		}
	}
	//mas acciones
	//promedio



	//mostrar
	document.write("<br> La cantidad de mujeres es: "+contadorMujeres);
	document.write("<br> La cantidad de hombres es: "+contadorHombres);
	document.write("<br> La cantidad de mayores es: "+contadorMayoresDeEdad);
	document.write("<br> La cantidad de manores es: "+contadorMenoresDeEdad);
*/
	var nombre;
	var edad;
	var sexo;
	var contador=0;

	var contadorMayoresDeEdad=0;
	var contadorMenoresDeEdad=0;
	var contadorMujeres=0;
	var contadorHombres=0;

	var mayorEdad;
	var menorEdad;
	var edadHombreMenor;

	var nombreMayor;
	var nombreMenor;
	var nombreHombreMenor;
	var flag=0;

	while(contador<3)
	{
		contador++;

		nombre=prompt("Ingrese nombre");
		edad=parseInt(prompt("Ingrese edad"));
		sexo=prompt("Ingrese sexo: f o m");
		sexo=sexo.toLowerCase()
		

		while(edad<0||edad>100||edad==NaN)
		{
			edad=parseInt(prompt("Error. Ingrese su edad"));

			if(edad<17)
			{
				contadorMenoresDeEdad++;
			}
			else
			{
				contadorMayoresDeEdad++;
			}
		}	
		
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Error. Ingrese su sexo");
		}
		if(sexo=='m')
		{
			contadorHombres++;
		}
		else
		{
			contadorMujeres++;
		}
		if(edad>mayorEdad||flag==0)
		{
			mayorEdad=edad;
			nombreMayor=nombre;
		}

		if(edad<menorEdad||flag==0)
		{
			menorEdad=edad;
			nombreMenor=nombre;
			flag=1
		}

		if(sexo=='m'&&contadorHombres==1)
		{
			nombreHombreMenor=nombre;
			edadHombreMenor=edad;
		}
	}

	//mostrar
	document.write("<br> La cantidad de mayores de edad es: "+contadorMayoresDeEdad);
	document.write("<br> La cantidad de manores de edad es: "+contadorMenoresDeEdad);
	document.write("<br> La cantidad de hombres es: "+contadorHombres);
	document.write("<br> La cantidad de mujeres es: "+contadorMujeres);
	document.write("<br> El nombre de la persona con mayor edad es: "+nombreMayor);
	document.write("<br> El nombre de la persona con mayor edad es: "+nombreMenor);
	
	if(contadorHombres==0)
	{
		nombreHombreMenor="No se ingreso ningun hombre";
	}
	document.write("<br> El nombre del hombre menor de edad es: "+nombreHombreMenor);


}
