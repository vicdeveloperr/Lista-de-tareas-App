import ListarTareas from "../common/ListarTareas"
import { useState } from "react"
import leerTareasCompletadas from "../../utils/leerTareasCompletadas"
import actualizarTareasCompletadasGuardadas from "../../utils/actualizarTareasCompletadasGuardadas"
import { BrowserRouter } from "react-router-dom"
import App from "../../const/App"
import root from "../../main"

function EliminarTareasCompletadas() {
	const [tareasCompletadasSeleccionadas, actualizarTareasCompletadasSeleccionadas] = useState([]);
	return (
		<>
			<ListarTareas estadoTarea="completado" estadoComponent={tareasCompletadasSeleccionadas} actualizadorEstadoComponent={actualizarTareasCompletadasSeleccionadas} />
			<button 
				className="p-2 bg-[#ff5959] rounded-xl text-white mt-1 w-full opacity-1 hover:opacity-90 sm:w-max mt-5 sm:float-right"
				onClick={eliminarTareasSeleccionadas}
				>
				<i className="fa-sharp fa-solid fa-trash mr-2"></i>Eliminar
			</button>
		</>
	);

	function eliminarTareasSeleccionadas() {
		let cargarTareasCompletadasGuardadas = leerTareasCompletadas();
		
		tareasCompletadasSeleccionadas.map(
			
			(tareaCompletadaSeleccionada, index) => {
				
				cargarTareasCompletadasGuardadas.map(
					(tareaCompletadaGuardada, index2) => {
						if(tareaCompletadaGuardada == tareaCompletadaSeleccionada) {
							cargarTareasCompletadasGuardadas.splice(index2, 1);
						}	
					}
				);

			}

		);

		actualizarTareasCompletadasGuardadas(cargarTareasCompletadasGuardadas);
		root.render(
		  <BrowserRouter>
		  	<App />
		  </BrowserRouter>
		);

	}
}

export default EliminarTareasCompletadas;