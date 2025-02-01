import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center" id="home">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/50 backdrop-blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="inline-block text-sm font-semibold text-indigo-600 tracking-wide uppercase bg-indigo-50 px-4 py-1 rounded-full">
              ยินดีต้อนรับสู่พอร์ตโฟลิโอของผม
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block text-gray-900 dark:text-gray-100">สวัสดี, ผมคือ</span>
              <span className="block mt-2">
                <TypeAnimation
                  sequence={[
                    'นักพัฒนาเว็บ',
                    1000,
                    'Frontend Developer',
                    1000,
                    'Your Name',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-600"
          >
            นักพัฒนาเว็บไซต์ที่หลงใหลในการสร้างสรรค์ประสบการณ์ดิจิทัลที่สวยงามและใช้งานง่าย
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex justify-center space-x-6"
          >
            {[
              { Icon: FiGithub, href: "https://github.com", label: "GitHub" },
              { Icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: FiMail, href: "https://gmail.com", label: "Email" }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-indigo-600 transition-colors rounded-full hover:bg-indigo-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
