"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-0.05">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Logo หรือชื่อบริษัท */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Your Company</h2>
          <p className="text-sm text-black">สร้างสรรค์สิ่งที่ดีที่สุดเพื่อคุณ</p>
        </div>

        {/* เมนูลิงก์ */}
        <div className="flex justify-center space-x-6">
          <Link href="/" className="hover:underline text-black hover:text-white text-sm">
            หน้าแรก
          </Link>
          <Link href="/about" className="hover:underline text-black hover:text-white text-sm">
            เกี่ยวกับ
          </Link>
          <Link href="/contact" className="hover:underline text-black hover:text-white text-sm">
            ติดต่อเรา
          </Link>
        </div>

        {/* Copyright และโซเชียล */}
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-white text-gray-400" aria-label="Facebook">
              🌐
            </a>
            <a href="#" className="hover:text-white text-gray-400" aria-label="Twitter">
              🐦
            </a>
            <a href="#" className="hover:text-white text-gray-400" aria-label="Instagram">
              📸
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
