import { defineField, defineType } from 'sanity'

export const RDTypes = defineType({
  name: 'RD',
  title: 'RD',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Job Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hour',
      title: 'Job Hour',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle,
      }
    },
  },
})
