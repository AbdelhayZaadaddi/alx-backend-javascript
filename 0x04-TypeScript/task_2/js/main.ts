interface DirectorInterface {
  workFromHome(): string;
  getToWork(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getToWork(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(
  salary: number | string
): DirectorInterface | TeacherInterface {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(
  employee: DirectorInterface | TeacherInterface
): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  } else {
    return "Invalid class";
  }
}
