import React from 'react';
import { FaBook, FaUsers, FaVideo } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import worldImg from '../assets/world2.jpg';

const fadeInUp = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
};

const Stats = () => {
  const { ref, inView } = useInView(false);

  return (
    <section
      ref={ref}
      className="relative bg-cover bg-no-repeat bg-center py-32 px-4"
      style={{ backgroundImage: `url(${worldImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-center font-semibold text-3xl sm:text-4xl text-gray-900 drop-shadow-md">
          Preferred By Learners And Educators.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 text-center text-gray-900">
          {/* Courses */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="p-6"
          >
            <div className="mx-auto w-20 h-20 flex items-center justify-center mb-2">
              <FaBook className="w-10 h-10 text-black" />
            </div>
            <div className="text-xl font-bold">
              {inView && <CountUp end={120} duration={3} />}+
            </div>
            <div className="text-lg font-medium">Courses</div>
          </motion.div>

          {/* Videos */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="p-6"
          >
            <div className="mx-auto w-20 h-20 flex items-center justify-center mb-2">
              <FaVideo className="w-10 h-10 text-black" />
            </div>
            <div className="text-xl font-bold">
              {inView && <CountUp end={350} duration={3} />}+
            </div>
            <div className="text-lg font-medium">Videos</div>
          </motion.div>

          {/* Users */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="p-6"
          >
            <div className="mx-auto w-20 h-20 flex items-center justify-center mb-2">
              <FaUsers className="w-10 h-10 text-black" />
            </div>
            <div className="text-xl font-bold">
              {inView && <CountUp end={5000} duration={3} />}+
            </div>
            <div className="text-lg font-medium">Users</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
