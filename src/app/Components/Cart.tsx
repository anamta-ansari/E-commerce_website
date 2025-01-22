
import Image from "next/image";

export default function Cart(){
 
    return(
        <>
        {/* Cart Section */}
      <div className="w-full h-[540px] relative">
  <Image
    src="/assets/Rectangle 1 (1).png"
    alt="Instagram background"
    layout="fill"
    objectFit="cover"
    className="-z-10"
  />
  <div className="flex flex-col items-center justify-center absolute inset-0 text-black">
    <Image src="/assets/Meubel House_Logos-05.png" alt="" width={77} height={77} />
    <h1 className="text-[48px] font-poppins font-bold">Cart</h1>
    <p className="text-[14px] font-poppins">Home <span className="font-bold">Shop</span></p>
  </div>
</div>

{/* Hero Section */}
<div className="w-full">
  <div className="flex flex-col sm:flex-row items-center mx-auto px-4 sm:px-[5rem] py-[4rem] sm:py-[8rem] justify-center gap-8 2xl:w-[1500px]">
    {/* Left Div */}
    <div className="mt-[-7rem] w-full sm:w-[60%]">
      <div className="w-full h-[55px] bg-[#FFF9E5]">
        <ul className="flex items-center justify-between px-5 leading-[55px]">
          <li className="text-[16px] sm:text-[18px]">Product</li>
          <li className="text-[16px] sm:text-[18px]">Price</li>
          <li className="text-[16px] sm:text-[18px]">Quantity</li>
          <li className="text-[16px] sm:text-[18px]">Sub Total</li>
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row mt-[3rem] gap-6 sm:gap-10">
        <Image src="/assets/Asgaard-sofa.png" alt="Asgaard Sofa" width={106} height={106} className="bg-[#FBEBB5] w-[106px] h-[106px]" />
        <div className="flex gap-[1rem] justify-center">
          <p className="text-[14px] sm:text-[16px] text-gray-500 mt-2 sm:mt-10">Asgaard Sofa</p>
          <p className="text-[14px] sm:text-[16px] text-gray-500 mt-2 sm:mt-10">250,000,00</p>
          <button className="rounded border border-black mt-2 sm:mt-10 w-[2rem] h-[2rem] text-[14px] sm:text-[16px]">1</button>
          <p className="text-[14px] sm:text-[16px] text-black font-bold mt-2 sm:mt-10">250,000,00</p>
        </div>
      </div>
    </div>
    
    {/* Right Div */}
    <div className="w-full sm:w-[35%] h-[350px] bg-[#FFF9E5] flex flex-col justify-center items-center mt-8 sm:mt-0">
      <h1 className="text-[24px] sm:text-[32px] font-poppins mt-[-3rem] sm:mt-0 mb-[2rem]">Cart Totals</h1>
      <div>
        <div className="flex items-center mt-[1rem] py-3 gap-[3rem] sm:gap-[5rem]">
          <p className="text-[14px] sm:text-[16px] font-bold">SubTotal</p>
          <p className="text-[14px] sm:text-[16px] text-gray-500">Rs 250,000,00</p>
        </div>
        <div className="flex items-center py-3 gap-[3rem] sm:gap-[5rem]">
          <p className="text-[14px] sm:text-[16px] font-bold">Total</p>
          <p className="text-[16px] sm:text-[20px] text-[#B88E2F]">Rs 250,000,00</p>
        </div>
      </div>
      <button className="rounded w-[10rem] sm:w-[12rem] mt-[2rem] h-[3rem] border border-black py-2 sm:py-3 bg-[#FFF9E5] text-[14px] sm:text-[16px]">
        Check out
      </button>
    </div>
  </div>
</div>

    
    

{/* Bottom Section with Benefits */}
<div className="w-full bg-[#F4F4F4] h-max py-10 sm:py-[3rem]">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-5 2xl:w-[1500px] mx-auto h-full">
    {/* Free Delivery */}
    <div className="w-full sm:w-[30%] text-center sm:text-left px-4">
      <h1 className="text-[20px] sm:text-[32px] font-bold">Free Delivery</h1>
      <p className="text-gray-400 text-[16px] sm:text-base">
        For all orders over $50 consectetur <span className="block">adipim scing alit</span>
      </p>
    </div>

    {/* 90 Days Return */}
    <div className="w-full sm:w-[30%] text-center sm:text-left px-4">
      <h1 className="text-[20px] sm:text-[32px] font-bold">90 Days Return</h1>
      <p className="text-gray-400 text-[16px] sm:text-base">
        If goods have problems consectetur <span className="block">adipim scing alit</span>
      </p>
    </div>

    {/* Secure Payment */}
    <div className="w-full sm:w-[30%] text-center sm:text-left px-4">
      <h1 className="text-[20px] sm:text-[32px] font-bold">Secure Payment</h1>
      <p className="text-gray-400 text-[16px] sm:text-base">
        100% secure payments consectetur <span className="block">adipim scing alit</span>
      </p>
    </div>
  </div>
</div>

        </>
    )
}