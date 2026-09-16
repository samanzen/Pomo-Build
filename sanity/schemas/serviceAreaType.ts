import {PinIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const serviceAreaType = defineType({
  name: 'serviceArea',
  title: 'Service Area Proof',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'city',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'city'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'region',
      title: 'Geographic grouping',
      type: 'string',
      description: 'Optional navigation grouping only. Do not use this as a customer-priority flag.',
      options: {
        list: [
          {title: 'Tri-Cities and Nearby Communities', value: 'tri-cities-nearby'},
          {title: 'North Shore and Howe Sound', value: 'north-shore'},
          {title: 'Vancouver and Central Metro Vancouver', value: 'vancouver-central'},
          {title: 'Northeast Metro Vancouver', value: 'northeast'},
          {title: 'Richmond and Delta', value: 'richmond-delta'},
          {title: 'Surrey, White Rock and Langley', value: 'surrey-langley'},
        ],
      },
    }),
    defineField({
      name: 'housingNotes',
      title: 'Housing-stock notes',
      type: 'text',
      rows: 4,
      description: 'Only add notes that can be verified. Do not invent neighbourhood experience.',
    }),
    defineField({
      name: 'municipalLinks',
      title: 'Authoritative municipal links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string'}),
            defineField({name: 'url', type: 'url'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'verifiedProof',
      title: 'Verified local proof',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'description', type: 'text', rows: 3}),
            defineField({name: 'sourceUrl', type: 'url'}),
            defineField({
              name: 'verified',
              type: 'boolean',
              initialValue: false,
              description: 'Leave unpublished until a human has verified the claim.',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'Local FAQs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'question', type: 'string'}),
            defineField({name: 'answer', type: 'text', rows: 4}),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'city',
      subtitle: 'slug.current',
    },
  },
})
