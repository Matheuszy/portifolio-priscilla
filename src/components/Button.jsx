import React from 'react';

export default function Button({ href, icon: Icon, text, colorClass }) {
  return (
    <a 
      href={href} 
      className={`flex items-center justify-center gap-2 text-white py-4 px-8 rounded-full font-bold transition-transform hover:scale-105 shadow-lg ${colorClass}`}
    >
      {Icon && <Icon size={24} />}
      {text}
    </a>
  );
}