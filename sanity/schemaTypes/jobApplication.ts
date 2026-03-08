import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'jobApplication',
  title: 'Job Application',
  type: 'document',
  fields: [
    defineField({
      name: 'applicantName',
      title: 'Applicant Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'appliedFor',
      title: 'Applied For',
      type: 'reference',
      to: [{ type: 'job' }],
      readOnly: true,
    }),
    defineField({
      name: 'resume',
      title: 'Resume/CV',
      type: 'file',
      readOnly: true,
    }),
    defineField({
      name: 'coverLetter',
      title: 'Cover Letter',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Reviewed', value: 'reviewed' },
          { title: 'Interviewing', value: 'interviewing' },
          { title: 'Hired', value: 'hired' },
          { title: 'Rejected', value: 'rejected' },
        ],
      },
      initialValue: 'new',
    }),
  ],
});
