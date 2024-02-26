export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'url',
      type: 'string',
      title: 'Url',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{type: 'block'}],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      required: true,
      of: [
        {
          type: 'image',
          options: {
            hotspot: true, // Enable if you want to allow hotspot information for images
          },
        },
      ],
      validation: (Rule:any) =>
      Rule.custom((images:any) => {
        if (!images || images.length !== 4) {
          return 'You must provide exactly 4 images.';
        }
        return true;
      }).max(4),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
}
