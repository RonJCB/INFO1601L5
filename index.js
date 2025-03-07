function getAverageGrade(student, course) {
  // Find the course in the transcript
  if (!student.transcript) return -1;
  let courseObj = student.transcript.find(c => c.course === course);
  if (!courseObj) return -1;

  let grades = courseObj.grades; // Get grades for the course
  let total = 0;
  
  // Sum all grades
  for (let grade of grades) {
      total += grade;
  }
  
  return total / grades.length; // Return average grade
}

function getAssignmentMark(student, course, num) {
  // Find the course in the transcript
  if (!student.transcript) return -1;
  let courseObj = student.transcript.find(c => c.course === course);
  if (!courseObj || num < 1 || num > courseObj.grades.length) return -1;

  return courseObj.grades[num - 1]; // Return the requested assignment mark
}

function averageAssessment(students, courseName, assignment) {
  let total = 0;
  let count = 0;

  // Loop through each student
  for (let student of students) {
      let mark = getAssignmentMark(student, courseName, assignment);
      
      // Add to total and count if valid
      if (mark !== -1) {
          total += mark;
          count++;
      }
  }
  
  // Return average
  return count === 0 ? -1 : total / count;
}
