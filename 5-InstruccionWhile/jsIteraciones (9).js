function mostrar()
{

	var contador;
	// declarar variables
	var mayor;
	var menor;
	var respuesta;
	//var bandera;

	contador=0;
	respuesta="si";
	//bandera=0;

	while(respuesta!='n')
	{
		contador++;
		numero=prompt("Ingrese un numero #"+contador);
		numero=parseInt(numero);

		if(contador==1)
		{
			menor=numero;
			mayor=numero;
			//bandera=1
		}
		else
		{
			if(numero<menor)
			{
				menor=numero;
			}

			if(numero>mayor)
			{
				mayor=numero;
			}
			respuesta=prompt("¿Desea seguir ingresando números?: (si/n)")
		}
	}
	
	document.getElementById('maximo').value=mayor;
	document.getElementById('minimo').value=menor;

//"ctrl d": selecciona una palabra para modificarla




}//FIN DE LA FUNCIÓN