// pages/index.js
import Head from "next/head"; // Next.js component to modify the document head
import Navbar from "../components/Navbar"; // Custom Navbar component
import Footer from "../components/Footer"; // Custom Footer component
import { useEffect, useRef } from "react"; // React hooks for managing side effects and refs
import Typewriter from "typewriter-effect"; // Typewriter effect component
import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaMicrosoft,
} from "react-icons/fa"; // Import icons including Microsoft from react-icons library
import Link from "next/link"; // Next.js Link component for client-side navigation
import Slider from "react-slick"; // Slider component for carousels
import "slick-carousel/slick/slick.css"; // Slider styles
import "slick-carousel/slick/slick-theme.css"; // Additional slider styles
import certifications from "../data/certifications"; // Custom data file for certifications
import settings from "../data/sliderSettings"; // Custom settings for the slider
import path from "path"; // Node.js path module for file paths

// Fetch activities data from a JSON file at build time
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "activities.json"); // Get the file path
  const fs = (await import("fs")).default; // Import fs dynamically to avoid client-side bundling
  const jsonData = fs.readFileSync(filePath, "utf8"); // Read the file data as a string
  const activities = JSON.parse(jsonData); // Parse the string data to JSON

  return {
    props: {
      activities, // Return activities as props
    },
  };
}

