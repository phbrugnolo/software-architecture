class TaskPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddTask(this.handleAddTask);
        this.view.bindRemoveTask(this.handleRemoveTask);
        this.view.bindToggleTask(this.handleToggleTask);

        this.onTaskListChanged(this.model.getTasks());
    }

    onTaskListChanged = (tasks) => {
        this.view.renderTasks(tasks);
    }

    handleAddTask = (taskText) => {
        const task = this.model.addTask(taskText);
        this.onTaskListChanged(this.model.getTasks());
    }

    handleRemoveTask = (id) => {
        this.model.removeTask(id);
        this.onTaskListChanged(this.model.getTasks());
    }

    handleToggleTask = (id) => {
        this.model.toggleTask(id);
        this.onTaskListChanged(this.model.getTasks());
    }
}
