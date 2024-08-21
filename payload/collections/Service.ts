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

export const Service: CollectionConfig = {
  slug: 'services',
  access: {
    read: () => true
  },
  fields: [
    ...fields,
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'text'
        }
      ]
    },
    {
      name: 'body',
      type: 'richText'
    },
    {
      name: 'icon',
      type: 'text'
    },
    {
      name: 'url',
      type: 'text'
    },
    {
      name: 'src',
      type: 'text'
    },
    {
      name: 'types',
      type: 'text'
    }
  ]
};
