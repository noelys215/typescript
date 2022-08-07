interface Todo {
	text: string;
	completed: boolean;
}

const btn = document.getElementById('btn')! as HTMLButtonElement;
const input = document.getElementById('todoinput')! as HTMLInputElement;
const form = document.querySelector('form')!;
const list = document.getElementById('todolist')!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
	const todosJSON = localStorage.getItem('todos');
	if (todosJSON === null) return [];
	return JSON.parse(todosJSON);
}

function saveTodos() {
	localStorage.setItem('todos', JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
	e.preventDefault();
	const todoObj: Todo = {
		text: input.value,
		completed: false,
	};
	createTodo(todoObj);
	todos.push(todoObj);

	saveTodos();
	input.value = '';
}

function createTodo(todo: Todo) {
	const newLI = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.checked = todo.completed;

	checkbox.addEventListener('change', () => {
		todo.completed = checkbox.checked;
		saveTodos();
	});

	newLI.append(checkbox);
	newLI.append(todo.text);
	list.append(newLI);
	newLI.style.listStyle = 'none';
}

form.addEventListener('submit', handleSubmit);
