import dotenv from 'dotenv';
import fs from 'fs';
import { MongoClient } from 'mongodb';
import path from 'path';

dotenv.config();

async function seedDatabase() {
  const url = process.env.DATABASE_URI;
  if (!url) {
    console.error('DATABASE_URI is not defined');
    process.exit(1);
  }
  const dbName = 'test';
  console.log(url);
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    await db.collection('users').insertOne({
      email: 'fixgmc@gmail.com',
      password: 'XSARACENZ',
      role: 'admin'
    });
    await SeedSkills(db);
    await SeedServices(db);
    await SeedProjects(db);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}
const SeedSkills = async db => {
  try {
    const skillsFilePath = path.join(process.cwd(), 'public/data/skills.json');
    const skillsData = fs.readFileSync(skillsFilePath, 'utf8');
    const skills = JSON.parse(skillsData);

    await db.collection('skills').deleteMany({});

    await db.collection('skills').insertMany(skills);

    console.log('Skills have been successfully seeded.');
  } catch (error) {
    console.error('An error occurred while seeding skills:', error);
  }
};
const SeedProjects = async db => {
  try {
    const projectsFilePath = path.join(process.cwd(), 'public/data/projects.json');
    const projectsData = fs.readFileSync(projectsFilePath, 'utf8');
    const projects = JSON.parse(projectsData);

    await db.collection('projects').deleteMany({});

    await db.collection('projects').insertMany(projects);

    console.log('Projects have been successfully seeded.');
  } catch (error) {
    console.error('An error occurred while seeding Projects:', error);
  }
};
const SeedServices = async db => {
  try {
    const servicesFilePath = path.join(process.cwd(), 'public/data/services.json');
    const servicesData = fs.readFileSync(servicesFilePath, 'utf8');
    const services = JSON.parse(servicesData);

    await db.collection('services').deleteMany({});

    await db.collection('services').insertMany(services);

    console.log('services have been successfully seeded.');
  } catch (error) {
    console.error('An error occurred while seeding services:', error);
  }
};
await seedDatabase();
