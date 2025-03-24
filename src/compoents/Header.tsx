// ---------------------------
// shell-app/src/components/Header.tsx
// ---------------------------
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 border-b flex justify-between items-center bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">
        <Link to="/">IoEHub</Link>
      </h1>
      <nav className="space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/docs" className="hover:text-blue-600">Docs</Link>
        <Link to="/mcp" className="hover:text-blue-600">MCP</Link>
        <Link to="/device" className="hover:text-blue-600">Devices</Link>
        <Link to="/project" className="hover:text-blue-600">Projects</Link>
        <Link to="/login" className="bg-blue-600 text-white px-3 py-1 rounded">Login</Link>
      </nav>
    </header>
  );
}