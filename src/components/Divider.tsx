import React from 'react';

export default function Divider() {
  return (
    <div className="flex justify-center py-2 sm:py-3 md:py-4 lg:py-5 bg-black overflow-hidden">
      <img src="/delimiteur.png" alt="Divider" className="w-full max-w-4xl h-24 sm:h-28 md:h-36 lg:h-44 xl:h-48 object-cover object-center" />
    </div>
  );
}
