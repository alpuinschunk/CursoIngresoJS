/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function mostrar()
{
	var nombre;
	nombre = prompt("Por favor ingrese su nombre","Nombre");
	document.getElementById('elNombre').value=nombre;
}