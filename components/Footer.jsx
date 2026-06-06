import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold">
            <span className="text-purple-500">Pallavi</span>
            <span className="text-white">Desai</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            © 2026 Pallavi Desai. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex gap-5 mt-10 md:mt-0">
          
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-purple-600 transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-purple-600 transition"
          >
            <FaLinkedinIn size={22} />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-purple-600 transition"
          >
            <FaTwitter size={22} />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-purple-600 transition"
          >
            <HiOutlineMail size={22} />
          </a>

        </div>
      </div>
    </footer>
  );
}