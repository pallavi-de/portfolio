"use client";

export default function Navbar() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-8 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
        
        <div className="text-3xl font-bold">
          <span className="text-purple-500">Pallavi</span>
          <span className="text-white">Desai</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>

       <a
  href="https://drive.google.com/file/d/1vrHIGbUEH9ip1CZy3ebEWYwYO-hLA6Uv/view"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
>
  Resume
</a>
        
      </nav>
    </header>
  );
}