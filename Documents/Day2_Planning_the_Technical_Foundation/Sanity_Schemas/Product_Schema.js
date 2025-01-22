export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    { 
      name: 'name', 
      type: 'string', 
      title: 'Product Name'
    },
    { 
      name: 'slug', 
      type: 'slug', 
      title: 'Slug',
      options: { source: 'name', maxLength: 96 }
    },
    { 
      name: 'price', 
      type: 'number', 
      title: 'Price'
    },
    { 
      name: 'stock', 
      type: 'number', 
      title: 'Stock Level'
    },
    { 
      name: 'description', 
      type: 'text', 
      title: 'Description' 
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{ type: 'image' }]
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Product'
    }
  ]
};
