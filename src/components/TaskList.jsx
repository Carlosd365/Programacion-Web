import TaskItem from './TaskItem';
import '../styles/TaskList.css';

function TaskList({ tasks, onToggle, onDelete }) {
    return (
        <ul className="task-list">
        {tasks.map((task) => (
            <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            />
        ))}
        </ul>
    );
}
export default TaskList;
