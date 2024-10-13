type Task = {
    id: number;
    description: string;
    completed: boolean;
};

class TaskModel {
    private tasks: Task[] = [];

    addTask(task: string): Task {
        const newTask: Task = { id: Date.now(), description: task, completed: false };
        this.tasks.push(newTask);
        return newTask;
    }

    removeTask(taskId: number): void {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    toggleTask(taskId: number): void {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
        }
    }

    getTasks(): Task[] {
        return this.tasks;
    }
}

export default TaskModel;
