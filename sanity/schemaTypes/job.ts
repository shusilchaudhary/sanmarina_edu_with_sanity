import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'job',
  title: 'Job Opening',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Counseling', value: 'Counseling' },
          { title: 'Marketing', value: 'Marketing' },
          { title: 'Administration', value: 'Administration' },
          { title: 'IT & Documentation', value: 'IT & Documentation' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: [
          { title: 'Kathmandu (Head Office)', value: 'Kathmandu' },
          { title: 'Baneshwor', value: 'Baneshwor' },
          { title: 'Dang', value: 'Dang' },
          { title: 'Itahari', value: 'Itahari' },
        ],
      },
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'text',
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'closingDate',
      title: 'Closing Date',
      type: 'date',
    }),
  ],
});
