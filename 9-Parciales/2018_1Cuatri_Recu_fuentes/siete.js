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
	var nombre;
	var edad;
	var sexo;
	var contador;
	var cantidad;
	var contadorMayoresDeEdad;
	var contadorMenoresDeEdad;
	var contadorMujeres;
	var contadorHombres;

	contador=0;

	while(contador<3)
	{
		contador++;
		nombre=prompt("Ingrese su nombre");
		sexo=prompt("Ingrese su sexo");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Error. Ingrese su sexo");
			
		}

		


		edad=parseInt(prompt("Ingrese su edad"));
		while(edad<0||edad>100)
		{
			edad=parseInt(prompt("Error. Ingrese su edad"));
		
		//analisis

			if (edad>18)
			{
				contadorMayoresDeEdad++;
			}

			if(edad<18)
			{
				contadorMenoresDeEdad++;
			}	
		}
		if(sexo=="f")
		{
			contadorMujeres++;
		}
		if(sexo=="m")
		{
			contadorHombres++;
		}
	}
	//mas acciones
	//promedio



	//mostrar
	document.write("<br> La cantidad de mayores es: "+contadorMayoresDeEdad);
	document.write("<br> La cantidad de manores es: "+contadorMenoresDeEdad);


}
