import { Access, CollectionConfig } from 'payload/types';

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user.role === 'admin') return true;

  return {
    id: {
      equals: user.id
    }
  };
};

export const User: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    read: adminsAndUser,
    create: ({ req }) => req.user.role === 'admin',
    update: ({ req }) => req.user.role === 'admin',
    delete: ({ req }) => req.user.role === 'admin'
  },
  admin: {
    hidden: ({ user }) => user.role !== 'admin',
    defaultColumns: ['id']
  },
  fields: [
    {
      name: 'role',
      defaultValue: 'admin',
      required: true,

      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' }
      ]
    }
  ]
};
