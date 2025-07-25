function getGrade(score) {

  let grade;

 
  switch (true) {
    case (score >= 80 && score <= 100):
      grade = 'A';
      break;
    case (score >= 70 && score < 80):
      grade = 'B';
      break;
    case (score >= 50 && score < 70):
      grade = 'C';
      break;
    case (score >= 0 && score < 50):
      grade = 'F';
      break;
    default:  grade = 'Invalid score';
  }

  return grade;
}

const studentScore = 85;
const studentGrade = getGrade(studentScore);
console.log(`Student Score: ${studentScore}, Grade: ${studentGrade}`);