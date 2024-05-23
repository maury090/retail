const formulario = document.getElementById('registro');
const inputs = document.querySelectorAll('#registro input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	clave: /^.{6}$/, // 6 digitos.
	clave2: /^.{6}$/, // 6 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos = {
	nombre : false,
	apellido : false,
	correo : false,
	clave : false
}
const validarRegistro = (e) => {
	switch (e.target.name){
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;

		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');	
		break;

		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;

		case "clave":
			validarCampo(expresiones.clave, e.target, 'clave');
		break;

		case "clave2":
			validarCampo(expresiones.clave2, e.target, 'clave2');
		break;
	}
}
const validarCampo =(expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo_incorrecto')
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo_correcto')
		document.querySelector(`#grupo_${campo} .error_registro`).classList.remove('error_registro-activo')
		campos[campo] = true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo_incorrecto')
		document.querySelector(`#grupo_${campo} .error_registro`).classList.add('error_registro-activo')
		campos[campo] = false;
	}
}
const validarClave2 =()=>{
	const inputClave1 = document.getElementById('clave')
	const inputClave2 = document.getElementById('clave2')

	if(inputClave1.value !== inputClave2.value){
		document.getElementById(`grupo_clave2}`).classList.add('formulario_grupo_incorrecto')
		document.getElementById(`grupo_clave2`).classList.remove('formulario_grupo_correcto')
		document.querySelector(`#grupo_clave2} .error_registro`).classList.add('error_registro-activo')
		campos[clave]=false;
	} else {
		document.getElementById(`grupo_clave2}`).classList.remove('formulario_grupo_incorrecto')
		document.querySelector(`#grupo_clave2} .error_registro`).classList.remove('error_registro-activo')
		campos[clave]=true;
	}
}
inputs.forEach((input) => {
	input.addEventListener('keyup',validarRegistro);
	input.addEventListener('blur',validarRegistro);
});
registro.addEventListener('submit', (e) => {
	e.preventDafault();

	if (campos.nombre && campos.apellido && campos.correo && campos.clave){
		registro.reset();
	}
});