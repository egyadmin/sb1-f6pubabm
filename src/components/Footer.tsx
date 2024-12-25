import React from 'react';
import { Linkedin, Network, Globe2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <Network className="w-6 h-6 text-blue-300" />
            <span className="text-blue-100 font-medium">IT Aara Manager Tabuk Region</span>
          </div>
          <div className="h-4 w-px bg-blue-700 hidden md:block" />
          <div className="flex items-center gap-3">
            <Globe2 className="w-5 h-5 text-blue-300" />
            <span className="text-blue-100">Designed by Tamer El Gohary</span>
          </div>
          <div className="h-4 w-px bg-blue-700 hidden md:block" />
          <a
            href="https://www.linkedin.com/in/tamer-el-gohary-3a516570/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </footer>
  );
}