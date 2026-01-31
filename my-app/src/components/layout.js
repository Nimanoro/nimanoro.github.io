import React from "react";
import { Outlet, Link } from "react-router-dom";

const GITHUB_URL = "https://github.com/Nimanoro";

export default function Layout() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-gray-900 h-16">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="text-white font-semibold tracking-tight">
            Nima <span className="text-green-400">Norouzi</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            <Link to="/work" className="text-gray-300 hover:text-white transition">
              Work
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-white transition">
              Projects
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition"
            >
              GitHub →
            </a>
          </nav>
        </div>
      </header>

      {/* Page content: offset by header height */}
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
}
