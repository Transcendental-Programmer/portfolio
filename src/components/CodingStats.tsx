import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, TrendingUp } from 'lucide-react';

const CodingStats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });



  return (
    <section id="stats" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Coding Statistics
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Live data from various competitive programming platforms showcasing consistent growth and achievements
          </p>
        </motion.div>

        {/* Real Embedded Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Codolio Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 relative"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Code className="h-5 w-5 mr-2 text-purple-400" />
              Competitive Programming Profile
            </h3>
            <div className="relative h-[500px]">
              <iframe 
                src="https://codolio.com/profile/arch_coder/card"
                className="w-full h-full rounded-lg border-0"
                title="Codolio Profile Card"
              />
              
              {/* Enhanced Animated Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0, 0.9, 0.9, 0],
                  scale: [0.8, 1, 1, 0.8],
                  y: [0, -5, 0, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.7, 1]
                }}
                className="absolute bottom-6 right-6 bg-gradient-to-r from-purple-600/80 to-blue-600/80 backdrop-blur-md rounded-xl px-4 py-3 pointer-events-none shadow-lg border border-purple-400/30"
              >
                <div className="flex items-center space-x-3 text-white">
                  <motion.span 
                    className="text-sm font-medium"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Scroll inside to explore
                  </motion.span>
                  <motion.div
                    animate={{ 
                      y: [0, 4, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="drop-shadow-sm"
                    >
                      <path d="M7 13l3 3 3-3"/>
                      <path d="M7 6l3 3 3-3"/>
                    </svg>
                    {/* Glowing effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/20"
                      animate={{ scale: [1, 1.3, 1], opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
              GitHub Statistics
            </h3>
            <div className="space-y-4">
              <img 
                src="https://github-readme-stats-eight-theta.vercel.app/api?username=Transcendental-Programmer&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true" 
                alt="GitHub Stats"
                className="w-full rounded-lg"
              />
              <img 
                src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=Transcendental-Programmer&layout=compact&langs_count=8&theme=tokyonight" 
                alt="Top Languages"
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* GitHub Open Source Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-8 bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-purple-400" />
            Open Source Contributions & Activity
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contribution Streak</h4>
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=Transcendental-Programmer&theme=dark&hide_border=true&background=1F2937&ring=3B82F6&fire=10B981&currStreakLabel=E5E7EB" 
                alt="GitHub Streak"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Activity Graph</h4>
              <img 
                src="https://github-readme-activity-graph.vercel.app/graph?username=Transcendental-Programmer&theme=github-dark-dimmed&hide_border=true&bg_color=1f2937&color=e5e7eb&line=3b82f6&point=10b981" 
                alt="GitHub Activity Graph"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingStats;