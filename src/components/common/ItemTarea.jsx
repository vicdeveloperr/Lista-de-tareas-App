import actualizarTareasActivasGuardadas from "../../utils/actualizarTareasActivasGuardadas"
import actualizarTareasCompletadasGuardadas from "../../utils/actualizarTareasCompletadasGuardadas"
import { useState } from "react"

var tareasCompletadasSeleccionadas = [];
function ItemTarea({ checkeado, desabilitado, tarea, tareasActivas, actualizadorTareas, tareasCompletadas, estadoComponent, actualizadorEstadoComponent }) {
	if(checkeado) {	
		return (
			<div>
				<input 
					type="checkbox"  
					value={tarea} 
					id="listo" 
					onClick={tareaCompletadaSeleccionada}
					/>
				<label htmlFor="listo" className="ml-2 text-md line-through">{tarea}</label>
			</div>
		);
	}else if(desabilitado) {
		return (
			<div>
				<input
					defaultChecked 
					disabled
					type="checkbox"  
					value={tarea} 
					id="listo" 
					/>
				<label htmlFor="listo" className="ml-2 text-md line-through">{tarea}</label>
			</div>
		);
	}else {
		return (
			<div>
				<input
					type="checkbox"  
					value={tarea} 
					onClick={tacharTarea} 
					id="listo" 
					/>
				<label htmlFor="listo" className="ml-2 text-md">{tarea}</label>
			</div>
		);
	}

	function tacharTarea(e) {
		tareasActivas.map((tareaCargada, index) => {
			if(e.target.value == tareaCargada) {
				// Borrar la tarea Completada de la lista de tareas
				let tareaCompletada = tareasActivas.splice(index, 1);
				actualizarTareasActivasGuardadas(tareasActivas);
				actualizadorTareas(tareasActivas);				
				// Agregar tarea completada a la lista de tareas completadas				
				tareasCompletadas.push(tareaCompletada);
				actualizarTareasCompletadasGuardadas(tareasCompletadas);
			}else {
				false;
			}
		});
	}

	function tareaCompletadaSeleccionada(e) {

		if(e.target.checked) {
			tareasCompletadasSeleccionadas.push(e.target.value);
			actualizadorEstadoComponent(tareasCompletadasSeleccionadas);
		}else {
			tareasCompletadasSeleccionadas.map(
				(tareaCompletadaSeleccionada, index) => {
					if(e.target.value == tareaCompletadaSeleccionada) {
						tareasCompletadasSeleccionadas.splice(index, 1);
						actualizadorEstadoComponent(tareasCompletadasSeleccionadas);
					}
				}
			);
		}
	}

};

export default ItemTarea