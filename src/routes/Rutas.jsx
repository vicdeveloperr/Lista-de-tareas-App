import { Route, Routes, Navigate } from "react-router-dom"
import ConfigurarTareas from "../components/layouts/ConfigurarTareas"
import EliminarTareasCompletadas from "../components/layouts/EliminarTareasCompletadas"

function Rutas() {
	return (
		<Routes>
			<Route path="/" element={
				<ConfigurarTareas estadoTarea="todo" />
			} />
			<Route path="/activo" element={
				<ConfigurarTareas estadoTarea="activo" />
			} />
			<Route path="/completado" element={
				<EliminarTareasCompletadas />					
			} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}

export default Rutas