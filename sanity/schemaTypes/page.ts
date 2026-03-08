import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'heroSection',
          title: 'Hero Section',
          fields: [
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'subheading', type: 'text', title: 'Subheading' },
            { name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } },
          ],
        },
        {
          type: 'object',
          name: 'contentWithImage',
          title: 'Content with Image',
          fields: [
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'content', type: 'array', of: [{ type: 'block' }], title: 'Text Content' },
            { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
            { 
              name: 'imagePosition', 
              type: 'string', 
              title: 'Image Position', 
              options: { list: ['left', 'right'] } 
            },
          ],
        },
        {
          type: 'object',
          name: 'imageGallery',
          title: 'Image Gallery',
          fields: [
            { name: 'heading', type: 'string', title: 'Heading' },
            { 
              name: 'images', 
              type: 'array', 
              of: [{ type: 'image', options: { hotspot: true } }] 
            },
          ],
        },
      ],
    }),
  ],
})
