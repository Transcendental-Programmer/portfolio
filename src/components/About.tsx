import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, MapPin, Calendar, Download } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: 'Institute Rank 5 ICPC 2024-25',
      description: 'Highest rank in entire year batch',
      icon: Award,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: '5-Star CodeChef (2005 rating)',
      description: 'Top 1% of 200,000+ programmers globally',
      icon: Award,
      color: 'from-green-400 to-emerald-500',
    },
    {
      title: 'LeetCode Knight Badge',
      description: '450+ algorithmic problems solved',
      icon: Award,
      color: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'Indian Olympiad in Astronomy',
      description: 'Top 264 students nationwide (2021-22)',
      icon: Award,
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with expertise in machine learning, full-stack development, and open-source contributions
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 min-h-[600px]">
          {/* Left Column - Summary - Balanced width */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate Full-Stack ML Engineer currently pursuing B.Tech in Information Technology 
                  at IIITM Gwalior. With expertise spanning machine learning, web development, and competitive 
                  programming, I love building scalable solutions that make a real impact in financial data 
                  analysis and automation.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey includes significant contributions to open-source projects like GFPOP and 
                  PeakSegOptimal, software engineering internship at Jaffa.ai, and a track record of 
                  excellence in competitive programming with Institute Rank 5 in ICPC 2024-25 and 5-Star 
                  rating on CodeChef.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>IIITM Gwalior, India</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar className="h-5 w-5 text-green-400" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Resume download section with better integration */}
            <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium mb-1">Interested in my full background?</h4>
                  <p className="text-gray-400 text-sm">Download my complete resume with detailed experience and projects</p>
                </div>
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2.5 rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all flex-shrink-0 ml-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education & Achievements - Balanced width */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2 flex flex-col space-y-8"
          >
            {/* Education */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 flex-shrink-0">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Education</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-700/50">
                  <h4 className="text-lg font-semibold text-white">Bachelor of Technology</h4>
                  <p className="text-gray-400">Information Technology</p>
                  <p className="text-gray-500">ABV - IIITM Gwalior • 2022-2026</p>
                  <p className="text-sm text-green-400 mt-1">CGPA: 7.5/10</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Senior Secondary</h4>
                  <p className="text-gray-400">CBSE Board</p>
                  <p className="text-gray-500">2022</p>
                  <p className="text-sm text-green-400 mt-1">90.2%</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Key Achievements</h3>
              <div className="grid grid-cols-1 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} flex-shrink-0`}>
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-lg font-semibold text-white leading-tight">{achievement.title}</h4>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;