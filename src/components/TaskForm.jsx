import { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        onAddTask(input.trim());
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={input}
            placeholder="Add task"
            onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
        </form>
    );
}
export default TaskForm;
