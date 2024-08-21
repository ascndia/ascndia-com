import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';

import { Media } from './collections/Media';
import { Project } from './collections/Project';
import { Service } from './collections/Service';
import { Skill } from './collections/Skill';
import { User } from './collections/User';

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  collections: [Skill, User, Media, Project, Service],
  routes: {
    admin: '/admin'
  },
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    autoLogin: {
      email: 'fixgmc@gmail.com',
      password: 'XSARACENZ'
    }
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI as string
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  }
});
