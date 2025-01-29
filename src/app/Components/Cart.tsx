"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imagePath?: string;
};

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Fetch cart data from localStorage
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemove = (id: string) => {
    // Remove the item from the cart state
    const updatedCart = cartItems.filter(item => item.id !== id);

    // Update the cart in the localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update the state with the new cart
    setCartItems(updatedCart);
  };

  const handleClick = (id: string, action: string) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        let updatedQuantity = item.quantity;

        if (action === "increase" && item.quantity < 100) {
          updatedQuantity = item.quantity + 1;
        } else if (action === "decrease" && item.quantity > 1) {
          updatedQuantity = item.quantity - 1;
        }

        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });

    // Update localStorage with the updated cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update the state with the new cart
    setCartItems(updatedCart);
  };

  return (
    <>
      {/* Cart Section */}
      <div className="w-full h-[540px] relative">
        <Image
          src="/assets/Rectangle 1 (1).png"
          alt="Cart background"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
        <div className="flex flex-col items-center justify-center absolute inset-0 text-black">
          <Image src="/assets/Meubel House_Logos-05.png" alt="" width={77} height={77} />
          <h1 className="text-[48px] font-poppins font-bold">Cart</h1>
          <p className="text-[14px] font-poppins">
            Home <span className="font-bold">Shop</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full">
        <div className="flex flex-col sm:flex-row items-center mx-auto px-4 sm:px-[5rem] py-[4rem] sm:py-[8rem] justify-center gap-8 2xl:w-[1500px]">
          {/* Left Div */}
          <div className="mt-[-7rem] w-full sm:w-[60%]">
            <div className="w-full h-[55px] bg-[#FFF9E5]">
              <ul className="flex items-center justify-between px-2 leading-[55px]">
                <li className="text-[16px] sm:text-[18px]">Product</li>
                <li className="text-[16px] sm:text-[18px]">Price</li>
                <li className="text-[16px] sm:text-[18px]">Quantity</li>
                <li className="text-[16px] sm:text-[18px]">Sub Total</li>
              </ul>
            </div>

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row mt-[3rem] gap-6 sm:gap-10">
                  <Image
                    src={item.imagePath || "/assets/default-product.png"}
                    alt={item.name}
                    width={106}
                    height={106}
                    className="bg-[#FBEBB5] w-[106px] h-[106px]"
                  />
                  <div className="flex gap-[1rem] justify-center">
                    <p className="text-[14px] sm:text-[16px] text-gray-500 mt-2 sm:mt-10">
                      {item.name}
                    </p>
                    <p className="text-[14px] sm:text-[16px] text-gray-500 mt-2 sm:mt-10">
                      Rs {item.price.toLocaleString()}
                    </p>

                    {/* Single Quantity Change Button */}
                    <button
  className="w-[123px] h-[64px] border border-[#9F9F9F] rounded flex justify-center items-center"
  onClick={() => handleClick(item.id, item.quantity > 1 ? "decrease" : "increase")}
>
  {item.quantity > 1 ? `- ${item.quantity}` : `+ ${item.quantity}`}
</button>


                    <p className="text-[14px] sm:text-[16px] text-black font-bold mt-2 sm:mt-10">
                      Rs {(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 text-sm sm:text-base mt-2 sm:mt-10"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 mt-5">Your cart is empty.</p>
            )}
          </div>

          {/* Right Div */}
          <div className="w-full sm:w-[35%] h-[350px] bg-[#FFF9E5] flex flex-col justify-center items-center mt-8 sm:mt-0">
            <h1 className="text-[24px] sm:text-[32px] font-poppins mt-[-3rem] sm:mt-0 mb-[2rem]">
              Cart Totals
            </h1>
            <div>
              <div className="flex items-center mt-[1rem] py-3 gap-[3rem] sm:gap-[5rem]">
                <p className="text-[14px] sm:text-[16px] font-bold">SubTotal</p>
                <p className="text-[14px] sm:text-[16px] text-gray-500">
                  Rs{" "}
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toLocaleString()}
                </p>
              </div>
              <div className="flex items-center py-3 gap-[3rem] sm:gap-[5rem]">
                <p className="text-[14px] sm:text-[16px] font-bold">Total</p>
                <p className="text-[16px] sm:text-[20px] text-[#B88E2F]">
                  Rs{" "}
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toLocaleString()}
                </p>
              </div>
            </div>
            <button className="rounded w-[10rem] sm:w-[12rem] mt-[2rem] h-[3rem] border border-black py-2 sm:py-3 bg-[#FFF9E5] text-[14px] sm:text-[16px]">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
