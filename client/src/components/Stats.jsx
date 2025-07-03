import React from 'react';
import { FaBook, FaUsers, FaVideo } from 'react-icons/fa';
import worldImg from '../assets/world2.jpg';

const Stats = () => {
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center py-32 px-4"
      style={{ backgroundImage: `url(${worldImg})` }}
    >
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-center font-semibold text-3xl sm:text-4xl text-gray-900 drop-shadow-md">
          Preferred By Learners And Educators.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 text-center text-gray-900">
          {/* Courses */}
          <div className="p-6 ">
            <div className="mx-auto w-20 h-20 flex items-center justify-center mb-2">
              <FaBook className="w-10 h-10 text-black" />
            </div>
            <div className="text-xl font-bold" id="courseCount">100+</div>
            <div className="text-lg font-medium">Courses</div>
          </div>

          {/* Videos */}
          <div className="p-6">
            <div className="mx-auto w-20 h-20 flex items-center justify-center mb-2">
              <FaVideo className="w-10 h-10 text-black" />
            </div>
            <div className="text-xl font-bold" id="videoCount">100+</div>
            <div className="text-lg font-medium">Videos</div>
          </div>

          {/* Users */}
          <div className="p-6 ">
            <div className="mx-auto w-20 h-20 flex items-center justify-center mb-">
              <FaUsers className="w-10 h-10 text-black" />
            </div>
            <div className="text-xl font-bold" id="userCount">100+</div>
            <div className="text-lg font-medium">Users</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
