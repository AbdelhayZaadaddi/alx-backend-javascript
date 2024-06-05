/**
 * Represents the information of a student.
 */

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// create two student objects
const fisrStudent: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 26,
    location: "Germany"
};

const secondStudent: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "England"
};

// create an array of students
const studentsList = [fisrStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

/**
 * Renders the student information in a table.
 * @param students - An array of student objects.
 */
function renderStudentsTable(students: Student[]): void {
	students.forEach((student) => {
		const row = table.insertRow();
		const firstNameCell = row.insertCell(0);
		const locationCell = row.insertCell(1);

		firstNameCell.innerHTML = student.firstName;
		locationCell.innerHTML = student.location;
	});
}

// Render the students table
renderStudentsTable(studentsList);