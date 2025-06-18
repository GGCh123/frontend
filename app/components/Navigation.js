'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">โลโก้ของคุณ</div>

        {/* ปุ่ม toggle บนมือถือ */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-2xl p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* เมนูสำหรับหน้าจอใหญ่ */}
        <ul className="hidden sm:flex gap-6">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-800 hover:text-blue-600 transition duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* เมนูมือถือ */}
      {menuOpen && (
        <ul className="flex flex-col gap-3 mt-4 sm:hidden">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block text-gray-800 hover:text-blue-600 transition duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

const navLinks = [
  { label: 'หน้าแรก', href: '/' },
  { label: 'เกี่ยวกับ', href: '/about' },
  { label: 'บริการของเรา', href: '/service' },
  { label: 'ติดต่อ', href: '/contact' },
];
