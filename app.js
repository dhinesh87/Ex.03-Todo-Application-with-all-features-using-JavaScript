const STORAGE_KEY = 'todo-application.tasks';

const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
const count = document.querySelector('#task-count');
const summary = document.querySelector('#list-summary');
const message = document.querySelector('#app-message');
const clearCompletedButton = document.querySelector('#clear-completed');
const filterButtons = document.querySelectorAll('.filter-button');

let filter = 'all';
let storageAvailable = true;
let tasks = loadTasks();

function loadTasks() {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    if (!savedTasks) return [];

    const parsedTasks = JSON.parse(savedTasks);
    if (
      !Array.isArray(parsedTasks) ||
      parsedTasks.some(
        (task) =>
          typeof task.id !== 'string' ||
          typeof task.text !== 'string' ||
          typeof task.completed !== 'boolean'
      )
    ) {
      throw new Error('Saved tasks have an unexpected format.');
    }

    return parsedTasks;
  } catch (error) {
    storageAvailable = false;
    message.textContent =
      'Saved tasks could not be loaded. The list will work for this session, but changes may not be saved.';
    console.error('Unable to load saved tasks:', error);
    return [];
  }
}

function saveTasks() {
  if (!storageAvailable) return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    storageAvailable = false;
    message.textContent =
      'Your browser could not save changes. The list will work for this session, but changes may not be saved.';
    console.error('Unable to save tasks:', error);
  }
}

function renderTasks() {
  const visibleTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  list.replaceChildren();

  if (visibleTasks.length === 0) {
    const emptyState = document.createElement('li');
    emptyState.className = 'empty-state';
    emptyState.textContent =
      tasks.length === 0
        ? 'Your list is clear. Add a task to get started.'
        : 'No tasks match this filter.';
    list.append(emptyState);
  }

  visibleTasks.forEach((task) => {
    const item = document.createElement('li');
    item.className = `todo-item${task.completed ? ' is-completed' : ''}`;

    const checkbox = document.createElement('input');
    checkbox.className = 'task-checkbox';
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.setAttribute('aria-label', `Mark "${task.text}" as completed`);
    checkbox.dataset.action = 'toggle';
    checkbox.dataset.id = task.id;

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = task.text;

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const editButton = document.createElement('button');
    editButton.className = 'icon-button';
    editButton.type = 'button';
    editButton.textContent = 'Edit';
    editButton.setAttribute('aria-label', `Edit "${task.text}"`);
    editButton.dataset.action = 'edit';
    editButton.dataset.id = task.id;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'icon-button delete-button';
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('aria-label', `Delete "${task.text}"`);
    deleteButton.dataset.action = 'delete';
    deleteButton.dataset.id = task.id;

    actions.append(editButton, deleteButton);
    item.append(checkbox, taskText, actions);
    list.append(item);
  });

  const remaining = tasks.filter((task) => !task.completed).length;
  count.textContent = `${remaining} ${remaining === 1 ? 'task' : 'tasks'} left`;
  summary.textContent =
    tasks.length === 0
      ? 'No tasks yet'
      : `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'} total`;
  clearCompletedButton.disabled = !tasks.some((task) => task.completed);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) {
    input.focus();
    return;
  }

  tasks.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    text,
    completed: false,
  });
  input.value = '';
  message.textContent = '';
  saveTasks();
  renderTasks();
  input.focus();
});

list.addEventListener('change', (event) => {
  const checkbox = event.target.closest('[data-action="toggle"]');
  if (!checkbox) return;

  const task = tasks.find((item) => item.id === checkbox.dataset.id);
  if (!task) return;
  task.completed = checkbox.checked;
  saveTasks();
  renderTasks();
});

list.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;

  const taskIndex = tasks.findIndex((task) => task.id === button.dataset.id);
  if (taskIndex === -1) return;

  if (button.dataset.action === 'delete') {
    tasks.splice(taskIndex, 1);
  } else if (button.dataset.action === 'edit') {
    const updatedText = window.prompt('Edit task:', tasks[taskIndex].text);
    if (updatedText === null) return;
    const trimmedText = updatedText.trim();
    if (!trimmedText) {
      message.textContent = 'A task cannot be empty.';
      return;
    }
    tasks[taskIndex].text = trimmedText;
  }

  message.textContent = '';
  saveTasks();
  renderTasks();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle('is-active', isActive);
      filterButton.setAttribute('aria-pressed', String(isActive));
    });
    renderTasks();
  });
});

clearCompletedButton.addEventListener('click', () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
});

renderTasks();
