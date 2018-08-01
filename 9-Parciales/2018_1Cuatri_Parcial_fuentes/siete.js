function mostrar()
{
	var nombre;
	var sexo;
	var nota;
	var promedio;
	var contador;
	var contadorMujeres;
	var contadorHombres;
	var notaMenor;
	var sexoNotaMenor;
	var contadorHombresAprob;

	contador=0;
	contadorHombres=0;
	contadorMujeres=0;
	contadorHombresAprob=0;

	while(contador<5)
	{
		contador++;

		sexo=prompt("Ingrese su sexo (f o m):");
		nota=parseInt(prompt("Ingrese su nota"));

		while(nota>10||nota<0)
		{
			nota=prompt("Error. Reingrese su nota");
		}
		if(nota<notaMenor||flag==0)
		{
			notaMenor=nota;
			sexoNotaMenor=sexo;
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
		if()

		if(sexo=='m'&&contadorHombres=1&&nota>=6)
		{
			contadorHombresAprob++;
		}

	}
}
