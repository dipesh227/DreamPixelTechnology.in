"use client";

import React from 'react';

const featuredLogos = [
  { name: "The Economic Times", classes: "text-gray-500 font-serif text-xl" },
  { name: "Hostinger", classes: "text-purple-600 font-bold text-2xl" },
  { name: "Cloudways", classes: "text-blue-500 font-sans font-extrabold text-2xl" },
  { name: "The Free Press Journal", classes: "text-red-700 font-serif font-bold text-xl" },
];

export function FeaturedInSection() {
  return (
    <section className="w-full py-20 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured In</h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {featuredLogos.map((logo) => (
            <div key={logo.name} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <p className={logo.classes}>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}