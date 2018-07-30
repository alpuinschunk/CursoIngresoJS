function mostrar()
{
	var numeroA;
	var numeroB;

	numeroA=prompt("Ingrese el primer número:","Número");
	numeroB=prompt("Ingrese el segundo número:","Número");

	if(numeroA==numeroB)
	{
		alert(numeroA+numeroB);
	}

	else
	{
		numeroA=parseInt(numeroA);
		numeroB=parseInt(numeroB);
		
		if(numeroA>numeroB)
		{
			alert(numeroA-numeroB);
		}
		else
		{
			if(numeroA<numeroB)
			{
				alert(numeroA+numeroB);
			}
			else if ((numeroA+numeroB)>10)
			{
				alert(numeroA+numeroB);
				alert("La suma es "+(numeroA+numeroB)+" y es mayor a 10.");
			}
		}
	}
}
