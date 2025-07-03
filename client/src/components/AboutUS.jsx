import aboutImg from "../assets/about-us1.jpg"; 

const AboutUs = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutImg}
            alt="About us"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Why Learn-X?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Learn-X is a platform designed to help you discover the most relevant and personalized learning content based on your interests and goals. Whether you're a student, professional, or lifelong learner, our curated courses will guide you toward the skills you need.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our mission is to make high-quality education accessible, engaging, and effective. We leverage intelligent matching algorithms to suggest courses and simplify your learning journey.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
