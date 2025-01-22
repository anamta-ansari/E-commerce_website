E-Commerce Website (for Luxury Furniture)

Overview

Developed an e-commerce website using Next.js and Sanity CMS, with a Figma template created in a previous hackathon.
Features include dynamic product pages, a functional cart system, and an interactive FAQ component.

Activities

Sanity CMS Integration

Created a Sanity project and connected it to the Next.js e-commerce application.
Built a script/importSanityData to fetch and import product data from an API into Sanity CMS.
Fetched data from Sanity CMS to display on the /Products and Product Detail components.

Dynamic Routing & Product Pages

Leveraged Next.js dynamic routing to render individual product pages dynamically based on slugs fetched from Sanity CMS.
Displayed detailed product information, including images, prices, and stock levels.

Cart Functionality

Implemented an "Add to Cart" feature, dynamically updating the cart with:
Product details (name, image, price, stock level).
Options to proceed to checkout or remove products.
Incorporated user notifications for cart updates (e.g., product added/removed).

FAQ Component

Designed an interactive FAQ component using React with state management for dynamic behavior.

Testing

Conducted thorough testing of all API endpoints to ensure functionality.
Performed comprehensive testing of features, error handling, and performance:
Resolved issues with fetching image data from Sanity CMS by assigning unique image URLs based on product IDs.

Deployment

Successfully deployed the e-commerce website on Vercel.
Addressed deployment errors caused by missing environment variables by properly configuring them in the Vercel dashboard.

Challenges

Image Fetching Issue: Encountered errors when fetching image data from Sanity CMS.
Solution: Assigned unique URLs for product images using their IDs.
Deployment Errors: Deployment initially failed due to missing environment variables.
Solution: Configured the required environment variables in Vercel’s dashboard.

This development journey resulted in a fully functional e-commerce platform hosted on Vercel, providing a dynamic shopping experience.
