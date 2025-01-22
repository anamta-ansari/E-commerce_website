"use client"
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: string;
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  imagePath?: string;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
};

const getImageUrlById = (id: string): string => {
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
  return imageMap[id] || "";
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cartItems, setCartItems] = useState<Product[]>([]); // State for cart items

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == 'product'][0..21] {
        _id,
        id,
        name,
        description,
        price,
        discountPercentage,
        "imagePath": image.asset->url,
        isFeaturedProduct,
        stockLevel,
        category
      }`;

      try {
        const productsData = await client.fetch(query);

        const updatedProducts = productsData.map((product: Product) => {
          if (!product.imagePath) {
            product.imagePath = getImageUrlById(product.id);
          }
          return product;
        });

        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts);

        // Extract unique categories
        const uniqueCategories = [
          "All",
          ...new Set(updatedProducts.map((product: { category: string }) => product.category)),
        ];
        setCategories(uniqueCategories as string[]);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products whenever search query or category changes
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, products]);

  // Handle adding a product to the cart
  const handleAddToCart = (product: Product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    alert(`${product.name} has been added to the cart.`);
  };

  // Handle removing a product from the cart (fixing this to only remove the clicked product)
  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId) // Only remove the specific product
    );
    alert(`product has been deleted from the cart.`);
  };

  

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-[540px] relative">
        <Image
          src="/assets/Rectangle 1 (1).png"
          alt="Instagram background"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
        <div className="mx-auto absolute inset-0 flex flex-col items-center justify-center text-center text-black">
          <Image
            src="/assets/Meubel House_Logos-05.png"
            alt=""
            width={77}
            height={77}
          />
          <h1 className="text-[48px] font-poppins font-bold">Products</h1>
          <p className="text-[14px] font-poppins">
            Home <span className="font-bold">Products</span>
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="w-full">
        <div className="mx-auto 2xl:w-[1500px]">
          <div className="flex flex-col md:flex-row justify-between items-center my-4">
            {/* Category Filter */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 border ${
                    selectedCategory === category ? "bg-black text-white" : "bg-white"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search products..."
              className="border px-4 py-2 w-full md:w-1/3"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 2xl:w-[1500px]">
        {filteredProducts.map((product) => {
          const price = parseFloat(product.price.toString());
          const discountedPrice = (
            price -
            (price * product.discountPercentage) / 100
          ).toFixed(2);

          return (
            <div
              className="border p-4 rounded-lg shadow-sm flex flex-col items-center"
              key={product._id}
            >
              {product.imagePath ? (
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-md"
                  height={250}
                  width={250}
                  priority
                />
              ) : (
                <div className="w-full h-60 bg-gray-200 flex justify-center items-center rounded-md">
                  <span>No Image Available</span>
                </div>
              )}

              <h2 className="text-xl font-bold text-center">{product.name}</h2>
              <p className="text-center">{product.description}</p>
              <p className="text-center">
                ${discountedPrice}{" "}
                {product.discountPercentage > 0 && (
                  <span className="line-through text-red-500">
                    ${price.toFixed(2)}
                  </span>
                )}
              </p>
              <p className="text-center text-sm text-gray-500">
                {product.category}
              </p>
              <p className="text-center text-sm text-gray-500">
                Stock: {product.stockLevel}
              </p>
              <Link href={`/Products/${product.id}`}>
                <p className="text-black font-bold mt-2">View Details</p>
              </Link>
              <button
              className="bg-[#FFF9E5] text-black w-[8rem] h-[3rem] mt-2"
              onClick={() => handleAddToCart(product)} // Alert on click
            >
              Add to Cart
            </button>
            </div>
          );
        })}
      </div>

      {/* Cart Section */}
        <div className = "w-full">
      <div className="mx-auto my-[5rem] 2xl:w-[1500px]">
        <h3 className="text-[38px] font-bold text-center">Cart</h3>
        <div className="space-y-4">
        {cartItems.map((item, index) => (
  <div
    key={`${item.id}-${index}`} // Unique key using product id and index
    className="flex justify-between items-center border p-4 rounded-md"
  >
    <div>
      <h4 className="text-lg font-bold">{item.name}</h4>
      <p>{item.description}</p>
      {item.imagePath && (
        <Image
          src={item.imagePath}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-md mt-2"
          height={100}
          width={100}
        />
      )}
      <p>{item.price}</p>
      <p>{item.category}</p>
      <p>stock {item.stockLevel}</p>
    </div>
    <div className = "flex flex-col my-5">
    <Link href = "/Check-out"><button className = "bg-[#FFF9E5] text-black w-[8rem] h-[3rem]">Check Out</button></Link>

    <button
      className="text-red-500 font-bold"
      onClick={() => handleRemoveFromCart(item.id)} // Remove the clicked product
    >
      Remove
    </button>
    </div>
  </div>


          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
