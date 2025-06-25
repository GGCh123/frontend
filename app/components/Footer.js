// components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-black mt-10">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
