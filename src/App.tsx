import Footer from '@/components/Footer/Footer.tsx';
import Sections from '@/components/SectionList/SectionList.tsx';

export const App = () => {
  return (
    <div className='w-full min-h-screen bg-background-lines bg-cover bg-center bg-no-repeat'>
      <div className='w-full max-w-4xl mx-auto p-8 bg-white bg-opacity-70 backdrop-blur-md shadow-md rounded-lg'>
        <h1 className='text-4xl font-bold text-gray-800'>finvestec</h1>
        <h2 className='text-2xl font-semibold mb-4 text-gray-600'>CUTTING EDGE SEO</h2>
        <h3 className='text-2xl font-semibold mb-4 text-gray-600'>Impressum</h3>
        <Sections />
        <Footer />
      </div>
    </div>
  );
};
