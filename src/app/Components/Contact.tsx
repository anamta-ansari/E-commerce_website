import Image from "next/image";
import React from "react";
import { GlobeAltIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
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
          <h1 className="text-[48px] font-poppins font-bold">Contact</h1>
          <p className="text-[14px] font-poppins">Home <span className="font-bold">Contact</span></p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-full  px-4 py-10">
        <div className="mx-auto text-center 2xl:w-[1500px]">
          <h1 className="text-[32px] font-poppins mb-4">Get in touch with us</h1>
          <p className="text-[16px] font-poppins mb-6 px-4 sm:px-8 lg:px-16">
            For more information about our products and services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
          </p>

          <div className="mx-auto flex flex-col sm:flex-row justify-between gap-8 p-5">
            {/* First Div (Contact Details) */}
            <div className="w-full sm:w-2/5 space-y-8">
              <ul className="list-none p-0">
                <div className="mb-10">
                  <li className="flex items-center text-2xl font-medium">
                    <GlobeAltIcon className="font-bold h-7 w-7 text-black " />
                    <span>Address</span>
                  </li>
                  <p className="text-gray-600 text-lg">236 6th Avenue, New<span className = "block">York NY10000, united</span><span className = "block">States</span></p>
                </div>
                <div className="mb-10">
                  <li className="flex items-center text-2xl font-medium">
                    <PhoneIcon className="font-bold h-7 w-7 text-black " />
                    <span>Phone</span>
                  </li>
                  <p className="text-gray-600 text-lg">Mobile +(84)-456-7890</p>
                  <p className="text-gray-600 text-lg">Hatline +(84)-456-7890</p>
                </div>
                <div className="mb-10">
                  <li className="flex items-center text-2xl font-medium">
                    <ClockIcon className="font-bold h-7 w-7 text-black " />
                    <span>Timing</span>
                  </li>
                  <p className="text-gray-600 text-lg">Mon - Fri: 9:00 AM - 22:00 PM</p>
                  <p className="text-gray-600 text-lg">Sat - Sun: 9:00 AM - 21:00 PM</p>
                </div>
              </ul>
            </div>

            {/* Second Div (Contact Form) */}
            <div className="w-full sm:w-1/2">
              <form className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Message"
                  className="p-4 text-lg border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="mt-4 px-8 py-4 bg-white border w-[10rem] border-gray-300 text-[16px] rounded hover:bg-yellow-600"
                >
                  Submit
                </button>
              </form>
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
  );
}
