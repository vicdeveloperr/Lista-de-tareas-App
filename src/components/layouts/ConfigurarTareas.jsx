import { useState } from "react"
import App from '../../const/App'
import { BrowserRouter } from "react-router-dom"
import root from "../../main"
import ListarTareas from "../common/ListarTareas"
import leerTareasActivas from "../../utils/leerTareasActivas"
import actualizarTareasActivasGuardadas from "../../utils/actualizarTareasActivasGuardadas"

function ConfigurarTareas({ estadoTarea }) {
	const [valorInput, actualizarValorInput] = useState("");
	var leerTareas = leerTareasActivas();
	actualizarTareasActivasGuardadas(leerTareas);
	const [tareas, actualizarTareas] = useState(leerTareas);

	return (
		<>
			<form className="mt-5 sm:flex" onSubmit={agregarTarea}>
				<input 
					id="inputDetallesTarea"
					placeholder="Agregar detalles" 
					className="w-full border-[1px] border-rojo p-2 rounded-xl focus:outline-[1px] outline-azulClaro" 
					onChange={inputValueChange} 
					value={valorInput}/>
				<button 
					className="p-2 bg-azulClaro rounded-xl text-white mt-1 w-full opacity-1 hover:opacity-90 sm:w-max sm:p-3 sm:ml-3"
					>
					Agregar
				</button>
			</form>
			<ListarTareas tareas={tareas} actualizarTareas={actualizarTareas} estadoTarea={estadoTarea}  />
		</>
	);

	function agregarTarea(e) {
		e.preventDefault();
		let tareasActivas = leerTareasActivas();
		// Actualizamos las tareas
		let verificarTareaRepetida = tareasActivas.find(tareaActiva => valorInput == tareaActiva);
		if(!verificarTareaRepetida) {
			leerTareas.push(valorInput);
			actualizarTareasActivasGuardadas(leerTareas);
			actualizarTareas(leerTareas);
			actualizarValorInput("");
			root.render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
			);
		}
	}

	function inputValueChange(e) {
		actualizarValorInput(e.target.value);
	}

}


export default ConfigurarTareas