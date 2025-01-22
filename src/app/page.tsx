import Image from "next/image";
import Link from "next/link";
export default function Home(){
    return(
        <>
        {/* Hero Section */}
      <div className="bg-[#FBEBB5] w-full h-[1000px] mt-[-3.5rem]">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-center h-full 2xl:w-[1500px] px-4">
          <div className="text-center md:text-left">
            <h1 className="text-[40px] md:text-[48px] lg:text-[64px] font-poppins">Rocket single</h1>
            <h1 className="text-[40px] md:text-[48px] lg:text-[64px] font-poppins">Seater</h1>
            <h1 className="text-[14px] md:text-[16px] underline"><Link href = "/Check-out">Shop now</Link></h1>
          </div>
          {/* Image */}
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]">
            <Image
              src="/assets/Rocket single seater 1.png"
              alt="Rocket single seater"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
        </div>
      </div>
        {/* Side Table */}
      <div className="w-full h-auto bg-[#FAF4F4] px-4 py-8">
        <div className="mx-auto flex flex-col gap-8 md:flex-row items-center justify-around 2xl:w-[1500px]">
          {/* Side Table */}
          <div className="flex flex-col items-center text-center md:text-left md:flex-1">
            <h1 className="font-poppins font-bold text-[18px] md:text-[20px]">Side table</h1>
            <h1 className="text-[14px] md:text-[16px] underline"><Link href = "/Check-out">Shop now</Link></h1>
            <Image
              src="/assets/Granite square side table 1.png"
              alt="Granite square side table"
              width={400}
              height={400}
            />
          </div>
          {/* Cloud Sofa */}
          <div className="flex flex-col items-center text-center md:text-left md:flex-1">
            <h1 className="font-poppins font-bold text-[18px] md:text-[20px]">Cloud Sofa</h1>
            <h1 className="text-[14px] md:text-[16px] underline"><Link href = "/Check-out">Shop now</Link></h1>
            <Image
              src="/assets/Cloud sofa three seater + ottoman_3 1.png"
              alt="Cloud sofa three seater"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Top Picks */}
      <div className="w-full h-auto px-4 py-8">
        <div className="mx-auto 2xl:w-[1500px]">
          <h1 className="text-[24px] md:text-[32px] lg:text-[36px] font-poppins text-center">Top Picks For You</h1>
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
          <h1 className="text-[16px] underline text-center font-bold mt-8"><Link href = "/Shop">Veiw More</Link></h1>
        </div>
      </div>

      {/* Asgaard Sofa */}
      <div className="w-full h-auto bg-[#FFF9E5] py-8">
        <div className="mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 2xl:w-[1500px]">
          <Image
            src="/assets/Asgaard sofa 1 (1).png"
            alt="Asgaard sofa"
            width={700}
            height={450}
          />
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-[20px] lg:text-[24px]">New Arrivals</h1>
            <h1 className="font-bold text-[28px] lg:text-[38px]">Asgaard sofa</h1>
            <button  className="mt-4 w-[200px] h-[64px] bg-white border border-black text-[16px] rounded">
              <Link href="/Single-product">Order Now</Link>
            </button>
          </div>
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
    <h1 className="text-[16px] underline text-center font-bold mt-[3rem]" ><Link href = "/Blog">View All Posts</Link></h1>
  </div>
</div>




      {/* Our Instagram */}
      <div className="w-full h-[540px] relative">
        <Image
          src="/assets/Frame 1.png"
          alt="Instagram background"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black">
          <h1 className="text-[30px] md:text-[50px] font-poppins font-extrabold">Our Instagram</h1>
          <p className="text-[16px] md:text-[20px] font-poppins">Follow our store on Instagram</p>
          <button className="mt-4 px-6 py-2 bg-[#F4F4F4] text-black border border-black font-bold rounded">
            Follow Us
          </button>
        </div>
      </div>

        </>
    );
}