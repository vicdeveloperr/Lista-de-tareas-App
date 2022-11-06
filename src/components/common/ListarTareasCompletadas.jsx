import ItemTarea from "./ItemTarea"

function ListarTareasCompletadas({ desabilitado, listaTareasCompletadas, checkeado, estadoComponent, actualizadorEstadoComponent }) {
	let cargarTareas = listaTareasCompletadas;
	var Listado = cargarTareas.map((tarea, index) => {
		return (
			<ItemTarea estadoComponent={estadoComponent} actualizadorEstadoComponent={actualizadorEstadoComponent} tarea={tarea} key={tarea + index} desabilitado={desabilitado} checkeado={checkeado} />
		);
	});
	return Listado
}

export default ListarTareasCompletadas