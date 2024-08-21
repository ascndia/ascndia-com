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

export const Project: CollectionConfig = {
  slug: 'projects',
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
          type: 'text',
          required: true
        }
      ]
    },
    {
      name: 'body',
      type: 'richText'
    },
    {
      name: 'slug',
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
    },
    {
      name: 'stack',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text'
        },
        {
          name: 'src',
          type: 'text'
        }
      ]
    },
    {
      name: 'demo',
      type: 'array',
      fields: [
        {
          name: 'url',
          type: 'text'
        }
      ]
    },
    {
      name: 'sourcecode',
      type: 'array',
      fields: [
        {
          name: 'url',
          type: 'text'
        }
      ]
    }
  ]
};
