import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "โปรเจกต์ E-commerce",
      description: "เว็บไซต์ขายสินค้าออนไลน์ที่พัฒนาด้วย React และ Node.js รองรับการชำระเงินและระบบจัดการสินค้า",
      image: "https://placehold.co/600x400/5046e5/ffffff?text=E-commerce+Project",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
    {
      title: "แอพพลิเคชันจัดการงาน",
      description: "แอพพลิเคชันจัดการงานและติดตามความคืบหน้า พร้อมระบบแจ้งเตือนและการทำงานร่วมกัน",
      image: "https://placehold.co/600x400/4338ca/ffffff?text=Task+Management",
      tags: ["React", "Firebase", "Redux", "Material-UI"],
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
    {
      title: "เว็บไซต์ท่องเที่ยว",
      description: "เว็บไซต์แนะนำสถานที่ท่องเที่ยว พร้อมระบบค้นหาและรีวิว รองรับการใช้งานในทุกอุปกรณ์",
      image: "https://placehold.co/600x400/3730a3/ffffff?text=Travel+Website",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
  ];

  return (
    <section className="min-h-screen py-28" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            ผลงานของผม
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            นี่คือตัวอย่างผลงานที่ผมภูมิใจนำเสนอ แต่ละโปรเจกต์สะท้อนถึงความตั้งใจและความเชี่ยวชาญของผม
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden group"
            >
              {/* ภาพ Project */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                {/* Overlay ด้วยลิงค์ */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/25 text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/25 text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              {/* ข้อมูล Project */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                    >
                      {tag}
                    </span>
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

export default Projects;
