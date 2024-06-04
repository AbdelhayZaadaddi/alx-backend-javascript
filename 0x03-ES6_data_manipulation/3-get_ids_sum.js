export default function getStudentIdsSum(students) {
  const sum = students.reduce((acc, theid) => acc + theid.id, 0);
  return sum;
}
