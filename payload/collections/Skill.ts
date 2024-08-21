import { CollectionConfig, Field } from 'payload/types';

const fields: Field[] = [
  {
    name: 'title',
    type: 'text'
  },

  {
    name: 'description',
    type: 'text'
  },
  {
    name: 'show',
    type: 'checkbox'
  },
  {
    name: 'showInDashboard',
    type: 'checkbox'
  },
  {
    name: 'featured',
    type: 'checkbox'
  }
];

export const Skill: CollectionConfig = {
  slug: 'skills',
  access: {
    read: () => true
  },
  fields: [
    ...fields,
    {
      name: 'url',
      type: 'text'
    },
    {
      name: 'src',
      type: 'text'
    },
    {
      name: 'mastery',
      type: 'text'
    },
    {
      name: 'usage',
      type: 'text'
    },
    {
      name: 'category',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text'
        }
      ]
    }
  ]
};
