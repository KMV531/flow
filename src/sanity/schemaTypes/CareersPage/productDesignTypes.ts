import { defineField, defineType } from 'sanity'

export const productDesignTypes = defineType({
  name: 'productDesign',
  title: 'Product Design',
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
