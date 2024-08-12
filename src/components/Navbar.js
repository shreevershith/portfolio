import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const router = useRouter();

  return (
    <nav className="bg-gray-800 dark:bg-gray-700 p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="text-white text-2xl font-bold">Shreevershith Kollabettu</a>
        </Link>
        <div className="space-x-4 flex items-center">
          <Link href="/#about" legacyBehavior>
            <a className="text-white hover:text-gray-400">About</a>
          </Link>
          <Link href="/#projects" legacyBehavior>
            <a className="text-white hover:text-gray-400">Projects</a>
          </Link>
          <Link href="/#certification" legacyBehavior>
            <a className="text-white hover:text-gray-400">Certification</a>
          </Link>
          <Link href="/#recent-activity" legacyBehavior>
            <a className="text-white hover:text-gray-400">Recent Activity</a>
          </Link>
          <a
            href="https://drive.google.com/link-to-your-resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            CV
          </a>

          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none"
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isDarkMode ? 'translate-x-4' : ''
              }`}
            ></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
