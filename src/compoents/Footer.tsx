// ---------------------------
// shell-app/src/components/Footer.tsx
// ---------------------------
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-4 border-t text-center text-sm text-gray-500 bg-white">
      <p>© 2025 IoEHub. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/terms" className="hover:underline">Terms</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
}
