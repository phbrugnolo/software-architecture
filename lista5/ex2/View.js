class TaskView {
    constructor() {
        this.app = document.getElementById('app');
        this.form = this.createElement('form');
        this.input = this.createElement('input');
        this.input.type = 'text';
        this.input.placeholder = 'Adicionar nova tarefa';

        this.submitButton = this.createElement('button');
        this.submitButton.textContent = 'Adicionar';

        this.taskList = this.createElement('ul');

        this.form.append(this.input, this.submitButton);
        this.app.append(this.form, this.taskList);

        this._temporaryTaskText = '';
        this._initLocalListeners();
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    get _taskText() {
        return this.input.value;
    }

    clearInput() {
        this.input.value = '';
    }

    renderTasks(tasks) {
        this.taskList.innerHTML = '';

        tasks.forEach(task => {
            const li = this.createElement('li');
            li.id = task.id;

            const checkbox = this.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;

            const taskText = this.createElement('span');
            taskText.textContent = task.description;
            if (task.completed) {
                taskText.style.textDecoration = 'line-through';
            }

            const deleteButton = this.createElement('button', 'delete');
            deleteButton.textContent = 'Remover';

            li.append(checkbox, taskText, deleteButton);
            this.taskList.append(li);
        });
    }

    _initLocalListeners() {
        this.taskList.addEventListener('input', event => {
            if (event.target.type === 'text') {
                this._temporaryTaskText = event.target.value;
            }
        });
    }

    bindAddTask(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();

            if (this._taskText) {
                handler(this._taskText);
                this.clearInput();
            }
        });
    }

    bindRemoveTask(handler) {
        this.taskList.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    }

    bindToggleTask(handler) {
        this.taskList.addEventListener('change', event => {
            if (event.target.type === 'checkbox') {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    }
}
