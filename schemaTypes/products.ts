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
      length: 4,
      required: true,
      of: [
        {
          type: 'image',
          options: {
            hotspot: true, // Enable if you want to allow hotspot information for images
          },
        },
      ],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
}