// Main component for the home page
export default function Home({ activities, isDarkMode, toggleDarkMode }) {
  // Create a ref to store references to multiple elements
  const elementsRef = useRef([]);

  // useEffect hook to handle side effects
  useEffect(() => {
    const handleLoad = () => {
      // Create an intersection observer to detect when elements come into view
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view"); // Add 'in-view' class when element is in view
              observer.unobserve(entry.target); // Stop observing the element
            }
          });
        },
        { threshold: 0.1 } // Threshold for when the observer callback should be executed
      );

      // Observe each element stored in elementsRef
      elementsRef.current.forEach((el) => {
        if (el) {
          observer.observe(el);
        }
      });
    };

    if (document.readyState === "complete") {
      handleLoad(); // Execute handleLoad if the document is already loaded
    } else {
      window.addEventListener("load", handleLoad); // Add event listener for 'load' event
      return () => {
        window.removeEventListener("load", handleLoad); // Clean up the event listener
      };
    }
  }, []);

  return (
    <div className="scroll-smooth dark:bg-gray-900 dark:text-white">
      {" "}
      {/* Main container with smooth scrolling and dark mode styles */}
      <Head>
        <title>Shreevershith</title> {/* Page title */}
        <meta name="description" content="Shreevershith's Portfolio" />{" "}
        {/* Meta description for SEO */}
        <link rel="icon" href="/favicon.ico" /> {/* Favicon */}
      </Head>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />{" "}
      {/* Navbar component with dark mode props */}
      <main>
        {/* About section */}
        <section
          ref={(el) => (elementsRef.current[0] = el)}
          id="about"
          className="min-h-screen flex flex-col justify-center py-10 dark:bg-gray-900 slide-up"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-4">
              <h1 className="text-left text-8xl font-light tracking-wide text-black-200 dark:text-gray-300">
                SHREEVERSHITH KOLLABETTU
              </h1>
              <div className="text-xl mb-4 typewriter">
                <Typewriter
                  options={{
                    strings: ["I am the guy you are looking for"], // Text for typewriter effect
                    autoStart: true, // Auto start the typewriter
                    loop: false, // Do not loop the typewriter effect
                  }}
                />
              </div>
              <p className="text-l mb-4">
                If you’re seeking a versatile professional with a
                customer-centric approach, creative problem-solving skills, and
                a growth mindset, let’s connect and explore opportunities.
                Together, we can make a positive impact through innovative
                solutions and sustainable technologies.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center w-full">
              <div className="text-left flex-1 mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-3">My Skills</h2>{" "}
                <p className="mb-3">
                  SQL. R. Python. SAS. PowerBI. Tableau. Alteryx. Hadoop. Sqoop.
                  Hive. Impala. AWS Data engineering and ML Services. Adobe
                  Creative Suite. Appian. UiPath.
                </p>
                <p className="italic mb-3">
                  Data Analysis and Interpretation · Business Process Modeling
                  and Optimization · Product Strategy · Market Research · Agile
                  Methodologies · Negotiation and Influencing · Problem-Solving
                  · Stakeholder Management · Project management
                </p>
                <div className="flex flex-wrap space-x-4 mt-3">
                  <a
                    href="mailto:shreevershith@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full mb-2 hover:scale-105 transition-transform"
                  >
                    <FaEnvelope className="mr-2" /> Mail
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shreevershith-k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full mb-2 hover:scale-105 transition-transform"
                  >
                    <FaLinkedin className="mr-2" /> LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/shreevershith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full mb-2 hover:scale-105 transition-transform"
                  >
                    <FaInstagram className="mr-2" /> Instagram
                  </a>
                  <a
                    href="https://github.com/shreevershith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full mb-2 hover:scale-105 transition-transform"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </div>
              </div>

              <div className="md:ml-8 flex-shrink-0">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="rounded-t-lg rounded-b-lg w-[28rem] h-[40rem] object-cover"
                />{" "}
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section
          ref={(el) => (elementsRef.current[1] = el)}
          id="projects"
          className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center py-20 slide-up"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Individual project tiles */}
              <div
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://github.com/shreevershith/EstimationOfPhotometricRedshiftUsingDL",
                    "_blank"
                  )
                }
              >
                <img
                  src="/images/sdss-new-logo-72dpi.png"
                  alt="Estimation of Photometric Redshift"
                  className="rounded-t-lg w-full object-cover h-48 mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">
                  Estimation Of Photometric Redshift Using DL
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The objective of the project is to find the Photometric
                  Redshift from the data extracted from SDSS server. Data is
                  extracted from server through SQL. The extracted data is
                  sampled with many machine learning and deep learning-based
                  algorithms to calculate the best accurate photometric redshift
                  values.
                  <br />
                  <a
                    href="https://link.springer.com/chapter/10.1007/978-981-19-7455-7_24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                    onClick={(e) => e.stopPropagation()} // Prevents the GitHub link from being triggered
                  >
                    Related Publication
                  </a>
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://github.com/shreevershith/EmployeeDatabaseApplicationUsingPython",
                    "_blank"
                  )
                }
              >
                <img
                  src="/images/python.jpg"
                  alt="Employee Database using Python"
                  className="rounded-t-lg w-full object-cover h-48 mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">
                  Employee Database Application Using Python
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  An Employee Database Application using Python. Each time you
                  run the program, the user is allowed to repeatedly select from
                  the seven choices.
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://github.com/shreevershith/project3",
                    "_blank"
                  )
                }
              >
                <img
                  src="/images/nextjs.jpg"
                  alt="portfolio"
                  className="rounded-t-lg w-full object-cover h-48 mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">
                  Portfolio Website using Next.Js and Tailwind CSS
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A dynamic and responsive web application built with Next.js
                  for server-side rendering and routing, Tailwind CSS for
                  styling and responsive design, React for interactive UI
                  components, and Typewriter.js for engaging text animations. It
                  features project showcases with interactive hover effects, a
                  dark mode toggle for personalized viewing, a certification
                  carousel powered by react-slick, and a smooth scrolling
                  experience.
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://github.com/shreevershith/project4",
                    "_blank"
                  )
                }
              >
                <img
                  src="/images/project4.jpg"
                  alt="Project 4"
                  className="rounded-t-lg w-full object-cover h-48 mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">Project 4</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Description of Project 4. This project involves...
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://github.com/shreevershith/project5",
                    "_blank"
                  )
                }
              >
                <img
                  src="/images/project5.jpg"
                  alt="Project 5"
                  className="rounded-t-lg w-full object-cover h-48 mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">Project 5</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Description of Project 5. This project involves...
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://github.com/shreevershith/project6",
                    "_blank"
                  )
                }
              >
                <img
                  src="/images/project6.jpg"
                  alt="Project 6"
                  className="rounded-t-lg w-full object-cover h-48 mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">Project 6</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Description of Project 6. This project involves...
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="https://github.com/shreevershith"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline dark:text-blue-300"
              >
                View More on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Certifications section */}
        <section
          ref={(el) => (elementsRef.current[3] = el)}
          id="certification"
          className="min-h-screen bg-gray-200 dark:bg-gray-600 flex items-center justify-center py-20 slide-up"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Certifications
            </h2>
            <Slider {...settings}>
              {certifications.map((certification, index) => (
                <div
                  key={index}
                  className="px-4 flex flex-col justify-between h-[400px]"
                >
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transform transition-transform hover:scale-105 h-full"
                  >
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center h-full flex flex-col justify-between">
                      {certification.icon} {/* Display the icon */}
                      <h3 className="text-2xl font-semibold mb-4 flex-grow-0">
                        {certification.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 flex-grow">
                        {certification.description}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Recent Activity section */}
        <section
          ref={(el) => (elementsRef.current[2] = el)}
          id="recent-activity"
          className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center py-20 slide-up"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Recent Activity
            </h2>
            <div className="border-t border-gray-300 dark:border-gray-600 pt-8">
              <ul>
                {activities.slice(0, 6).map((activity, index) => (
                  <li key={index} className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">
                      {activity.date}
                    </h3>
                    <p>{activity.description}</p>
                    {activity.link && (
                      <a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View Publication
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-8">
                <Link href="/recentActivity" legacyBehavior>
                  <a className="text-blue-500 hover:underline flex items-center justify-center dark:text-blue-300">
                    <span>Older news...</span>
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-7.707a1 1 0 011.414-1.414l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L9.586 11l-1.293-1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer /> {/* Footer component */}
    </div>
  );
}
