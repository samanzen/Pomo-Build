import {ImageIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Verified Project',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'verified',
      title: 'Verified for publication',
      type: 'boolean',
      initialValue: false,
      description: 'Keep unpublished until location, photos, and facts are confirmed.',
    }),
    defineField({
      name: 'location',
      title: 'City or neighbourhood',
      type: 'string',
      description: 'Use a privacy-safe location such as "Port Moody, BC". Do not invent projects.',
    }),
    defineField({
      name: 'service',
      title: 'Related service',
      type: 'string',
      options: {
        list: [
          {title: 'Major renovations', value: 'major-renovations'},
          {title: 'Kitchen & bath', value: 'kitchen-bath'},
          {title: 'Basement finishing', value: 'basement-finishing'},
          {title: 'Decks & exteriors', value: 'decks-exteriors'},
          {title: 'Commercial improvements', value: 'commercial-improvements'},
          {title: 'Handyman services', value: 'handyman-services'},
        ],
      },
    }),
    defineField({name: 'scope', type: 'text', rows: 3}),
    defineField({name: 'challenge', type: 'text', rows: 4}),
    defineField({name: 'solution', type: 'text', rows: 4}),
    defineField({name: 'materials', type: 'text', rows: 3}),
    defineField({
      name: 'timeline',
      title: 'Timeline or range',
      type: 'string',
      description: 'Only publish a range after it is approved.',
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', type: 'string', title: 'Alternative text'})],
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'alt', type: 'string', title: 'Alternative text'})],
        }),
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'heroImage',
    },
  },
})
