import Image from "next/image";
export default function About(){
    return(
        <>
         {/* About Section */}
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
          <h1 className="text-[48px] font-poppins font-bold">About</h1>
          <p className="text-[14px] font-poppins">Home <span className="font-bold">About</span></p>
        </div>
      </div>
        {/* Related products */}
      <div className="w-full h-auto px-4 py-8">
        <div className="mx-auto 2xl:w-[1500px]">
          <h1 className="text-[24px] md:text-[32px] lg:text-[36px] font-poppins text-center">Related Products</h1>
          <p className="text-[14px] md:text-[16px] font-poppins text-center">
            Find a bright ideal to suit your taste with our great selection of suspension, floor table and lights.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            <div className="text-center">
              <Image src="/assets/Trenton modular sofa_3 1.png" alt="Sofa" width={240} height={174} />
              <p className="font-poppins text-[16px]">Trenton modular sofa</p>
              <p className="text-[18px]">Rs.25000.00</p>
            </div>
            <div className="text-center">
              <Image src="/assets/Granite dining table with dining chair 1.png" alt="Dining table" width={240} height={174} />
              <p className="font-poppins text-[16px]">Granite dining table</p>
              <p className="text-[18px]">Rs.25000.00</p>
            </div>
            <div className="text-center">
              <Image src="/assets/Outdoor bar table and stool 1.png" alt="Outdoor table" width={240} height={174} />
              <p className="font-poppins text-[16px]">Outdoor bar table</p>
              <p className="text-[18px]">Rs.25000.00</p>
            </div>
            <div className="text-center">
              <Image src="/assets/Plain console with teak mirror 1.png" alt="Teak mirror" width={240} height={174} />
              <p className="font-poppins text-[16px]">Plain console with teak mirror</p>
              <p className="text-[18px]">Rs.25000.00</p>
            </div>
          </div>
          <h1 className="text-[16px] underline text-center font-bold mt-8">Veiw More</h1>
        </div>
      </div>
 
        {/* Our Blogs */}
<div className="w-full h-auto px-4 py-8">
  <div className="mx-auto 2xl:w-[1500px]">
    <h1 className="text-[24px] md:text-[32px] lg:text-[36px] font-poppins text-center">Our Blogs</h1>
    <p className="text-[14px] md:text-[16px] font-poppins text-center">
      Find a bright ideal to suit your taste with our great selection of suspension, floor table and lights.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[1.5rem]">
      {/* Blog Item 1 */}
      <div className="w-full">
        <Image src="/assets/Rectangle 13.png" alt="" width={393} height={393} className="mb-[1rem] border rounded" />
        <p className="text-[24px] text-center mb-[1rem]">Going all-in with millennial design</p>
        <h1 className="text-[18px] underline text-center font-bold mt-4">Read More</h1>
      </div>
      {/* Blog Item 2 */}
      <div className="w-full">
        <Image src="/assets/Rectangle 14.png" alt="" width={393} height={393} className="mb-[1rem] border rounded"/>
        <p className="text-[24px] text-center mb-[1rem]">Going all-in with millennial design</p>
        <h1 className="text-[18px] underline text-center font-bold mt-4">Read More</h1>
      </div>
      {/* Blog Item 3 */}
      <div className="w-full">
        <Image src="/assets/Rectangle 15.png" alt="" width={393} height={393} className="mb-[1rem] border rounded" />
        <p className="text-[24px] text-center mb-[1rem]">Going all-in with millennial design</p>
        <h1 className="text-[18px] underline text-center font-bold mt-4">Read More</h1>
      </div>
    </div>
    <h1 className="text-[16px] underline text-center font-bold mt-[3rem]">View All Posts</h1>
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

    );
}