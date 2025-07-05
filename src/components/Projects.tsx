import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import llmExcelImg from '../assets/llm_excel.png';
import fedModelImg from '../assets/fed_model.png';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const projects = [
    {
      title: 'Privacy-Preserving Financial Data Generation System',
      description: 'Federated learning framework with RAG integration for GDPR-compliant financial data analysis',
      longDescription: 'Architected a federated learning framework with RAG integration using TensorFlow Federated and Hugging Face Transformers, achieving 92% statistical similarity with original data while maintaining GDPR compliance. Devised a Docker/Kubernetes based scalable deployment that supported 500+ concurrent training sessions with 99.9% uptime.',
      image: fedModelImg,
      technologies: ['TensorFlow Federated', 'Hugging Face Transformers', 'Docker', 'Kubernetes', 'GitLab CI/CD'],
      timeline: 'Aug 2024 - Dec 2024',
      highlights: [
        'Achieved 92% statistical similarity with original data',
        'Maintained full GDPR compliance throughout',
        'Supported 500+ concurrent training sessions',
        '99.9% uptime with Docker/Kubernetes deployment'
      ],
      githubUrl: 'https://github.com/Transcendental-Programmer/FinFedRAG-Financial-Federated-RAG',
      liveUrl: 'https://huggingface.co/spaces/ArchCoder/federated-credit-scoring',
      category: 'Machine Learning',
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Anomaly Detection in IoT Data Streams',
      description: 'Real-time IoT streaming analysis system with auto-scaling and MLflow monitoring',
      longDescription: 'Led development of a real-time IoT streaming analysis system (Apache Kafka, MQTT, Python) that processed 10,000 data points per second at 98% accuracy. Implemented containerized deployment (Docker, Kubernetes) and auto-scaling measures to handle up to 200% load increases within 30 seconds.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Apache Kafka', 'MQTT', 'Python', 'Docker', 'Kubernetes', 'MLflow'],
      timeline: 'May 2024 - Jun 2024',
      highlights: [
        'Processed 10,000 data points per second',
        'Achieved 98% accuracy in anomaly detection',
        'Auto-scaling for 200% load increases in 30 seconds',
        '95% model accuracy with automated retraining'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'IoT & Analytics',
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'LLM Integrated Excel Plotter Chatbot',
      description: 'AI-powered Excel tool with BART and CLIP integration for intelligent chart generation',
      longDescription: 'Fine-tuned a BART model (PyTorch, Transformers) achieving 90% query interpretation accuracy and CLIP model verification with 95% precision in chart validation. Created an innovative solution that allows users to generate complex visualizations using natural language commands.',
      image: llmExcelImg,
      technologies: ['PyTorch', 'Transformers', 'BART', 'CLIP', 'React', 'Node.js'],
      timeline: 'Mar 2024 - Apr 2024',
      highlights: [
        '90% query interpretation accuracy with BART',
        '95% precision in chart validation with CLIP',
        'Natural language to visualization conversion',
        'Seamless Excel integration'
      ],
      githubUrl: 'https://github.com/Transcendental-Programmer/LLM-Integrated-Excel-Plotter-App',
      liveUrl: 'https://llm-integrated-excel-plotter-app.vercel.app/',
      category: 'Web Development',
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my most impactful projects spanning machine learning, web development, and system design
          </p>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-8 min-h-[600px]"
            >
              {/* Project Image - Enhanced for better balance */}
              <div className="lg:w-2/5 flex flex-col">
                <div className="relative overflow-hidden rounded-xl flex-1 min-h-[400px] lg:min-h-full">
                  <motion.img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${projects[currentIndex].color} text-white`}>
                      {projects[currentIndex].category}
                    </span>
                  </div>
                  
                  {/* Project number indicator */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{currentIndex + 1}</span>
                  </div>
                </div>
              </div>

              {/* Project Details - Enhanced for better content distribution */}
              <div className="lg:w-3/5 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                      {projects[currentIndex].title}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-400 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{projects[currentIndex].timeline}</span>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {projects[currentIndex].longDescription}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Achievements</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {projects[currentIndex].highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-green-400 mr-3 mt-1 flex-shrink-0">✓</span>
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentIndex].technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50 backdrop-blur-sm hover:bg-gray-600/50 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons - Always at bottom */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-700/50">
                  <motion.a
                    href={projects[currentIndex].githubUrl}
                    className="flex items-center justify-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="h-5 w-5" />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={projects[currentIndex].liveUrl}
                    className={`flex items-center space-x-2 bg-gradient-to-r ${projects[currentIndex].color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 text-white p-3 rounded-full hover:bg-gray-700 transition-all z-10"
            aria-label="Previous project"
            title="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 text-white p-3 rounded-full hover:bg-gray-700 transition-all z-10"
            aria-label="Next project"
            title="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-600'
              }`}
              aria-label={`Go to project ${index + 1}`}
              title={`Project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;