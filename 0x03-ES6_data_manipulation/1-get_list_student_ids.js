export default function getListStudentIds(studens) {
  if (!Array.isArray(studens)) return [];
  return studens.map((student) => student.id);
}