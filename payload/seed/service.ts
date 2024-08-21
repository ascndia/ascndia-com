import fs from 'fs';
import path from 'path';
import type { Payload } from 'payload';

import { Service, Skill } from '../payload-types';

// Function to seed a single skill
const SeedService = async (payload: Payload, param: Omit<Service, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> => {
  await payload.create({
    collection: 'services',
    data: param
  });
  payload.logger.info(`Seeding service: ${param.title}`);
};

// Function to seed all skills
const SeedServices = async (payload: Payload): Promise<void> => {
  // Read JSON file from the filesystem
  const servicesFilePath = path.join(process.cwd(), 'public/data/services.json');
  const servicesData = fs.readFileSync(servicesFilePath, 'utf8');
  const services: Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>[] = JSON.parse(servicesData);

  // Seed each skill
  services.forEach(async service => {
    await SeedService(payload, service);
  });
};

export default SeedServices;
