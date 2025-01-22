import Image from "next/image";
export default function MyAccount(){
    return(
        <>
        {/* my account */}
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
    <h1 className="text-[48px] font-poppins font-bold">My Account</h1>
    <p className="text-[14px] font-poppins">Home <span className="font-bold">My Account</span></p>
  </div>
</div>

{/* hero */} 
<div className="w-full">
  <div className="mx-auto flex flex-col sm:flex-row md:flex-row px-[2rem] py-[2rem] sm:px-[5rem] sm:py-[5rem] gap-[2rem] sm:gap-[5rem] md:gap-[3rem] 2xl:w-[1500px]">
    {/* Left - Log In Section */}
    <div className="w-full sm:w-[608px] md:w-[50%] h-auto sm:h-[630px] flex flex-col">
      <h1 className="font-bold text-[32px] sm:text-[48px] my-[1rem]">Log In</h1>
      <label className="font-bold my-[0.5rem]">Username or email address</label>
      <input
        type="text"
        placeholder=""
        className="w-full sm:w-[423px] md:w-[90%] h-[75px] my-[0.5rem] text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <label className="font-bold my-[0.5rem]">Password</label>
      <input
        type="text"
        placeholder=""
        className="w-full sm:w-[423px] md:w-[90%] h-[75px] my-[0.5rem] text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <div className="flex my-[0.5rem]">
        <input type="checkbox" value="value" className="w-4 h-4"  />
        <span className="ml-[1rem] text-[14px] sm:text-[16px]">Remember me</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-8 my-[1rem]">
        <button type = "submit" className="w-full sm:w-[150px] md:w-[160px] h-[64px] bg-white border border-black text-[14px] rounded">
          Log In
        </button>
        <p className="text-[14px] sm:text-[16px] mt-[1rem] sm:mt-0">Lost your password?</p>
      </div>
    </div>

    {/* Right - Register Section */}
    <div className="w-full sm:w-[608px] md:w-[50%] h-auto sm:h-[630px] flex flex-col">
      <h1 className="font-bold text-[32px] sm:text-[48px] my-[1rem]">Register</h1>
      <label className="font-bold my-[0.5rem]">Username or email address</label>
      <input
        type="text"
        placeholder=""
        className="w-full sm:w-[423px] md:w-[90%] h-[75px] my-[0.5rem] text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <p className="text-black text-[12px] sm:text-[14px] my-[1rem]">
        A link to set a new password will be sent to your email.
      </p>
      <p className="text-black text-[12px] sm:text-[14px] my-[1rem]">
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.
      </p>
      <button type = "submit" className="mt-4 w-full sm:w-[150px] md:w-[160px] h-[64px] bg-white border border-black text-[14px] rounded">
        Register
      </button>
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