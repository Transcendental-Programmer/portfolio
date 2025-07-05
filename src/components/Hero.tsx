import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Code, GitPullRequest } from 'lucide-react';
import developerImg from '../assets/developer.jpg';
import resumePDF from '../assets/Priyansh_Saxena_IIITM_Gwalior_resume_full_stack_ML (4).pdf';

const Hero: React.FC = () => {
  const [stats, setStats] = useState({
    githubContributions: 0,
    problemsSolved: 0,
  });

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Priyansh_Saxena_Resume.pdf';
    link.click();
  };

  useEffect(() => {
    // Simulate fetching live stats
    const fetchStats = async () => {
      // In a real implementation, you'd fetch from actual APIs
      setTimeout(() => {
        setStats({
          githubContributions: 230,
          problemsSolved: 973,
        });
      }, 1000);
    };

    fetchStats();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <img
                src={developerImg}
                alt="Developer"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-white via-gray-100 to-blue-100 bg-clip-text text-transparent">
            Priyansh Saxena
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto font-medium"
        >
          Full-Stack Machine Learning Engineer
          <br />
          <span className="text-lg text-gray-200 font-normal">
            Passionate about building scalable solutions and contributing to open-source projects
          </span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
          >
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </motion.button>
          <motion.button
            className="border border-gray-300 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: Github, href: 'https://github.com/Transcendental-Programmer', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/priyansh-saxena-ml-engineer/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:priyena.career@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              className="text-gray-200 hover:text-white transition-colors p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Live Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Github,
              value: stats.githubContributions,
              label: 'Total Commits',
              suffix: ' this year',
              color: 'from-green-400 to-green-600',
            },
            {
              icon: Code,
              value: stats.problemsSolved,
              label: 'Problems Solved',
              suffix: ' across platforms',
              color: 'from-blue-400 to-blue-600',
            },
            {
              icon: GitPullRequest,
              value: 15,
              label: 'Open Source PRs',
              suffix: ' merged',
              color: 'from-purple-400 to-purple-600',
            },
          ].map(({ icon: Icon, value, label, suffix, color }) => (
            <motion.div
              key={label}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${color} mb-4`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {value.toLocaleString()}
              </div>
              <div className="text-gray-300">
                {label}
                <span className="text-sm block text-gray-400">{suffix}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;