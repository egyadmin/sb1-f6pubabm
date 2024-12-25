import React from 'react';

export default function DuctingSystem() {
  return (
    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
      {/* Main Backbone Ducts */}
      <path
        d="M300,350 H700"
        className="stroke-blue-500"
        strokeWidth="6"
        strokeDasharray="5,5"
        fill="none"
      />
      
      {/* Building Connections - Primary */}
      <path
        d="M200,200 L300,350 M800,200 L700,350 M200,800 L300,650 M800,800 L700,650"
        className="stroke-blue-400"
        strokeWidth="4"
        fill="none"
      />
      
      {/* Building Connections - Secondary */}
      <path
        d="M350,500 L500,500 M650,500 L500,500"
        className="stroke-green-400"
        strokeWidth="4"
        strokeDasharray="10,5"
        fill="none"
      />

      {/* Manhole Connections */}
      <path
        d="M300,350 L300,650 M500,350 L500,650 M700,350 L700,650"
        className="stroke-purple-400"
        strokeWidth="4"
        fill="none"
      />

      {/* HDPE Duct Labels */}
      <g className="text-xs">
        <text x="450" y="330" className="fill-blue-600">HDPE 110mm - 5 Subducts</text>
        <text x="450" y="670" className="fill-purple-600">HDPE 110mm - 7 Subducts</text>
      </g>
    </svg>
  );
}