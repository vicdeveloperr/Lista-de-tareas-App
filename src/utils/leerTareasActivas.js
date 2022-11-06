export default function leerTareasActivas() {
	if(localStorage.getItem('tareasActivas') == null) {
		localStorage.setItem('tareasActivas', JSON.stringify([]));
		let cargarTareasActivas = localStorage.getItem('tareasActivas');
		return JSON.parse(cargarTareasActivas);
	}else {
		let cargarTareasActivas = localStorage.getItem('tareasActivas');
		return JSON.parse(cargarTareasActivas);
	}
}