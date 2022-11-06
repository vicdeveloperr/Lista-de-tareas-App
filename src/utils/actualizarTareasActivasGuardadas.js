export default function actualizarTareasActivasGuardadas(actualizacion) {
	localStorage.tareasActivas = JSON.stringify(actualizacion);
}