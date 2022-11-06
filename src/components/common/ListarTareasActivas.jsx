import ItemTarea from "./ItemTarea"

function ListarTareasActivas({ tareas, actualizadorTareas, tareasCompletadas }) {
	let cargarTareas = tareas;
	var Listado = cargarTareas.map((tarea, index) => {
		return (
			<ItemTarea tarea={tarea} key={tarea + index} tareasActivas={tareas} actualizadorTareas={actualizadorTareas} tareasCompletadas={tareasCompletadas} />
		);
	});
	return Listado
}

export default ListarTareasActivas