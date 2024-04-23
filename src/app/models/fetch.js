import StudentModel from './student'; // Import your Mongoose model

async function fetchStudentByEmail(email) {
  try {
    // Query the database for the student with the provided email
    const student = await StudentModel.findOne({ email });

    if (!student) {
      console.log('Student not found');
      return null;
    }

    // Student found, return the data
    return student;
  } catch (error) {
    console.error('Error fetching student by email:', error);
    throw error;
  }
}

// Example usage:
const userEmail = 'Erik_Satterfield@yahoo.com';
fetchStudentByEmail(userEmail)
  .then(student => {
    if (student) {
      console.log('Student found:', student);
    } else {
      console.log('Student not found');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
