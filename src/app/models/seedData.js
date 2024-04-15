import { MongoClient, ServerApiVersion } from 'mongodb';
import faker from 'faker';

// MongoDB URI from environment variables
const mongoUri = "";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongoUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function seedDatabase() {
  try {
    // Check if MongoDB URI is defined
    if (!mongoUri) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    // Connect to MongoDB with the options
    await client.connect();
    console.log('Connected to MongoDB');

    // Get the database object
    const database = client.db();

    // Define initial project data using faker
    const initialProjects = Array.from({ length: 100 }, (_, index) => ({
      project_id: index + 1,
      project_name: faker.company.companyName(),
      description: faker.lorem.sentence(),
      progress: faker.random.arrayElement(['In Progress', 'Completed']),
      status: faker.datatype.boolean,
      start_date: faker.date.past(),
      end_date: faker.date.future(),
      created_by: faker.name.findName(),
      owner: {
        username: faker.internet.userName(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        dp:faker.random.arrayElement(['https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/761c3d4d-3918-4d9d-9038-1b4d3dbb4d1d/dg3phqk-d1180b16-a9fd-40e5-8368-b4efbbe18070.jpg/v1/fit/w_810,h_1800,q_70,strp/anime_pfp_sky_art_anime_dp_anime_by_savvybot_dg3phqk-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg4OCIsInBhdGgiOiJcL2ZcLzc2MWMzZDRkLTM5MTgtNGQ5ZC05MDM4LTFiNGQzZGJiNGQxZFwvZGczcGhxay1kMTE4MGIxNi1hOWZkLTQwZTUtODM2OC1iNGVmYmJlMTgwNzAuanBnIiwid2lkdGgiOiI8PTg1MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.x8S4LJkhbTV7WNWfnUbos7ClrTe35oa3L-a_Hb0agDs',
         'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/44b7242e-ad1a-40e8-b187-e217777b9b61/dg9jb8y-a91f3c2c-a7bb-46b5-a15a-bf96dc1b8eeb.png/v1/fit/w_828,h_964,q_70,strp/mika_by_uselessmenschen_dg9jb8y-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ0YjcyNDJlLWFkMWEtNDBlOC1iMTg3LWUyMTc3NzdiOWI2MVwvZGc5amI4eS1hOTFmM2MyYy1hN2JiLTQ2YjUtYTE1YS1iZjk2ZGMxYjhlZWIucG5nIiwiaGVpZ2h0IjoiPD0xNDkwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNDRiNzI0MmUtYWQxYS00MGU4LWIxODctZTIxNzc3N2I5YjYxXC91c2VsZXNzbWVuc2NoZW4tNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.PG42fmEE4-ZojUT4Mi82qfQwNz-X9dwzLWBLklJBfSc']),
      },
      team: Array.from({ length: faker.datatype.number({ min: 1, max: 5 }) }, () => ({
        username: faker.internet.userName(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        dp:faker.random.arrayElement(['https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/761c3d4d-3918-4d9d-9038-1b4d3dbb4d1d/dg3phqk-d1180b16-a9fd-40e5-8368-b4efbbe18070.jpg/v1/fit/w_810,h_1800,q_70,strp/anime_pfp_sky_art_anime_dp_anime_by_savvybot_dg3phqk-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg4OCIsInBhdGgiOiJcL2ZcLzc2MWMzZDRkLTM5MTgtNGQ5ZC05MDM4LTFiNGQzZGJiNGQxZFwvZGczcGhxay1kMTE4MGIxNi1hOWZkLTQwZTUtODM2OC1iNGVmYmJlMTgwNzAuanBnIiwid2lkdGgiOiI8PTg1MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.x8S4LJkhbTV7WNWfnUbos7ClrTe35oa3L-a_Hb0agDs',
         'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/44b7242e-ad1a-40e8-b187-e217777b9b61/dg9jb8y-a91f3c2c-a7bb-46b5-a15a-bf96dc1b8eeb.png/v1/fit/w_828,h_964,q_70,strp/mika_by_uselessmenschen_dg9jb8y-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ0YjcyNDJlLWFkMWEtNDBlOC1iMTg3LWUyMTc3NzdiOWI2MVwvZGc5amI4eS1hOTFmM2MyYy1hN2JiLTQ2YjUtYTE1YS1iZjk2ZGMxYjhlZWIucG5nIiwiaGVpZ2h0IjoiPD0xNDkwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNDRiNzI0MmUtYWQxYS00MGU4LWIxODctZTIxNzc3N2I5YjYxXC91c2VsZXNzbWVuc2NoZW4tNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.PG42fmEE4-ZojUT4Mi82qfQwNz-X9dwzLWBLklJBfSc']),
      })),
    }));

    // Insert initial project data
    await database.collection('projects').insertMany(initialProjects);
    console.log('Initial projects inserted successfully');

    // Close the MongoDB connection
    await client.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();
