function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.reduce((grade, newGrade) => {
        if (newGrade.studentId === student.id) {
          return newGrade.grade;
        }
        return grade;
      }, 'N/A');
      return {
        ...student,
        grade: newGrade,
      };
    });
}

export default updateStudentGradeByCity;
