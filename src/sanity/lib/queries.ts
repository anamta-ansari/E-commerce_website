import { defineQuery } from "next-sanity";

// Query for fetching all products
export const allProducts = defineQuery(`
  *[_type == "product"] {
    _id, // Document ID
    id, // Product ID
    name,
    description,
    price,
    discountPercentage, // Matches schema
    isFeaturedProduct, // Matches schema
    stockLevel, // Matches schema
    category, // Matches schema
    "imagePath": image Path ,// Direct URL as defined in schema
    "imageurl": image.asset->url
  }
`);

// Query for fetching the first 4 products
export const fourProducts = defineQuery(`
  *[_type == "product"][0..3] {
    _id, // Document ID
    id, // Product ID
    name,
    description,
    price,
    discountPercentage, 
    isFeaturedProduct, 
    stockLevel,
    category,
    "imagePath": imagePath // Direct URL as defined in schema
  }
`);
