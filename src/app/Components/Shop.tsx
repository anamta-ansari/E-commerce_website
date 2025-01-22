import Image from "next/image";
export default function Shop(){
    return(
        <>
        {/*shop Section */}
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
    <h1 className="text-[48px] font-poppins font-bold">Shop</h1>
    <p className="text-[14px] font-poppins">Home <span className="font-bold">Shop</span></p>
  </div>
</div>



{/* Next Section */}
<div className="w-full h-[4rem] bg-[#F4F4F4]">
  <div className="mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10 2xl:w-[1500px]">
    
    
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 text-center sm:text-left w-full sm:w-auto">
      <div className="flex items-center gap-2">
        <Image src="/assets/Vector (1).png" alt="" width={19} height={16} />
        <p className="font-bold">Filter</p>
      </div>
      <div className="flex gap-3">
        <Image src="/assets/ci_grid-big-round.png" alt="" width={28} height={28} />
        <Image src="/assets/bi_view-list.png" alt="" width={24} height={24} />
      </div>
      <p className="font-bold">Showing 1-16 of 32 results</p>
    </div>
    
   
    <div className="flex gap-3 sm:gap-10 text-center sm:text-right w-full sm:w-auto">
      <p className="font-bold">Show</p>
      <button className="text-gray-400 h-[2.5rem] w-[3rem] leading-[2.5rem] bg-white">16</button>
      <p className="font-bold">Sort By</p>
      <button className="text-gray-400 h-[2.5rem] w-[5rem] leading-[2.5rem] bg-white">Default</button>
    </div>
    
  </div>
</div>


<div className="w-full h-auto px-4 py-8 sm:px-8 sm:py-12">
  <div className="mx-auto 2xl:w-[1500px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8 mt-4 sm:mt-8">
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
{/*next line */}
      <div className="text-center">
        <Image src="/assets/grain-coffee.png" alt="Teak mirror" width={240} height={174} />
        <p className="font-poppins text-[16px]">Grain Coffee Table</p>
        <p className="text-[18px]">Rs.15000.00</p>
      </div>
      <div className="text-center">
        <Image src="/assets/kent-coffee.png" alt="Teak mirror" width={240} height={174} />
        <p className="font-poppins text-[16px]">Kent Coffee Table</p>
        <p className="text-[18px]">Rs.225000.00</p>
      </div>
      <div className="text-center">
        <Image src="/assets/Round-coffee-table.png" alt="Teak mirror" width={240} height={174} />
        <p className="font-poppins text-[16px]">Round Coffee table_color</p>
        <p className="text-[18px]">Rs.251000.00</p>
      </div>
      <div className="text-center">
        <Image src="/assets/Reclaimed-tea-coffee.png" alt="Teak mirror" width={240} height={174} />
        <p className="font-poppins text-[16px]">Reclaimed Teak Coffee Table</p>
        <p className="text-[18px]">Rs.25,200.00</p>
      </div>
{/*next line */}
      <div className="text-center">
        <Image src="/assets/Plain-console.png" alt="Teak mirror" width={240} height={174} />
        <p className="font-poppins text-[16px]">Plain Console_</p>
        <p className="text-[18px]">Rs.25,200.00</p>
      </div>
      <div className="text-center">
        <Image src="/assets/Reclaimed-teak-sideboard.png" alt="Teak mirror" width={240} height={174} />
        <p className="font-poppins text-[16px]">Reclaimed Teak Side Board</p>
        <p className="text-[18px]">Rs.258,200.00</p>
      </div>
      <div className="text-center">
        <Image src="/assets/SJP-0825.png" alt="Teak mirror" width={240} height={174} />
        <p className="font-poppins text-[16px]">SJP_0B25</p>
        <p className="text-[18px]">Rs.200,200.00</p>
      </div>
      <div className="text-center">
        <Image src="/assets/Bella-chair-table.png" alt="Teak mirror" width={240} height={174} />
        <p className="font-poppins text-[16px]">Bella Chair and Table</p>
        <p className="text-[18px]">Rs.100,000.00</p>
      </div>
{/*next line */}
      <div className="text-center">
        <Image src="/assets/Granite square side table 1.png" alt="Teak mirror" width={240} height={174} />
        <p className="font-poppins text-[16px]">Granite Square Side table</p>
        <p className="text-[18px]">Rs.258,800.00</p>
      </div>
      <div className="text-center">
        <Image src="/assets/Asgaard sofa 1 (1).png" alt="Teak mirror" width={240} height={174} />
        <p className="font-poppins text-[16px]">Asgaard Sofa</p>
        <p className="text-[18px]">Rs.250,000.00</p>
      </div>
      <div className="text-center">
        <Image src="/assets/Maya-sofa.png" alt="Teak mirror" width={240} height={174} />
        <p className="font-poppins text-[16px]">Maya Sofa Three Seater</p>
        <p className="text-[18px]">Rs.115,000.00</p>
      </div>
      <div className="text-center">
        <Image src="/assets/outdoor-sofa.png" alt="Teak mirror" width={240} height={174} />
        <p className="font-poppins text-[16px]">Outdoor Sofa Set</p>
        <p className="text-[18px]">Rs.244,000.00</p>
      </div>
      
     
      <div className="gap-8 flex items-center justify-center my-8 sm:my-12">
        <button className="h-[50px] w-[50px] bg-[#FBEBB5] rounded">1</button>
        <button className="h-[50px] w-[50px] bg-[#FFF9E5] rounded">2</button>
        <button className="h-[50px] w-[50px] bg-[#FFF9E5] rounded">3</button>
        <button className="h-[50px] w-[98px] bg-[#FFF9E5] rounded">Next</button>
      </div>
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

    );
}