export default function actualizarTareasCompletadasGuardadas(actualizacion) {
	localStorage.tareasCompletadas = JSON.stringify(actualizacion);
}