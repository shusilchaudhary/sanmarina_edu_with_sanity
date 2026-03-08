import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
    }),
    defineField({
      name: 'time',
      title: 'Event Time',
      type: 'string',
      placeholder: 'e.g. 10:00 AM - 4:00 PM',
    }),
    defineField({
      name: 'location',
      title: 'Venue',
      type: 'string',
    }),
    defineField({
      name: 'locationLink',
      title: 'Google Maps Link',
      type: 'url',
    }),
    defineField({
      name: 'mainImage',
      title: 'Event Banner',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'eventType',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' },
        ],
      },
      initialValue: 'upcoming',
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Register Now',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Button Link',
      type: 'string',
      initialValue: '/consultation/',
    }),
  ],
});
