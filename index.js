//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student, course){
// Check if the student has a transcript and the course exists
    if (!student.transcript || !student.transcript[course]) {
        return -1; // Return -1 if course is not found
    }
    
    const grades = student.transcript[course]; // Get grades for the course
    let total = 0;
    
    // Sum all grades
    for (let grade of grades) {
        total += grade;
    }
    
    return total / grades.length; // Return average grade
  }
/*Given a student object and a course code, return the average grade the student has for that course or return -1 if the course is not in the student's transcript.*/

getAssignmentMark(student, course, num)
{
  // Check if student has taken the course and the assignment exists
  if (!student.transcript || !student.transcript[course] || student.transcript[course].length < num) {
      return -1; // Return -1 if not found
  }
  
  return student.transcript[course][num - 1]; 
  
  // Get the assignment mark 
}
/*Given a student object, course number and assignment number returns the grade of that assignment of the given course of the student. If the student did not do the course, return -1.*/

function averageAssessment(students, courseName, assignment)
{
  let total = 0;
  let count = 0;
  
  // Loop through each student
  for (let student of students) {
      let mark = getAssignmentMark(student, courseName, assignment);
      
      // add to total and count
      if (mark !== -1) {
          total += mark;
          count++;
      }
  }
  
  //  return average
  return count === 0 ? -1 : total / count;
}

/*Given an array of students, a course code and an assignment number. Return the average of all the students mark for that assignment of that course. */