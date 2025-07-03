import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us + Social Icons */}
        <div>
          <h3 className="text-black text-xl font-semibold mb-4">About Us</h3>
          <p className="mb-4 text-gray-800">
            LearnX is your trusted partner to find the best courses tailored
            to your goals. Learn, grow, and succeed with personalized recommendations.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-black text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-800">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="#courses" className="hover:text-blue-400">Courses</a></li>
            <li><a href="/recommendations" className="hover:text-blue-400">Recommendations</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-black text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-800">
            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="/terms" className="hover:text-blue-400">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-black text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-4 text-gray-800">
            Subscribe to receive course updates and personalized recommendations.
          </p>
          <form className="relative flex flex-col sm:flex-row gap-2 max-w-sm">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email for newsletter"
              className="rounded-md bg-white w-full px-4 py-2 text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute bg-black top-0 right-0 h-full  hover:bg-gray-600 text-white rounded-r-md px-4 py-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} LearnX, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
