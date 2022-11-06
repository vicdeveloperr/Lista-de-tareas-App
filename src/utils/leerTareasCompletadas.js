export default function leerTareasCompletadas() {
	if(localStorage.getItem('tareasCompletadas') == null) {
		localStorage.setItem('tareasCompletadas', JSON.stringify([]));
		let cargarTareasCompletadas = localStorage.getItem('tareasCompletadas');
		return JSON.parse(cargarTareasCompletadas);
	}else {
		let cargarTareasCompletadas = localStorage.getItem('tareasCompletadas');
		return JSON.parse(cargarTareasCompletadas);
	}
}