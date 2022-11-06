export default function verificarTareasGuardadas() {
	if(localStorage.getItem('tareas') == null) {
		localStorage.setItem('tareas', JSON.stringify([]));
		localStorage.setItem('tareasCompletadas', JSON.stringify([]));
	}
}