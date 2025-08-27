function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
        <button onClick={() => onToggle(task.id)}>
            {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
}
export default TaskItem;
