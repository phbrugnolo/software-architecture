import React, { useState, useEffect } from 'react';

type Task = {
  id: number;
  description: string;
  completed: boolean;
};

const TaskView: React.FC<{ presenter: any }> = ({ presenter }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    presenter.view = {
      renderTasks: setTasks,
      bindAddTask: (handler: (taskText: string) => void) => {
        presenter.handleAddTask = handler;
      },
      bindRemoveTask: (handler: (id: number) => void) => {
        presenter.handleRemoveTask = handler;
      },
      bindToggleTask: (handler: (id: number) => void) => {
        presenter.handleToggleTask = handler;
      },
    };
  }, [presenter]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      presenter.handleAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>To-Do List MVP</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => presenter.handleToggleTask(task.id)}
            />
            {task.completed ? <strike>{task.description}</strike> : task.description}
            <button onClick={() => presenter.handleRemoveTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskView;
