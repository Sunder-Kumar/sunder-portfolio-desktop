'use client';

import React, { useState } from 'react';
import { events } from '@/data/portfolioData';
import { MapPin, Tag, Users, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Community() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="p-6 h-full overflow-y-auto text-white/90 bg-[#161626]">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Users className="w-6 h-6 text-cyan-400" />
          Community &amp; Events
        </h2>
        <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-400 to-transparent mt-1 rounded-full" />
      </div>
      <div className="space-y-10">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col gap-6 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Image */}
            <div 
              className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-black/30 aspect-[4/3] shrink-0 cursor-pointer group relative"
              onClick={() => event.image && setSelectedImage(event.image)}
            >
              {event.image ? (
                <>
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium">
                    <Search className="w-6 h-6 text-cyan-400" />
                    <span className="text-sm">Click to View</span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  No image available
                </div>
              )}
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 px-2 md:px-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                <div className="flex items-center gap-1.5 text-sm text-white/50">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                {event.team && (
                  <p className="text-sm text-white/40 mt-1">Team: {event.team}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {event.themes.map((theme) => (
                  <span
                    key={theme}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60"
                  >
                    <Tag className="w-3 h-3" />
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2.5 bg-black/60 hover:bg-black/90 rounded-full text-white transition-colors border border-white/20 shadow-xl z-50"
              onClick={() => setSelectedImage(null)}
              title="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Event Preview"
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl border border-white/20 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
