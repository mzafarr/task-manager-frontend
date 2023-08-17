interface Task {
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

interface User {
    name: string;
    email: string;
    password: string;
    tasks: Task;
  }
  