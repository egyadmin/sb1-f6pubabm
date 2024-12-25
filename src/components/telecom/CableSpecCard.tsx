import React from 'react';
import { Cable } from 'lucide-react';

interface CableSpecCardProps {
  title: string;
  image: string;
  types: {
    name: string;
    specs: string[];
  }[];
}

export default function CableSpecCard({ title, image, types }: CableSpecCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-video relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 text-white">
            <div className="flex items-center gap-2">
              <Cable className="w-5 h-5" />
              <h4 className="font-semibold">{title}</h4>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        {types.map((type, index) => (
          <div key={index} className="space-y-2">
            <h5 className="font-medium text-gray-800">{type.name}</h5>
            <ul className="space-y-1">
              {type.specs.map((spec, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}