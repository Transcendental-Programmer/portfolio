import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'C++', level: 90, color: 'from-blue-500 to-blue-700' },
        { name: 'Java', level: 85, color: 'from-red-400 to-red-600' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-600' },
        { name: 'GO', level: 75, color: 'from-cyan-400 to-cyan-600' },
        { name: 'R', level: 82, color: 'from-purple-400 to-purple-600' },
      ],
    },
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'TensorFlow/Keras', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'PyTorch', level: 85, color: 'from-red-500 to-red-700' },
        { name: 'Scikit-Learn', level: 92, color: 'from-green-400 to-green-600' },
        { name: 'Hugging Face Transformers', level: 88, color: 'from-purple-500 to-purple-700' },
        { name: 'LangChain/LangGraph', level: 87, color: 'from-indigo-400 to-indigo-600' },
        { name: 'OpenCV/CLIP', level: 80, color: 'from-pink-400 to-pink-600' },
      ],
    },
    {
      title: 'Backend & Web Development',
      skills: [
        { name: 'Django/Flask', level: 92, color: 'from-green-400 to-green-600' },
        { name: 'FastAPI', level: 90, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Node.js/React.js', level: 78, color: 'from-emerald-400 to-emerald-600' },
        { name: 'RESTful APIs', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'Apache Kafka/MQTT', level: 82, color: 'from-orange-500 to-red-500' },
      ],
    },
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'Pandas/NumPy', level: 95, color: 'from-blue-500 to-blue-700' },
        { name: 'Apache Spark', level: 83, color: 'from-orange-400 to-orange-600' },
        { name: 'Neo4j/MongoDB', level: 85, color: 'from-green-500 to-teal-500' },
        { name: 'MySQL/PostgreSQL', level: 87, color: 'from-indigo-400 to-indigo-600' },
        { name: 'BeautifulSoup/Selenium', level: 90, color: 'from-yellow-400 to-yellow-600' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker/Kubernetes', level: 85, color: 'from-blue-500 to-purple-500' },
        { name: 'AWS/Azure', level: 82, color: 'from-orange-500 to-red-500' },
        { name: 'GitHub Actions/GitLab CI', level: 88, color: 'from-gray-400 to-gray-600' },
        { name: 'Git/Version Control', level: 92, color: 'from-green-400 to-green-600' },
      ],
    },
    {
      title: 'Specialized Skills',
      skills: [
        { name: 'Financial Data Processing', level: 88, color: 'from-purple-400 to-purple-600' },
        { name: 'Federated Learning', level: 80, color: 'from-pink-400 to-pink-600' },
        { name: 'Graph RAG/Vector Search', level: 85, color: 'from-indigo-500 to-indigo-700' },
        { name: 'XBRL Parsing', level: 87, color: 'from-cyan-500 to-cyan-700' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
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
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {category.title}
                </span>
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-300">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git', 'Linux', 'Vim', 'Webpack', 'Jest', 'Selenium', 'Nginx', 
              'Jenkins', 'Grafana', 'Elasticsearch', 'RabbitMQ', 'Kafka'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-full text-gray-300 hover:border-gray-500 hover:text-white transition-all cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;