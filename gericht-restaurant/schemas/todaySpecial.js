export default {
  name: 'today-special',
  title: 'Today Special',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the menu item'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the menu item'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the menu item'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category of the menu item'
    }
  ]
}