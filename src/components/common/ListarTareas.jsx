import ItemTarea from "./ItemTarea"
import ListarTareasActivas from "./ListarTareasActivas"
import ListarTareasCompletadas from "./ListarTareasCompletadas"
import leerTareasActivas from "../../utils/leerTareasActivas"
import leerTareasCompletadas from "../../utils/leerTareasCompletadas"

export default function ListarTareas({ tareas, actualizarTareas, estadoTarea, actualizadorEstadoComponent, estadoComponent }) {
	let listaTareasActivas = leerTareasActivas(); 
	let listaTareasCompletadas = leerTareasCompletadas();  
	let tareasTachadas = [];

	if (estadoTarea == "todo") {
		return (
			<div className="mt-5">
				<ListarTareasActivas tareas={listaTareasActivas} actualizadorTareas={actualizarTareas} tareasCompletadas={listaTareasCompletadas} />
				<ListarTareasCompletadas listaTareasCompletadas={listaTareasCompletadas} desabilitado={true} /> 
			</div>
		);
	}else if(estadoTarea == "activo") {
		return (
			<div className="mt-5">
				<ListarTareasActivas tareas={listaTareasActivas} tareas={listaTareasActivas} actualizadorTareas={actualizarTareas} tareasCompletadas={listaTareasCompletadas} /> 
			</div>
		);
	}else if(estadoTarea == "completado") {
		return (
			<div className="mt-5">
				<ListarTareasCompletadas estadoComponent={estadoComponent} actualizadorEstadoComponent={actualizadorEstadoComponent} desabilitado={false} listaTareasCompletadas={listaTareasCompletadas} checkeado={true} /> 
			</div>
		);
	}

}