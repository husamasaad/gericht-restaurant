export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the image'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the menu item'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      describtion: 'instgram Link of the image'
    }
  ]
}