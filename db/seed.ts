import { Project, Skill } from '@/payload/payload-types';
import fs from 'fs';
import { MongoClient } from 'mongodb';
import type { Db, MongoClientOptions } from 'mongodb';
import path from 'path';

async function seedDatabase() {
  const url = process.env.DATABASE_URI as string;
  const dbName = 'test';

  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true } as MongoClientOptions);

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    SeedSkills(db);
    SeedServices(db);
    SeedProjects(db);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}
const SeedSkills = async (db: Db) => {
  try {
    const skillsFilePath = path.join(process.cwd(), 'public/data/skills.json');
    const skillsData = fs.readFileSync(skillsFilePath, 'utf8');
    const skills: Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>[] = JSON.parse(skillsData);

    await db.collection('skills').deleteMany({});

    await db.collection('skills').insertMany(skills);

    console.log('Skills have been successfully seeded.');
  } catch (error) {
    console.error('An error occurred while seeding skills:', error);
  }
};
const SeedProjects = async (db: Db) => {
  try {
    const projectsFilePath = path.join(process.cwd(), 'public/data/projects.json');
    const projectsData = fs.readFileSync(projectsFilePath, 'utf8');
    const projects: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>[] = JSON.parse(projectsData);

    await db.collection('projects').deleteMany({});

    await db.collection('projects').insertMany(projects);

    console.log('Projects have been successfully seeded.');
  } catch (error) {
    console.error('An error occurred while seeding Projects:', error);
  }
};
const SeedServices = async (db: Db) => {
  try {
    const servicesFilePath = path.join(process.cwd(), 'public/data/services.json');
    const servicesData = fs.readFileSync(servicesFilePath, 'utf8');
    const services: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>[] = JSON.parse(servicesData);

    await db.collection('services').deleteMany({});

    await db.collection('services').insertMany(services);

    console.log('services have been successfully seeded.');
  } catch (error) {
    console.error('An error occurred while seeding services:', error);
  }
};
seedDatabase();
