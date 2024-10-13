import TaskModel from "./Model";

class TaskPresenter {
    private model: TaskModel;
    private view: any;

    constructor(model: TaskModel, view: any) {
        this.model = model;
        this.view = view;

        this.view.bindAddTask(this.handleAddTask);
        this.view.bindRemoveTask(this.handleRemoveTask);
        this.view.bindToggleTask(this.handleToggleTask);

        this.onTaskListChanged(this.model.getTasks());
    }

    onTaskListChanged = (tasks: any[]) => {
        this.view.renderTasks(tasks);
    };

    handleAddTask = (taskText: string) => {
        this.model.addTask(taskText);
        this.onTaskListChanged(this.model.getTasks());
    };

    handleRemoveTask = (id: number) => {
        this.model.removeTask(id);
        this.onTaskListChanged(this.model.getTasks());
    };

    handleToggleTask = (id: number) => {
        this.model.toggleTask(id);
        this.onTaskListChanged(this.model.getTasks());
    };
}

export default TaskPresenter;
