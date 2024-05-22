const formulario = document.getElementById('registro');
const inputs = document.querySelectorAll('#registro input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	clave: /^.{6}$/, // 6 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarRegistro = (e) => {
	switch (e.target.name){
		case "nombre":
			if(expresiones.nombre.test(e.target.value)){

			} else {
				document.getElementById('nombre_usuario').classList.add('error_registro-activo')
			}
		break;

		case "apellido":
			
		break;

		case "rut":
			
		break;

		case "correo":
			
		break;

		case "clave":
			
		break;

		case "clave2":
			
		break;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup',validarRegistro);
	input.addEventListener('blur',validarRegistro);
});
registro.addEventListener('submit', (e) => {
	e.preventDafault();
});
