"use client"
import Image from "next/image";
import {useState} from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';


export default function SingleProduct(){
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
    return(
        <>
{/* Top Section */}
<div className="h-auto w-full">
  <div className="mx-auto px-[2rem] py-[2rem] sm:px-[5rem] sm:py-[5rem] h-auto flex flex-col sm:flex-row gap-[2rem] 2xl:w-[1500px]">
    
    {/* Left Section */}
    <div className="w-full sm:w-[553px] h-auto sm:h-[500px] flex gap-[1rem]">
      <div className="w-[76px] py-5 h-auto sm:h-[416px]">
        <Image src="/assets/Group 94-1.png" alt="Sofa" width={76} height={80} className="bg-[#FFF9E5] mb-5" />
        <Image src="/assets/Group 97-2.png" alt="Sofa" width={76} height={80} className="bg-[#FFF9E5] mb-5" />
        <Image src="/assets/Group 98-3.png" alt="Sofa" width={76} height={80} className="bg-[#FFF9E5] mb-5" />
        <Image src="/assets/Group 96-4.png" alt="Sofa" width={76} height={80} className="bg-[#FFF9E5] mb-5" />
      </div>
      <Image src="/assets/Asgaard sofa 1 (1).png" alt="Sofa" width={481} height={500} className="bg-[#FFF9E5]" />
    </div>

    {/* Right Section */}
    <div className="w-full sm:w-[606px] h-auto sm:h-[730px]">
      <h1 className="text-[32px] sm:text-[42px]">Asgaard Sofa</h1>
      <p className="text-[20px] sm:text-[24px] text-[#9F9F9F] my-[1rem]">250,000,00</p>
      
      {/* Review Row */}
      <div className="flex my-[1rem] gap-[2rem] items-center">
        <div className="flex gap-[0.5rem]">
          <Image src="/assets/carbon_star-half.png" alt="Sofa" width={20} height={20} />
          <Image src="/assets/dashicons_star-filled.png" alt="Sofa" width={20} height={20} />
          <Image src="/assets/dashicons_star-filled.png" alt="Sofa" width={20} height={20} />
          <Image src="/assets/dashicons_star-filled.png" alt="Sofa" width={20} height={20} />
          <Image src="/assets/dashicons_star-filled.png" alt="Sofa" width={20} height={20} />
        </div>
        <p className="text-[13px] text-[#9F9F9F]">5 Customer Reviews</p>
      </div>

      <p className="text-[13px] sm:text-[16px] my-[1rem]">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>

      {/* Size Row */}
      <div>
        <p className="text-[14px] text-[#9F9F9F] my-[1rem]">Size</p>
        <div className="flex gap-5">
          <button className="w-[30px] h-[30px] bg-[#FBEBB5]">L</button>
          <button className="w-[30px] h-[30px] bg-[#FAF4F4]">XL</button>
          <button className="w-[30px] h-[30px] bg-[#FAF4F4]">X5</button>
        </div>
      </div>

      {/* Color Row */}
      <div>
        <p className="text-[14px] text-[#9F9F9F] my-[1rem]">Color</p>
        <div className="flex gap-5">
          <button className="w-[30px] h-[30px] bg-[#816DFA] border rounded"></button>
          <button className="w-[30px] h-[30px] bg-[#000000] border rounded"></button>
          <button className="w-[30px] h-[30px] bg-[#CDBA7B] border rounded"></button>
        </div>
      </div>

      {/* Button Row */}
      <div className="flex gap-[2rem] my-[2rem]">
        <button
          className="w-[123px] h-[64px] border border-[#9F9F9F] rounded"
          onClick={handleClick}
        >
          {count === 0 ? `+ ${count}` : `- ${count} +`}
        </button>
        <button className="w-[215px] h-[64px] text-[20px] border border-black rounded">Add To Cart</button>
      </div>

      {/* Additional Information */}
      <div className="flex flex-col mt-[5rem]">
        <div className="flex gap-[5rem] my-[0.5rem]">
          <p className="text-[14px] text-[#9F9F9F] w-[5rem]">SKU</p>
          <p className="text-[14px] text-[#9F9F9F]">:SS001</p>
        </div>
        <div className="flex gap-[5rem] my-[0.5rem]">
          <p className="text-[14px] text-[#9F9F9F] w-[5rem]">Category</p>
          <p className="text-[14px] text-[#9F9F9F]">:Sofas</p>
        </div>
        <div className="flex gap-[5rem] my-[0.5rem]">
          <p className="text-[14px] text-[#9F9F9F] w-[5rem]">Tags</p>
          <p className="text-[14px] text-[#9F9F9F]">:Sofa, Chair, Home, Shop</p>
        </div>
        <div className="flex gap-[5rem] my-[0.5rem]">
          <p className="text-[14px] text-[#9F9F9F] w-[5rem]">Share</p>
          <div className="flex space-x-4">
            <FaLinkedin className="w-5 h-5" />
            <FaFacebook className="w-5 h-5" />
            <FaTwitter className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* 2nd Section */}
<div className="h-auto w-full">
  <div className="mx-auto px-[2rem] py-[2rem] sm:px-[5rem] sm:py-[5rem] 2xl:w-[1500px]">
    {/* First row */}
    <div>
      <ul className="flex flex-col sm:flex-row justify-center my-[1rem] gap-[2rem] items-center">
        <li className="text-[24px] text-[#9F9F9F]">Description</li>
        <li className="text-[24px] text-black">Additional Information</li>
        <li className="text-[24px] text-black">Review [5]</li>
      </ul>
    </div>

    {/* 2nd Row */}
    <div className="h-auto sm:h-[174px]">
      <p className="text-[16px] text-[#9F9F9F] mb-[1rem]">
        Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
      </p>
      <p className="text-[16px] text-[#9F9F9F]">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences, while the guitar-influenced leather strap enables easy and stylish travel.
      </p>
    </div>

    {/* 3rd Row Images */}
    <div className="h-auto sm:h-[348px] flex flex-col sm:flex-row gap-[1rem] my-[1rem]">
      <Image src="/assets/Mask group.png" alt="Sofa" width={605} height={174} className="bg-[#FFF9E5]" />
      <Image src="/assets/Cloud sofa three seater + ottoman_1 1.png" alt="Sofa" width={605} height={174} className="bg-[#FFF9E5]" />
    </div>
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
        </>
    )
}