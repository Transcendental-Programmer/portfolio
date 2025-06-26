import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, GitPullRequest, Code, Users, Star, GitFork } from 'lucide-react';

const OpenSource: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contributions = [
    {
      project: 'GFPOP & PeakSegOptimal',
      description: 'Enhanced changepoint detection packages with time-dependent constraints and isotonic regression algorithms',
      role: 'Core Contributor',
      contributions: [
        'Enhanced gfpop package by integrating new rule parameter for time-dependent constraints',
        'Implemented isotonic regression solver for normal loss in PeakSegOptimal',
        'Added comprehensive test cases via testthat for robust validation',
        'Reduced segmentation errors by 15% and improved package reliability by 20%'
      ],
      technologies: ['R', 'C++', 'igraph', 'testthat'],
      stats: {
        prs: 4,
        commits: 35,
        linesChanged: '2.1k',
        stars: 45
      },
      link: 'https://github.com/vrunge/gfpop',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      project: 'KCL (Kubernetes Configuration Language)',
      description: 'CNCF Sandbox project for cloud-native configuration management with strong typing',
      role: 'Type Safety Contributor',
      contributions: [
        'Fixed math.floor() function to return integers instead of floats',
        'Enhanced type safety for schema collections and lists',
        'Enforced strict type checking for schema-typed collections',
        'Improved numerical operations consistency and predictability'
      ],
      technologies: ['Rust', 'Kubernetes', 'YAML', 'Configuration Management'],
      stats: {
        prs: 2,
        commits: 8,
        linesChanged: '350+',
        stars: 1200
      },
      link: 'https://github.com/kcl-lang/kcl',
      color: 'from-green-500 to-emerald-500',
    },
    {
      project: 'Krkn Chaos Engineering',
      description: 'Kubernetes chaos engineering toolkit for testing system resilience and reliability',
      role: 'Feature Contributor',
      contributions: [
        'Added exclude_label feature for granular pod selection in chaos testing',
        'Fixed application outage scenario with empty pod selector validation',
        'Enhanced documentation for pod network scenario configurations',
        'Improved error handling and validation for chaos experiments'
      ],
      technologies: ['Python', 'Kubernetes', 'NetworkPolicies', 'Chaos Engineering'],
      stats: {
        prs: 3,
        commits: 15,
        linesChanged: '800+',
        stars: 890
      },
      link: 'https://github.com/krkn-chaos/krkn',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const overallStats = [
    { label: 'Total PRs', value: '9', icon: GitPullRequest, color: 'text-green-400' },
    { label: 'Commits', value: '58+', icon: Code, color: 'text-blue-400' },
    { label: 'Projects', value: '3', icon: Github, color: 'text-purple-400' },
    { label: 'Technologies', value: '12+', icon: Users, color: 'text-orange-400' },
  ];

  return (
    <section id="opensource" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Open Source Contributions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about giving back to the community through meaningful contributions to open source projects
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {overallStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-gray-600 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contribution Cards */}
        <div className="space-y-8">
          {contributions.map((contrib, index) => (
            <motion.div
              key={contrib.project}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{contrib.project}</h3>
                      <p className="text-gray-400 mb-3">{contrib.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${contrib.color} text-white`}>
                        {contrib.role}
                      </span>
                    </div>
                    <motion.a
                      href={contrib.link}
                      className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="h-6 w-6" />
                    </motion.a>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {contrib.contributions.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {contrib.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-300 mb-4">Contribution Stats</h4>
                  {[
                    { label: 'Pull Requests', value: contrib.stats.prs, icon: GitPullRequest },
                    { label: 'Commits', value: contrib.stats.commits, icon: Code },
                    { label: 'Lines Changed', value: contrib.stats.linesChanged, icon: GitFork },
                    { label: 'Stars Earned', value: contrib.stats.stars, icon: Star },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <stat.icon className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{stat.label}</span>
                      </div>
                      <span className="text-white font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;