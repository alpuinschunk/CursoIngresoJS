/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una 
carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas)
 y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var legajo;
 	var nacionalidad;

 	edad=parseInt(prompt("Ingrese su edad"));

 	while(edad<18||edad>90)
 	{
 		edad=parseInt(prompt("Edad incorrecta, por favor reingrese su edad"));
 	}
	
	sexo=prompt("Ingrese su sexo (f o m");
 	sexo=sexo.toUpperCase();
 	
 	while(!(sexo=='m'&&sexo=='f'))
 	{
 		sexo=prompt("Sexo no valido, reingrese su sexo (f o m)")
 	}
	estadoCivil=prompt("Ingrese su estado civil: soltero/casado/divorciado/viudo");
	estadoCivil=estadoCivil.toUpperCase();
 	
 	switch(estadoCivil)
 	{
 		case 'Soltero':
 			break;
 		case 'Soltera':
 			break;
 		case 'Casado':
 			break;
 		case 'Casada':
 			break;
 		case 'Divorciado':
 			break;
 		case 'Divorciada':
 			break;
 		case 'Viudo':
 			break;
 		case 'Viuda':
 			break;
 		default:
 			while(estadoCivil!=estadoCivil)
 			{
 				estadoCivil=prompt('No valido. Reingrese estado civil');
 			}
 	}
	
	sueldoBruto=parseInt(prompt("Ingrese su sueldo bruto"));
 	
 	while(sueldoBruto<8000)
 	{
 		sueldoBruto=parseInt(prompt("Sueldo no valido. Reingrese un sueldo no menor a 8000"));
 	}
 	
 	legajo=parseInt(prompt("Ingrese un numero de cuatro cifras sin ceros a la izquierda"));

 	while(legajo>9999||legajo<1000)
 	{
 		legajo=parseInt(prompt("Incorrecto, reingrese legajo"));
 	}

 	nacionalidad=prompt("Ingrese su nacionalidad. 'A' para argentinos. 'E' para extranjeros. 'N' para nacionalizados.");
	
	while(!(nacionalidad=='A'||nacionalidad=='E'||nacionalidad=='N'))
	{
		nacionalidad=prompt("Incorrecto. Reingrese nacionalidad A, E o N");
	}

	if(nacionalidad=='A')
	{
		 nacionalidad="Argentino";
	}
	else
	{
		if (nacionalidad=='E') 
		{
			nacionalidad='Extranjero';
		}
	 	else
	 	{
	 		if (nacionalidad=='N')
	 		{
	 			nacionalidad='Nacionazado';
	 		}
	 	}
	}

 	document.getElementById('Edad').value=edad;
 	document.getElementById('Sexo').value=sexo;
 	document.getElementById('EstadoCivil').value=estadoCivil;
 	document.getElementById('Sueldo').value=sueldoBruto;
 	document.getElementById('Legajo').value=legajo;
 	document.getElementById('Nacionalidad').value=nacionalidad;


}