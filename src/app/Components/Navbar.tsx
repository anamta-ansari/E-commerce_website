"use client"
import React, { useState } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, UserIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-white text-black w-full">
      <div className="mx-auto flex justify-between items-center px-3 py-3 2xl:w-[1500px]">
        
        
        <ul className="px-4 hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
          <li><Link href="/Shop" className="hover:text-yellow-500">Shop</Link></li>
          <li><Link href="/About" className="hover:text-yellow-500">About</Link></li>
          <li><Link href="/Contact" className="hover:text-yellow-500">Contact</Link></li>
          <li><Link href="/Blog" className="hover:text-yellow-500">Blog</Link></li>
          
          <li><Link href="/My-Account" className="hover:text-yellow-500">My Account</Link></li>
          <li><Link href="/Products" className="hover:text-yellow-500">Products</Link></li>
          <li><Link href="/FAQs" className="hover:text-yellow-500">FAQs</Link></li>
        </ul>

      
        <div className="flex space-x-2">
          <button aria-label="Search" className="hover:text-yellow-500">
            <Link href="/Single-product">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </Link>
          </button>

          <button aria-label="Favorites" className="hover:text-yellow-500">
            <Link href="/Single-product">
              <HeartIcon className="h-6 w-6" />
            </Link>
          </button>

          <button aria-label="Cart" className="hover:text-yellow-500">
            <Link href="/Cart">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
          </button>

          <button aria-label="Profile" className="hover:text-yellow-500">
            <Link href="/My-Account">
              <UserIcon className="h-6 w-6" />
            </Link>
          </button>
        </div>

        {/* Hamburger Icon  */}
        <button 
          className="md:hidden p-2" 
          onClick={toggleMobileMenu}  
          aria-label="Open menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4 py-3 px-6">
          <li><Link href="/" className="hover:text-white" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link href="/Shop" className="hover:text-white" onClick={toggleMobileMenu}>Shop</Link></li>
          <li><Link href="/About" className="hover:text-white" onClick={toggleMobileMenu}>About</Link></li>
          <li><Link href="/Contact" className="hover:text-white" onClick={toggleMobileMenu}>Contact</Link></li>
          <li><Link href="/Blog" className="hover:text-white" onClick={toggleMobileMenu}>Blog</Link></li>
          
          <li><Link href="/My-Account" className="hover:text-white" onClick={toggleMobileMenu}>My Account</Link></li>
          <li><Link href="/Products" className="hover:text-white" onClick={toggleMobileMenu}>Products</Link></li>
          <li><Link href="/FAQs" className="hover:text-white" onClick={toggleMobileMenu}>FAQs</Link></li>
        </ul>
      </div>
    </nav>
  );
}
