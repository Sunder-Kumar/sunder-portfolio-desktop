"use client";
import React, { useState } from "react";
import { Project } from "@/data/portfolioData";
import { ArrowLeft, Github, ExternalLink, AlertTriangle, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-[#1e1e1e] min-h-full pb-20 relative">
      {/* Hero section */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-gradient-to-b from-gray-900 to-black">
        {project.screenshots[0] ? (
          <img 
            src={project.screenshots[0].src}
            alt={project.name} 
            className="w-full h-full object-cover opacity-40 cursor-pointer" 
            onClick={() => setSelectedImage(project.screenshots[0].src)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-black/50 pointer-events-none" />
        
        {/* Navigation & Title */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 w-fit px-4 py-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white/90 transition-colors border border-white/10"
          >
            <ArrowLeft size={18} /> Back to Projects
          </button>
          
          <div className="max-w-4xl mx-auto w-full mb-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm text-white/90 border border-white/10">
                {project.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-md ${
                project.status === "Live" ? "bg-green-500/20 text-green-300 border border-green-500/30" :
                project.status === "WIP" ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30" :
                "bg-gray-500/40 text-gray-200 border border-gray-500/30"
              }`}>
                {project.status}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.name}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-8 space-y-12">
        {/* Links & Quick actions */}
        <div className="flex gap-4 border-b border-white/10 pb-8">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors font-medium text-white">
              <Github size={20} /> View Source
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors font-medium text-white shadow-lg shadow-blue-900/20">
              <ExternalLink size={20} /> Live Demo
            </a>
          )}
        </div>

        {/* Purpose */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white/90">Overview</h2>
          <p className="text-lg text-white/70 leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/10">
            {project.purpose}
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white/90">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span key={tech} className="px-4 py-2 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white/90">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.facts.map((fact, idx) => (
              <li key={idx} className="flex gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-blue-400 mt-1">✦</div>
                <div className="text-white/80">{fact}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* Limitations */}
        {project.limitations && (
          <section>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-orange-400">
                <AlertTriangle size={20} /> Current Limitations
              </h2>
              <ul className="space-y-2">
                <li className="text-orange-200/80 text-sm flex gap-2">
                  <span>•</span> <span>{project.limitations}</span>
                </li>
              </ul>
            </div>
          </section>
        )}

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white/90">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, idx) => (
                <div 
                  key={screenshot.src} 
                  onClick={() => setSelectedImage(screenshot.src)}
                  className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/40 cursor-pointer shadow-lg hover:border-blue-400/50 transition-all duration-300 flex items-center justify-center p-2 min-h-[220px]"
                >
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.label || `Screenshot ${idx + 1}`} 
                    className="w-full h-auto max-h-[320px] object-contain rounded-lg group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium rounded-xl">
                    <Search className="w-6 h-6 text-blue-400" />
                    <span className="text-sm">{screenshot.label || "Click to Enlarge"}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
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
                alt="Project Screenshot Preview"
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl border border-white/20 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
