"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Correct import for useParams
import { client } from "@/sanity/lib/client"; // Ensure 'client' is properly configured
import Image from "next/image";
import Link from "next/link";

// Define a Product type to match your product data structure
type Product = {
  _id: string;
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  imagePath?: string; // Optional if some products don't have images
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
};

const getProductImageUrlById = (id: string): string => {
  const imageMap: { [key: string]: string } = {
    '1': 'https://plus.unsplash.com/premium_photo-1668073439372-2ceafa1222b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URLs
    '2': 'https://plus.unsplash.com/premium_photo-1681022527718-81786d7873bd?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '3': 'https://plus.unsplash.com/premium_photo-1690971631390-4f3fa92315f9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '4': 'https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '5': 'https://next-ecommerce-template-4.vercel.app/product/Chair (4).png',
    '6': 'https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '7': 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '8': 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '9': 'https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '10': 'https://plus.unsplash.com/premium_photo-1681412205470-77848a519359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'11': 'https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'12': 'https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'13': 'https://plus.unsplash.com/premium_photo-1661962827359-b165dec0850f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'14': 'https://plus.unsplash.com/premium_photo-1681487485258-26aaa059d967?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'15': 'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'16': 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'17': 'https://plus.unsplash.com/premium_photo-1683120852623-143817d6400b?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'18': 'https://plus.unsplash.com/premium_photo-1661595077028-9ff236368cb5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'19': 'https://plus.unsplash.com/premium_photo-1670869816720-de59bfc2be74?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'20': 'https://plus.unsplash.com/premium_photo-1692130314358-30f911957d7f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'21': 'https://plus.unsplash.com/premium_photo-1661886455585-03ddf4347796?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Add more mappings as needed
  };
  return imageMap[id] || '';

  
};

export default function ProductPage() {

    // Initialize state with a starting value (e.g., 0)
    const [count, setCount] = useState(0);

    // Handle button click to toggle increase or decrease
    const handleClick = () => {
      if (count < 100) {
        // If count is less than 100, increase the count
        setCount(count + 1);
      } else if (count > 0) {
        // If count is greater than 0, decrease the count
        setCount(count - 1);
      }
    };
  const { id } = useParams(); // Directly access the id parameter
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const query = `*[_type == 'product' && id == $id][0] {
          _id,
          id,
          name,
          description,
          price,
          discountPercentage,
          "imagePath": image.asset->url, // Ensure image URLs are fetched correctly
          isFeaturedProduct,
          stockLevel,
          category
        }`;

        try {
          const productData = await client.fetch(query, { id });

          if (!productData.imagePath) {
            productData.imagePath = getProductImageUrlById(productData.id);
          }

          setProduct(productData);

          // Fetch related products
          const relatedQuery = `*[_type == 'product' && category == $category && id != $id][0...2] {
            _id,
            id,
            name,
            price,
            discountPercentage,
            "imagePath": image.asset->url
          }`;

          const relatedData = await client.fetch(relatedQuery, {
            category: productData.category,
            id: productData.id,
          });

          setRelatedProducts(relatedData);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const price = parseFloat(product.price.toString()); // Ensure price is a number
  const discountedPrice = (
    price - (price * product.discountPercentage) / 100
  ).toFixed(2);

 

  return (
    <div>
      {/* hero Section */}
      <div className="w-full h-[540px] relative">
        <Image
          src="/assets/Rectangle 1 (1).png"
          alt="Instagram background"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
        <div className="mx-auto absolute inset-0 flex flex-col items-center justify-center text-center text-black">
          <Image src="/assets/Meubel House_Logos-05.png" alt="" width={77} height={77} />
          <h1 className="text-[48px] font-poppins font-bold">{product.name}</h1>
          <p className="text-[14px] font-poppins">
            Home <span className="font-bold">{product.category}</span>
          </p>
        </div>
      </div>

      <div className="mx-auto flex flex-col lg:flex-row p-4 gap-[3rem] my-[5rem]"      >
        {product.imagePath && (
          <Image
            src={product.imagePath}
            alt={product.name}
            className="w-full h-96 object-cover rounded-md"
            width={600}
            height={800}
          />
        )}
        <div>
        <h2 className="text-[28px] font-bold mt-4">{product.name}</h2>
        <p  className = "my-2">{product.description}</p>
        <p  className = "my-2"><b>Price :</b>
          ${discountedPrice}{" "}
          {product.discountPercentage > 0 && (
            <span className="line-through text-red-500">
              ${price.toFixed(2)}
            </span>
          )}
        </p>
        <p className = "my-2"><b>Category :</b> {product.category}</p>
        <p className = "my-2"><b>Stock :</b>Stock: {product.stockLevel}</p>
        <div className = "gap-5 flex mt-5">
        <button
          className="w-[123px] h-[64px] border border-[#9F9F9F] rounded"
          onClick={handleClick}
        >
          {count === 0 ? `+ ${count}` : `- ${count} +`}
        </button>
        <Link href="/Cart">
          <button className="bg-[#FFF9E5] text-black w-[123px] h-[64px]  border-[#9F9F9F] rounded">
            Add to Cart
          </button>
        </Link></div>
        </div>
      </div>

  {/* Related Products Section */}
<div className="max-w-3xl mx-auto p-4">
  <h3 className="text-xl font-bold mt-8">Related Products</h3>
  <div className="grid grid-cols-2 gap-4 mt-4">
    {relatedProducts.map((relatedProduct) => (
      <div
        key={relatedProduct.id}
        className="border p-4 rounded-md shadow-sm hover:shadow-lg transition"
      >
        {/* Product Image */}
        {relatedProduct.imagePath && (
          <Image
            src={relatedProduct.imagePath}
            alt={relatedProduct.name}
            className="w-full h-48 object-cover rounded-md"
            width={200}
            height={200}
          />
        )}
        <h4 className="text-lg font-semibold mt-2">{relatedProduct.name}</h4>
        <p>${relatedProduct.price}</p>
        <Link href={`/Products/${relatedProduct.id}`}>
          <button className="bg-[#FFF9E5] text-black w-full h-[2.5rem] mt-2">
            View Details
          </button>
        </Link>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
