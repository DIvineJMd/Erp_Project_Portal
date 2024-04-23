import { MongoClient, ServerApiVersion } from 'mongodb';
import faker from 'faker';
import mongoose from 'mongoose';

const mongoUri = "mongodb+srv://adarsh21442:291924@cluster0.7uszauk.mongodb.net/Erp_Project_data";
const client = new MongoClient(mongoUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function seedDatabase() {
  try {
    if (!mongoUri) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    await client.connect();
    console.log('Connected to MongoDB');
    // Get the database object
    const database = client.db();

    // Define Student schema
    const StudentSchema = new mongoose.Schema({
      studentId: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      dateOfBirth: { type: Date, required: true },
      gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
      address: { type: String },
      phone: { type: String },
    });

    // Create Student model
    const StudentModel = mongoose.model('Student', StudentSchema);

    const initialStudents = Array.from({ length: 20 }, () => ({
      studentId: faker.random.alphaNumeric(8),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      dateOfBirth: faker.date.past(),
      gender: faker.random.arrayElement(['Male', 'Female', 'Other']),
      address: faker.address.streetAddress(),
      phone: faker.phone.phoneNumber(),
    }));

    await database.collection('Student').insertMany(initialStudents);
    console.log('Initial student data inserted successfully');

    await client.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();
