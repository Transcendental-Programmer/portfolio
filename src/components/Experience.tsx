import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Machine Learning Engineer',
      company: 'Teeny Tech Track',
      location: 'Remote',
      period: 'May 2025 - Jun 2025',
      type: 'Internship',
      description: [
        'Engineered Persona RAG framework leveraging GPT-4.1 and FAISS to deliver sub-200ms personalized responses, and scaled to process 1K+ daily interactions with 99.9% uptime via GCP Kubernetes and GitHub Actions CI/CD',
        'Packaged microservices in Docker with Kubernetes orchestration, reducing deployment friction and release cycles by 60%',
        'Developed Question Generation using T5 and PyTorch, achieving <300ms inference latency with 85% BLEU and 88% ROUGE'
      ],
      technologies: ['GPT-4.1', 'FAISS', 'GCP', 'Kubernetes', 'Docker', 'T5', 'PyTorch', 'GitHub Actions'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Open Source Contributions',
      company: 'GFPOP & PeakSegOptimal Projects',
      location: 'Remote',
      period: 'Mar 2025 - Present',
      type: 'Open Source',
      description: [
        'Enhanced the gfpop package by integrating a new rule parameter to support time-dependent constraints, utilizing R, igraph, and comprehensive test cases via testthat for robust validation, resulting in a 20% improvement in package reliability',
        'Improved the PeakSegOptimal solver for unconstrained segmentation by modifying C++ core algorithms and bridging with R; added detailed unit tests to verify behavior under extreme penalty scenarios, reducing segmentation errors by 15%',
        'Collaborated actively on GitHub for iterative code reviews and efficient CI integration'
      ],
      technologies: ['R', 'C++', 'igraph', 'testthat', 'GitHub', 'CI/CD'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Software Engineer Intern',
      company: 'Jaffa.ai',
      location: 'Remote',
      period: 'Jul 2024 - Feb 2025',
      type: 'Internship',
      description: [
        'Developed scalable Python-based web services using Flask and FastAPI, integrating with Neo4j to automate data workflows and enhance financial document analysis',
        'Implemented robust CI/CD pipelines via GitHub Actions that streamlined deployment and testing of automation tools',
        'Optimized data ingestion through an XBRL parsing pipeline (Python, pyxbrl, BeautifulSoup4), significantly reducing integration time'
      ],
      technologies: ['Python', 'Flask', 'FastAPI', 'Neo4j', 'GitHub Actions', 'XBRL', 'BeautifulSoup4'],
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Automated Ride-Sharing Service Data Extraction',
      company: 'Freelance Project',
      location: 'Remote',
      period: 'Jan 2024 - Feb 2024',
      type: 'Freelance',
      description: [
        'Engineered targeted query generation using Azure OpenAI GPT-3.5-turbo with the Bing Search API, producing over 50 specialized queries to source 120+ relevant URLs',
        'Developed Python web scraping scripts with requests and BeautifulSoup to extract detailed service data from 100+ web pages',
        'Automated generation and validation of PDF reports using ReportLab, achieving a 98% accuracy rate in data retrieval'
      ],
      technologies: ['Python', 'Azure OpenAI', 'GPT-3.5-turbo', 'Bing Search API', 'BeautifulSoup', 'ReportLab'],
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey through internships, freelance work, and open-source contributions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-600"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot with subtle animation */}
                <motion.div 
                  className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full border-2 border-gray-600 z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                />

                {/* Connection line to content */}
                <div className={`absolute top-1.5 w-6 h-0.5 bg-gray-600 z-5 ${
                  index % 2 === 0 
                    ? 'left-9 md:left-1/2 md:transform md:translate-x-1' 
                    : 'left-9 md:right-1/2 md:left-auto md:transform md:-translate-x-1'
                }`}></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'
                }`}>
                  <motion.div
                    className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-5 border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center space-x-2 text-gray-400 mb-2">
                          <Briefcase className="h-4 w-4" />
                          <span className="text-sm font-medium">{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded-md text-xs font-medium bg-gray-700 text-gray-300 border border-gray-600">
                        {exp.type}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-base flex items-start leading-relaxed">
                          <span className="text-gray-500 mr-2 mt-1.5 text-sm">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-gray-700/50 text-gray-400 rounded text-xs border border-gray-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;