const gradingStudents = (grades) => grades.map(
  grade => (grade % 5 >= 3) && grade > 37 ? grade + (5 - (grade % 5)) : grade
);

const main = () => {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const n = parseInt(readLine(), 10);
  const grades = [];

  for (let gradesItr = 0; gradesItr < n; gradesItr++) {
    const gradesItem = parseInt(readLine(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
