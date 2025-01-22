import Image from "next/image";
export default function Checkout(){
    return(
        <>
        {/* Check out Section */}
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
          <h1 className="text-[48px] font-poppins font-bold">Check Out</h1>
          <p className="text-[14px] font-poppins">Home <span className="font-bold">Check Out</span></p>
        </div>
      </div>

{/* Next Section */}
<div className="w-full">
  <div className="w-full mx-auto flex flex-col sm:flex-row gap-[2rem] sm:gap-[5rem] px-4 sm:px-[5rem] py-[3rem] sm:py-[5rem] 2xl:w-[1500px]">
    {/* Left Div with Form */}
    <div className="w-full sm:w-[50%]">
      <h1 className="font-bold text-[32px] sm:text-[48px]">Billing Details</h1>
      <form className="flex flex-col gap-6 w-full">
        {/* First Row */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between">
          <div className="w-full sm:w-[48%]">
            <label className="font-bold">First Name</label>
            <input
              type="text"
              placeholder=""
              className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full sm:w-[48%]">
            <label className="font-bold">Last Name</label>
            <input
              type="text"
              placeholder=""
              className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        {/* 2nd Row */}
        <label className="font-bold">Company Name (Optional)</label>
        <input
          type="text"
          placeholder=""
          className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="font-bold">Country / Region</label>
        <input
          type="text"
          placeholder=""
          className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <label className="font-bold">Street Address</label>
        <input
          type="text"
          placeholder=""
          className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <label className="font-bold">Town / City</label>
        <input
          type="text"
          placeholder=""
          className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <label className="font-bold">Province</label>
        <input
          type="text"
          placeholder=""
          className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <label className="font-bold">Zip Code</label>
        <input
          type="text"
          placeholder=""
          className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <label className="font-bold">Phone</label>
        <input
          type="text"
          placeholder=""
          className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <label className="font-bold">Email Address</label>
        <input
          type="email"
          placeholder=""
          className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Additional Information"
          className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </form>
    </div>

    {/* Right Div */}
    <div className="w-full sm:w-[50%] mt-[3rem] sm:mt-0">
      {/* Product and Subtotal */}
      <div className="flex justify-between my-[1rem]">
        <p className="font-bold text-[16px] sm:text-[20px]">Product</p>
        <p className="font-bold text-[16px] sm:text-[20px]">Subtotal</p>
      </div>

      {/* Product Details */}
      <div className="flex justify-between my-[1rem]">
        <p className="text-gray-500 text-[14px] sm:text-[16px]">Asgaard Sofa <span className="text-black">x 1</span></p>
        <p className="text-gray-500 text-[14px] sm:text-[16px]">Rs 250,000,00</p>
      </div>

      {/* Subtotal and Total */}
      <div className="flex justify-between my-[1rem]">
        <p className="text-black text-[14px] sm:text-[16px]">Sub Total</p>
        <p className="text-gray-500 text-[14px] sm:text-[16px]">Rs 250,000,00</p>
      </div>

      <div className="flex justify-between my-[1rem]">
        <p className="text-black text-[14px] sm:text-[16px]">Total</p>
        <p className="font-bold text-[#B88E2F] text-[16px] sm:text-[20px]">Rs 250,000,00</p>
      </div>

      {/* Payment Methods */}
      <div className="my-[1rem]">
        <input type="radio" value="value" />
        <span className="ml-[2rem] text-[14px] sm:text-[16px]">Direct Bank Transfer</span>
      </div>
      <p className="text-gray-500 text-[14px] sm:text-[16px] my-[1rem]">
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your Order will not be shipped until the funds have cleared in our account.
      </p>
      <div className="my-[1rem] text-gray-500">
        <input type="radio" value="value" />
        <span className="ml-[2rem] text-[14px] sm:text-[16px]">Direct Bank Transfer</span>
      </div>
      <div className="my-[1rem] block text-gray-500">
        <input type="radio" value="value" />
        <span className="ml-[2rem] text-[14px] sm:text-[16px]">Cash On Delivery</span>
      </div>
      <p className="text-black text-[14px] sm:text-[16px] my-[1rem]">
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.
      </p>

      {/* Place Order Button */}
      <div className="flex justify-center my-[1rem]">
        <button type = "submit" className="mt-4 w-[180px] sm:w-[200px] h-[64px] bg-white border border-black text-[14px] sm:text-[16px] rounded">
          Place Order
        </button>

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
    )
}