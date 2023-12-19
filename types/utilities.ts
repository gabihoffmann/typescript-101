type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const todo: Readonly<Todo> = {
  title: "Learn TypeScript",
  description: "TypeScript Utilities",
  completed: false,
};

// todo.completed = true;
// todo.title = "something else";

function mutation(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

console.log(todo);
console.log(mutation(todo, { completed: true }));

type TodoPreview = Pick<Todo, "title">;

const previewTodo: TodoPreview = {
  title: todo.title,
};

type TodoPreview_2 = Omit<Todo, "description">;

const previewTodo_2: TodoPreview_2 = {
  title: "example",
  completed: false,
};
