import React from 'react';
import ReactDOM from 'react-dom';
import TaskModel from './Model';
import TaskPresenter from './Presenter';
import TaskView from './View';

const model = new TaskModel();
const presenter = new TaskPresenter(model, null);

ReactDOM.render(<TaskView presenter={presenter} />, document.getElementById('root'));
