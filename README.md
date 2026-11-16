# Ex03 To-Do List using JavaScript
## Date:16-11-2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM


## OUTPUT
# Ex03 To-Do List using JavaScript
## Date:

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
app.css
```
:root {
  color-scheme: light;
  font-family: Inter, "Segoe UI", sans-serif;
  color: #20283a;
  background: #f5f7fb;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

* {
  box-sizing: border-box;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  background:
    radial-gradient(ellipse at 50% 0, #e8edff 0, transparent 46rem),
    #f5f7fb;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

button:focus-visible,
input:focus-visible {
  outline: 3px solid #9db1ff;
  outline-offset: 2px;
}

.app-shell {
  display: grid;
  min-height: 100vh;
  padding: 64px 20px;
  place-items: start center;
}

.todo-card {
  width: min(100%, 620px);
  padding: 40px;
  border: 1px solid #e8ebf3;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 20px 60px rgb(34 48 90 / 9%);
}

.page-header {
  margin-bottom: 30px;
}

.eyebrow {
  margin: 0 0 10px;
  color: #6277ce;
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.13em;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 8vw, 2.7rem);
  letter-spacing: -0.055em;
}

.subtitle {
  margin: 9px 0 0;
  color: #7a8294;
  line-height: 1.5;
}

.todo-form {
  display: flex;
  gap: 10px;
}

.todo-form input {
  min-width: 0;
  flex: 1;
  padding: 13px 15px;
  border: 1px solid #dfe3ed;
  border-radius: 10px;
  color: #20283a;
}

.todo-form input::placeholder {
  color: #a0a6b3;
}

.add-button {
  padding: 0 19px;
  border: 0;
  border-radius: 10px;
  background: #536bd0;
  color: white;
  font-weight: 650;
  transition: background 0.15s ease;
}

.add-button:hover {
  background: #4058bc;
}

.app-message {
  min-height: 0;
  margin: 0;
  color: #a13d32;
  font-size: 0.88rem;
}

.app-message:not(:empty) {
  margin-top: 12px;
}

.list-toolbar,
.list-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.list-toolbar {
  margin-top: 27px;
  padding-bottom: 14px;
  border-bottom: 1px solid #edf0f5;
}

.task-count,
.list-footer {
  color: #7a8294;
  font-size: 0.84rem;
}

.task-count {
  margin: 0;
  white-space: nowrap;
}

.filters {
  display: flex;
  gap: 4px;
}

.filter-button,
.text-button {
  border: 0;
  background: transparent;
  color: #777f91;
}

.filter-button {
  padding: 7px 9px;
  border-radius: 7px;
  font-size: 0.82rem;
}

.filter-button:hover,
.filter-button.is-active {
  background: #eef1ff;
  color: #455dc1;
}

.todo-list {
  display: grid;
  gap: 2px;
  margin: 0;
  padding: 7px 0;
  list-style: none;
}

.todo-item {
  display: flex;
  min-height: 58px;
  align-items: center;
  gap: 13px;
  padding: 10px 4px;
  border-bottom: 1px solid #f0f1f5;
}

.task-checkbox {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  accent-color: #536bd0;
  cursor: pointer;
}

.task-text {
  min-width: 0;
  flex: 1;
  overflow-wrap: anywhere;
  line-height: 1.45;
}

.is-completed .task-text {
  color: #9aa0ad;
  text-decoration: line-through;
}

.task-actions {
  display: flex;
  flex: 0 0 auto;
  gap: 3px;
}

.icon-button {
  padding: 6px 7px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: #68728b;
  font-size: 0.8rem;
}

.icon-button:hover {
  background: #f0f2f8;
  color: #4058bc;
}

.delete-button:hover {
  background: #fff0ef;
  color: #b34338;
}

.empty-state {
  padding: 26px 8px;
  color: #9aa0ad;
  font-size: 0.92rem;
  text-align: center;
}

.list-footer {
  padding-top: 13px;
}

.list-footer span {
  overflow-wrap: anywhere;
}

.text-button {
  padding: 5px 0 5px 8px;
  font-size: 0.82rem;
  white-space: nowrap;
}

.text-button:hover:not(:disabled) {
  color: #455dc1;
}

.text-button:disabled {
  cursor: default;
  opacity: 0.45;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
}

@media (max-width: 520px) {
  .app-shell {
    padding: 24px 12px;
  }

  .todo-card {
    padding: 26px 20px;
    border-radius: 15px;
  }

  .todo-form {
    flex-direction: column;
  }

  .add-button {
    min-height: 45px;
  }

  .list-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .filters {
    width: 100%;
  }
}
```
app.js
```
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
```
index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#f5f7fb" />
    <meta
      name="description"
      content="A simple todo list to organize and track your tasks."
    />
    <title>Todo List</title>
    <link rel="stylesheet" href="app.css" />
    <script src="app.js" defer></script>
  </head>
  <body>
    <main class="app-shell">
      <section class="todo-card" aria-labelledby="page-title">
        <header class="page-header">
          <p class="eyebrow">YOUR DAY, IN ORDER</p>
          <h1 id="page-title">Todo List</h1>
          <p class="subtitle">Make a little progress, one task at a time.</p>
        </header>

        <form id="todo-form" class="todo-form">
          <label class="sr-only" for="todo-input">New task</label>
          <input
            id="todo-input"
            name="task"
            type="text"
            placeholder="What needs to be done?"
            maxlength="200"
            autocomplete="off"
            required
          />
          <button class="add-button" type="submit">Add task</button>
        </form>

        <p id="app-message" class="app-message" role="status" aria-live="polite"></p>

        <div class="list-toolbar">
          <p id="task-count" class="task-count">0 tasks left</p>
          <div class="filters" role="group" aria-label="Filter tasks">
            <button class="filter-button is-active" type="button" data-filter="all" aria-pressed="true">All</button>
            <button class="filter-button" type="button" data-filter="active" aria-pressed="false">Active</button>
            <button class="filter-button" type="button" data-filter="completed" aria-pressed="false">Completed</button>
          </div>
        </div>

        <ul id="todo-list" class="todo-list" aria-label="Tasks"></ul>

        <footer class="list-footer">
          <span id="list-summary">No tasks yet</span>
          <button id="clear-completed" class="text-button" type="button">Clear completed</button>
        </footer>
      </section>
    </main>
  </body>
</html>
```

## OUTPUT
![alt text](<Screenshot 2026-11-16 231723.png>)


## RESULT
The program for creating To-do list using JavaScript is executed successfully.