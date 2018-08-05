function mostrar()
{	/*var nombre;
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
 }*/
	/*Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a- El promedio de las notas totales. 
b- La nota más baja y el sexo de esa persona. 
c- La cantidad de varones que su nota haya sido mayor o igual a 6.*/

	
	var nota;
	var sexo;
	var acumulador;
	var notaMayor;
	var notaMenor;
	var contVarones;
	var sexoNotaMenor;
	var contVaronesaAprobados;
	
	contVaronesaAprobados=0;
	contVarones=0
	notaMenor=10
	acumulador=0;
	
	
	for(var i=0 ; i<5 ; i++)
	{
		nota=parseInt(prompt("Ingrese su nota"));
		sexo=prompt("Ingrese su sexo (f o m)");
		sexo=sexo.toLowerCase();
				
		while(!(nota<=10&&nota>=0))
		{
			nota=parseInt(prompt("Nota invalida, reingrese una nota del 0 al 10"));
		}
		
		while(sexo!='f'&&sexo!='m')
		{
			sexo=prompt("Sexo incorrecto, reingrese su sexo (f o m");
		}
		if(sexo=='m')
		{
			contVarones++;
		}
		if(nota<notaMenor)
		{
			notaMenor=nota;
			sexoNotaMenor=sexo;
		}
		if(sexo=='m'&&nota>=6)
		{
			contVaronesaAprobados++;
		}
			
		acumulador=acumulador+nota;
	}
	promedio=acumulador/5

	alert("El promedio de las notas es "+promedio+". La nota más baja es "+notaMenor+" y es "+sexoNotaMenor+". La cantidad de varones aprobados es "+contVaronesaAprobados+".");
}
