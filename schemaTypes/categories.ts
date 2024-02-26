export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      required: true,
    },
    {
      name: 'url',
      type: 'string',
      title: 'Url',
      required: true,
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      required: true,
      options: {
        hotspot: true, // Allows the user to set a hotspot for cropping
      },
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      required: true,
      options: {
        hotspot: true, // Allows the user to set a hotspot for cropping
      },
    },
    // {
    //   title: 'Products',
    //   name: 'products',
    //   type: 'array',
    //   unique: true,
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{type: 'product'}],
    //     },
    //   ],
    // },
  ],
}
