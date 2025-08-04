export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Headline',
      type: 'string',
      description: 'The main H1 headline for the homepage.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'The supporting tagline that appears below the main headline.',
    },
  ],
}