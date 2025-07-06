
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Blog = () => {








  const docsLinks = [
    { name: 'React', url: 'https://react.dev/' },
    { name: 'React TypeScript Cheatsheet', url: 'https://react-typescript-cheatsheet.netlify.app/' },
    { name: 'React Router', url: 'https://reactrouter.com/' },
    { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
    { name: 'Next.js', url: 'https://nextjs.org/docs' },
    { name: 'Vite', url: 'https://vitejs.dev/guide/' },
    { name: 'Create React App', url: 'https://create-react-app.dev/docs/getting-started/' },
    { name: 'Node.js', url: 'https://nodejs.org/en/docs' },
    { name: 'Express.js', url: 'https://expressjs.com/en/starter/installing.html' },
    { name: 'NestJS', url: 'https://docs.nestjs.com/' },
    { name: 'GraphQL', url: 'https://graphql.org/learn/' },
    { name: 'Apollo Client', url: 'https://www.apollographql.com/docs/react/' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/docs/' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs' },
    { name: 'Material UI', url: 'https://mui.com/' },
    { name: 'Lucide Icons', url: 'https://lucide.dev/docs/lucide-react/' },
    { name: 'Framer Motion', url: 'https://www.framer.com/motion/' },
    { name: 'Jest', url: 'https://jestjs.io/docs/getting-started' },
    { name: 'Testing Library', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
    { name: 'Vitest', url: 'https://vitest.dev/' },
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 flex justify-center items-center">
                <BookOpen className="h-12 w-12 text-green-400 mr-4" /> Useful Developer Docs
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Official documentation to level up your coding</p>
            </motion.div>
          </div>
        </section>



        {/* Docs Section */}
        <section className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docsLinks.map((doc, index) => (
                <motion.a key={doc.name} href={doc.url} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-gray-800/80 rounded-lg border border-gray-700 hover:border-green-400/50 text-green-400 hover:text-green-300">
                  <span>{doc.name}</span> <ExternalLink className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Blog;
