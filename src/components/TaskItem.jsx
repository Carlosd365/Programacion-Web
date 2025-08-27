import '../styles/TaskItem.css';

function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
        <span>{task.name}</span>
        <button className="complete" onClick={() => onToggle(task.id)}>
            {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="delete" onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
}
export default TaskItem;
