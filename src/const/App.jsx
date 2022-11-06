import NavLink from "../components/common/NavLink"
import Rutas from "../routes/Rutas"

function App() {
  return (
    <main className="py-5 h-[100vh]">
      <div className="w-11/12 m-auto h-full flex flex-col justify-between max-w-[600px]">
        <header className="text-center">
          <h1 className="font-bold text-4xl mb-5">#todo</h1>
          <nav className="text-gray-800 text-lg border-b-2 border-grisClaro flex justify-around">
            <NavLink to="/" className="pb-[14px] px-3 border-azulClaro">Todo</NavLink>
            <NavLink to="/activo" className="pb-[14px] px-3 border-azulClaro">Activo</NavLink>
            <NavLink to="/completado" className="pb-[14px] px-3 border-azulClaro">Completado</NavLink>
          </nav>
        </header>
        <div className="h-full">
          <Rutas />
        </div>
        <footer>
          <h4 className="text-grisClaro text-center">Creado por <span className="font-bold underline">Victor Ayala</span></h4>
        </footer>
      </div>
    </main>
  )
}

export default App