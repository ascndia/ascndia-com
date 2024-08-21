import type { Payload } from 'payload';

import SeedProjects from './project';
import SeedServices from './service';
import SeedSkills from './skill';

export const seedData = async (payload: Payload): Promise<void> => {
  // create admin
  await payload.create({
    collection: 'users',
    data: {
      email: 'fixgmc@gmail.com',
      password: 'XSARACENZ',
      role: 'admin'
    }
  });
  await Promise.all([SeedServices(payload), SeedSkills(payload), SeedProjects(payload)]);
};
