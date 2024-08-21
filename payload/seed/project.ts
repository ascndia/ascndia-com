import fs from 'fs';
import path from 'path';
import type { Payload } from 'payload';

import { Skill } from '../payload-types';

// Function to seed a single skill
const SeedProject = async (payload: Payload, param: Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> => {
  await payload.create({
    collection: 'skills',
    data: param
  });
  payload.logger.info(`Seeding project: ${param.title}`);
};

// Function to seed all skills
const SeedProjects = async (payload: Payload): Promise<void> => {
  // Read JSON file from the filesystem
  const skillsFilePath = path.join(process.cwd(), 'public/data/projects.json');
  const skillsData = fs.readFileSync(skillsFilePath, 'utf8');
  const skills: Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>[] = JSON.parse(skillsData);

  // Seed each skill

  skills.forEach(async skill => {
    await SeedProject(payload, skill);
  });
};

export default SeedProjects;
