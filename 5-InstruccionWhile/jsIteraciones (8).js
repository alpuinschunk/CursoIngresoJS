function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var numero;
	var respuesta;

	contador=0;
	positivo=0;
	negativo=1;
	respuesta='si';
	
	while(respuesta!="n")
	{
		contador=contador+1;
		numero=prompt("Ingrese un numero #"+contador);
		numero=parseInt(numero);
		
		respuesta=prompt("¿Desea seguir ingresando números?: (si/n)");
	}

	negativo=negativo*numero;
	positivo=positivo+numero;
	//corregir: usar if 
	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN