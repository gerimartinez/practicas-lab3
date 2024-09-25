import { useState } from "react"
import Tarea from "./components/tarea/Tarea"
import ListTareas from "./components/list/ListTareas"

function App() {
	const [tareas, setTareas] = useState([])

	const addTareas = (taskName) => {
		const nuevaTarea = {
			id: Math.random() * 100,
			name: taskName,
			isComplete: false
		}
		setTareas([...tareas, nuevaTarea]);	
	}

	const handleCompletarTarea = (id) => {
		const updatedTarea = tareas.map((tarea) =>
		  tarea.id === id ? { ...tarea, isComplete: !tarea.isComplete } : tarea
		);
		setTareas(updatedTarea);
	};

	const deleteTarea = (id) => {
		const updatedTarea = tareas.filter((tarea) => tarea.id !== id);
		setTareas(updatedTarea);
	};

  return (
    <>
      	<div>
			<h1>Lista de Tareas</h1>
			<Tarea addTareas={addTareas} />
			<ListTareas tareas={tareas} handleCompletarTarea={handleCompletarTarea} deleteTarea={deleteTarea} />
   		</div>
    </>
  )
}

export default App
