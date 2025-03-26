import { defineField, defineType } from 'sanity'

export const heroTypes = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'heroButton',
      title: 'Hero Button',
      type: 'text',
      description: 'Call to action button',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      heroDescription: 'heroDescription',
    },
  },
})
