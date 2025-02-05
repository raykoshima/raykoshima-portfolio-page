import { motion } from 'framer-motion';
import { FiBookOpen, FiCode, FiAward } from 'react-icons/fi';

const About = () => {
  // ข้อมูลทักษะและความสามารถ
  const skills = [
    { name: 'Python', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'TypeScript', level: 75 },
    { name: 'Node.js', level: 75 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'Minecraft', level: 99 },
  ];

  // ข้อมูลประสบการณ์
  const experiences = [
    {
      icon: FiCode,
      title: 'ประสบการณ์การพัฒนา',
      description: 'เริ่มต้นด้วย html php css และ hello world ตอนนี้ทำงานเป็น backend developer เขียน Django REST API'
    },
    {
      icon: FiBookOpen,
      title: 'การศึกษา',
      description: 'วิทยาลัยเทคนิคขอนแก่น คณะสารสนเทศ ตอนนี้มหาวิทยาลัยศรีปทุมวิทยาเขตขอนแก่น คณะเทคโนโลยีสารสนเทศ'
    },
    {
      icon: FiAward,
      title: 'รางวัลและความสำเร็จ',
      description: 'แข่งทักษะวิชาชีพอันดับ 1 จังหวัดและได้อันดับ 4 ภาคตะวันออกเฉียงเหนือ'
    }
  ];

  return (
    <section className="min-h-screen py-28 bg-gray-50 dark:bg-neutral-900" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* หัวข้อส่วน */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              เกี่ยวกับผม
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            esay person , talk hard
          </p>
        </motion.div>

        {/* ส่วนประสบการณ์ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white dark:bg-neutral-800 p-6 rounded-lg shadow 
                        hover:shadow-lg transition-all duration-300 overflow-hidden
                        before:absolute before:w-16 before:h-16 before:-left-8 before:-top-8 
                        before:bg-indigo-500/5 before:rounded-full before:transition-all before:duration-500
                        before:scale-0 before:opacity-0 hover:before:scale-100 hover:before:opacity-100
                        after:absolute after:w-16 after:h-16 after:-right-8 after:-bottom-8 
                        after:bg-purple-500/5 after:rounded-full after:transition-all after:duration-500
                        after:scale-0 after:opacity-0 hover:after:scale-100 hover:after:opacity-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-2.5 bg-gradient-to-br from-indigo-50 to-purple-50 
                              dark:from-indigo-900/20 dark:to-purple-900/20 rounded-md
                              transform transition-transform group-hover:scale-105 duration-300">
                  <exp.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400
                                    group-hover:text-purple-600 dark:group-hover:text-purple-400
                                    transition-colors duration-300" />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white
                             group-hover:text-indigo-600 dark:group-hover:text-indigo-400
                             transition-colors duration-300">
                  {exp.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed
                          group-hover:text-gray-800 dark:group-hover:text-gray-200
                          transition-colors duration-300">
                {exp.description}
              </p>
              <div className="absolute w-1.5 h-1.5 bg-indigo-500/30 top-0 left-0 
                            rounded-br-lg transform scale-0 origin-top-left
                            group-hover:scale-100 transition-transform duration-300" />
              <div className="absolute w-1.5 h-1.5 bg-purple-500/30 bottom-0 right-0 
                            rounded-tl-lg transform scale-0 origin-bottom-right
                            group-hover:scale-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>

        {/* ส่วนทักษะ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              ทักษะและความสามารถ
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                    <span className="text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* รายละเอียดเพิ่มเติม */}
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              เป้าหมายและแรงบันดาลใจ
            </h3>
            <div className="prose prose-indigo dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300">
                อยากเก็บเงินเยอะๆ 555 classic
              </p>
              {/* <p className="text-gray-600 dark:text-gray-300 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </p> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
