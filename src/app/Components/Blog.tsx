import Image from "next/image";
import { FiSearch } from 'react-icons/fi';
export default function Blog(){
    return(
        <>
        {/* Blog Section */}
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
    <h1 className="text-[48px] font-poppins font-bold">Blog</h1>
    <p className="text-[14px] font-poppins">Home <span className="font-bold">Blog</span></p>
  </div>
</div>

{/*hero section */}
  <div className="w-full">
  <div className="w-full mx-auto px-[5rem] py-[5rem] gap-[2rem] flex flex-col md:flex-row lg:flex-row 2xl:w-[1500px]">
    {/*left div*/}
    <div className="w-full md:w-[800px] lg:w-[800px]">
      <div className="w-full">
        <Image src="/assets/Rectangle 68-1.png" alt="" width={800} height={500} />
        <p className="text-[30px] font-bold">Going all-in with millennial design</p>
        <p className="text-gray-500 text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
        <h1 className="text-[20px] underline font-bold mt-5">Read more</h1>
      </div>
      <div className="w-full mt-[2rem]">
        <Image src="/assets/Rectangle 68-2.png" alt="" width={800} height={500} />
        <p className="text-[30px] font-bold">Exploring new ways of decorating</p>
        <p className="text-gray-500 text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
        <h1 className="text-[20px] underline font-bold mt-5">Read more</h1>
      </div>
      <div className="w-full mt-[2rem]">
        <Image src="/assets/Rectangle-68-3.png" alt="" width={800} height={500} />
        <p className="text-[30px] font-bold">Handmade pieces that took time to make</p>
        <p className="text-gray-500 text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
        <h1 className="text-[20px] underline font-bold mt-5">Read more</h1>
      </div>
      {/*buttons*/}
      <div className="gap-8 flex items-center justify-center my-[3rem]">
        <button className="h-[50px] w-[50px] bg-[#FBEBB5] rounded">1</button>
        <button className="h-[50px] w-[50px] bg-[#FFF9E5] rounded">2</button>
        <button className="h-[50px] w-[50px] bg-[#FFF9E5] rounded">3</button>
        <button className="h-[50px] w-[98px] bg-[#FFF9E5] rounded">Next</button>
      </div>
    </div>
    {/*right div*/}
    <div className="w-full md:w-[393px] lg:w-[393px]">
      <div className="w-[393px] h-[537px] flex flex-col items-center justify-center">
        <div className="relative w-[311px] h-[58px] mb-[1rem]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full pl-[30px] pr-[10px] text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={24}
          />
        </div>
        <div className="w-[251px] h-[353px]">
          <h1 className="text-[24px] my-[1rem]">Categories</h1>
          {/*1 row*/}
          <div className="flex justify-between my-[1rem]">
            <p className="text-[16px] text-[#9F9F9F]">Craft</p>
            <p className="text-[16px] text-[#9F9F9F]">2</p>
          </div>
          {/*2 row*/}
          <div className="flex justify-between my-[1rem]">
            <p className="text-[16px] text-[#9F9F9F]">Design</p>
            <p className="text-[16px] text-[#9F9F9F]">8</p>
          </div>
          {/*3 row*/}
          <div className="flex justify-between my-[1rem]">
            <p className="text-[16px] text-[#9F9F9F]">Handmade</p>
            <p className="text-[16px] text-[#9F9F9F]">7</p>
          </div>
          {/*4 row*/}
          <div className="flex justify-between my-[1rem]">
            <p className="text-[16px] text-[#9F9F9F]">Interior</p>
            <p className="text-[16px] text-[#9F9F9F]">1</p>
          </div>
          {/*5 row*/}
          <div className="flex justify-between my-[1rem]">
            <p className="text-[16px] text-[#9F9F9F]">wood</p>
            <p className="text-[16px] text-[#9F9F9F]">6</p>
          </div>
        </div>
      </div>
      <div className="w-[393px] h-[650px] flex flex-col items-center justify-center">
        <div className="w-[252px] h-[618px]">
          <h1 className="text-[24px] my-[1rem]">Recent Posts</h1>
          {/*1 blog*/}
          <div className="flex gap-5 my-[1rem]">
            <Image src="/assets/Rectangle 69-1.png" alt="" width={80} height={80} className="border rounded" />
            <div>
              <p className="text-[12px]">Going all-in with millennial design</p>
              <p className="text-[12px] text-[#9F9F9F]">30 Aug 2022</p>
            </div>
          </div>
          {/*2 blog*/}
          <div className="flex gap-5 my-[1rem]">
            <Image src="/assets/Rectangle 69-2.png" alt="" width={80} height={80} className="border rounded" />
            <div>
              <p className="text-[12px]">Exploring new ways of decorating</p>
              <p className="text-[12px] text-[#9F9F9F]">30 Aug 2022</p>
            </div>
          </div>
          {/*3 blog*/}
          <div className="flex gap-5 my-[1rem]">
            <Image src="/assets/Rectangle 69-3.png" alt="" width={80} height={80} className="border rounded" />
            <div>
              <p className="text-[12px]">Handmade pieces that took time to make</p>
              <p className="text-[12px] text-[#9F9F9F]">30 Aug 2022</p>
            </div>
          </div>
          {/*4 blog*/}
          <div className="flex gap-5 my-[1rem]">
            <Image src="/assets/Rectangle 69-4.png" alt="" width={80} height={80} className="border rounded" />
            <div>
              <p className="text-[12px]">Modern home in Milan</p>
              <p className="text-[12px] text-[#9F9F9F]">30 Aug 2022</p>
            </div>
          </div>
          {/*5 blog*/}
          <div className="flex gap-5 my-[1rem]">
            <Image src="/assets/Rectangle 69-5.png" alt="" width={80} height={80} className="border rounded" />
            <div>
              <p className="text-[12px]">Colorful office redesign</p>
              <p className="text-[12px] text-[#9F9F9F]">30 Aug 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Bottom Section with Benefits */}
      <div className="w-full bg-[#F4F4F4] h-[300px]">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-5 2xl:w-[1500px] mx-auto h-full">
    {/* Free Delivery */}
    <div className="w-full sm:w-[30%] text-center">
      <h1 className="text-[24px] sm:text-[32px] font-bold">Free Delivery</h1>
      <p className="text-gray-400 text-sm sm:text-base">
        For all orders over $50 consectetur <span className = "block"> adipim scing alit</span>
      </p>
    </div>

    {/* 90 Days Return */}
    <div className="w-full sm:w-[30%] text-center">
      <h1 className="text-[24px] sm:text-[32px] font-bold">90 Days Return</h1>
      <p className="text-gray-400 text-sm sm:text-base">
        If goods have problems consectetur <span className = "block"> adipim scing alit</span>
      </p>
    </div>

    {/* Secure Payment */}
    <div className="w-full sm:w-[30%] text-center">
      <h1 className="text-[24px] sm:text-[32px] font-bold">Secure Payment</h1>
      <p className="text-gray-400 text-sm sm:text-base">
        100% secure payments consectetur <span className = "block"> adipim scing alit</span>
      </p>
    </div>
  </div>
</div>
        </>
    )
}