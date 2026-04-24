import { students } from "./students.js";
console.log(students);

function formatingStudents(students) {
  const forrmatinsStudentMap = students
    .map(
      (student, i) =>
        `${i + 1}. Студент: ${student.firstName} ${student.lastName}. Курс: ${student.course}. Середній бал: ${student.avgScore}. Напрямок: ${student.major}. Додаткові напрямки: ${student.hobbies.join(",")}. Не закриті предмети: ${student.hasDebts ? "Присутні" : "Відсутні"}. Рік вступу: ${student.startYear}. Група: ${student.group}”`,
    )
    .join("\n");
  return forrmatinsStudentMap;
}

console.log(formatingStudents(students));

function formatStudents(students) {
  const forrmatinsStudentReduce = students.reduce(
    (acc, student, indexStudent) =>
      acc +
      `${indexStudent + 1}. Студент: ${student.firstName} ${student.lastName}. Курс: ${student.course}. Середній бал: ${student.avgScore}. Напрямок: ${student.major}. Додаткові напрямки: ${student.hobbies.join(",")}. Не закриті предмети: ${student.hasDebts ? "Присутні" : "Відсутні"}. Рік вступу: ${student.startYear}. Група: ${student.group}” \n`,
    "",
  );
  return forrmatinsStudentReduce;
}

console.log(formatStudents(students));



// function sortedStudents(students, sortType) {
//   if (sortType === "asc") {
//     return [...students].sort((a, b) => a.avgScore - b.avgScore);
//   }

//   if (sortType === "desc") {
//     return [...students].sort((a, b) => b.avgScore - a.avgScore);
//   }
// }
// const sortDescStudent = sortedStudent(students, 'desk');
// const sortAskStudent = sortedStudent(students, "asc");


function sortedStudentByCourse(students) {
  const studentsCopy = [...students];
  studentsCopy.sort((a, b) => {
    if (a.course !== b.course) {
      return a.course - b.course;
    }
    if (a.lastName === b.course) {
      return a.lastName.localCompare(b.lastName);
    }
  });
  return studentsCopy;
}
