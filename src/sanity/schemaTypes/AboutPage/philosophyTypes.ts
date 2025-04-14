import { defineField, defineType } from 'sanity'

export const philosophyTypes = defineType({
  name: 'philosophy',
  title: 'Philosophy',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Philosophy Badge',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Philosophy Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'philosophyDescription',
      title: 'Philosophy Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'philosophyDescription',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle,
      }
    },
  },
})
