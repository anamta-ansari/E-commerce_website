import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full  text-black px-[5rem] py-[3rem]">
      <div className="mx-auto grid gap-10 2xl:w-[1500px] md:grid-cols-4 text-center md:text-left">
        {/* Address Section */}
        <div>
          <h1 className="text-[#9F9F9F] text-lg font-semibold mb-4">Address</h1>
          <p className="text-gray-600">
            400 University Drive Suite 200 <br />
            Coral Gables, FL 33134
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h1 className="text-[#9F9F9F] text-lg font-semibold mb-4">Links</h1>
          <ul className="space-y-2">
            <li className="text-black hover:text-gray-800 cursor-pointer" ><Link href="/">Home</Link></li>
            <li className="text-black hover:text-gray-800 cursor-pointer" ><Link href="/Shop">Shop</Link></li>
            <li className="text-black hover:text-gray-800 cursor-pointer" ><Link href="/About">About</Link></li>
            <li className="text-black hover:text-gray-800 cursor-pointer" ><Link href="/Contact">Contact</Link></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h1 className="text-[#9F9F9F] text-lg font-semibold mb-4">Help</h1>
          <ul className="space-y-2">
            <li className="text-black hover:text-gray-800 cursor-pointer">Payment Options</li>
            <li className="text-black hover:text-gray-800 cursor-pointer">Return</li>
            <li className="text-black hover:text-gray-800 cursor-pointer">Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h1 className="text-[#9F9F9F] text-lg font-semibold mb-4">Newsletter</h1>
          
          <form className="flex  ">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border border-none text-[#9F9F9F] underline  "
            />
            <button
              type="submit"
              className=" text-black px-4 py-2   underline transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* Footer Bottom */}
      <div className="mr-5">
        <p className="text-sm text-[#9F9F9F]">
          © 2022 Meubal House. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
