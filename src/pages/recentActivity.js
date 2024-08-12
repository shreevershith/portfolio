// pages/recentActivity.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'activities.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const activities = JSON.parse(jsonData);

  return {
    props: {
      activities,
    },
  };
}

export default function RecentActivity({ activities, isDarkMode, toggleDarkMode }) {
  return (
    <div className="scroll-smooth dark:bg-gray-900 dark:text-white">
      <Head>
        <title>Recent Activity - Shreevershith</title>
        <meta name="description" content="Shreevershith's Recent Activity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Activity</h2>
          <div className="border-t border-gray-300 dark:border-gray-600 pt-8">
            {activities.map((activity, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{activity.date}</h3>
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
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
