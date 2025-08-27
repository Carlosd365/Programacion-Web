import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';

function App() {
  // Estado para las tareas
  const [tasks, setTasks] = useState([]);

  // Estado para el filtro activo
  const [filter, setFilter] = useState('all');

  // Agregar nueva tarea
  const addTask = (taskName) => {
    const newTask = {
      id: crypto.randomUUID(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Cambiar estado de completado
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  // Obtener tareas según el filtro
  const getFilteredTasks = () => {
    switch (filter) {
      case 'pending':
        return tasks.filter((t) => !t.completed);
      case 'completed':
        return tasks.filter((t) => t.completed);
      default:
        return tasks;
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>

      {/* Formulario para agregar tareas */}
      <TaskForm onAddTask={addTask} />

      {/* Botones de filtro */}
      <FilterButtons currentFilter={filter} onChangeFilter={setFilter} />

      {/* Lista de tareas filtradas */}
      <TaskList
        tasks={getFilteredTasks()}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
