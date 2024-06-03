import Logo from '../../images/logo.svg';

function Footer() {
  return (
    <footer className='mt-10 p-4 border-t'>
      <div className='w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0'>
        <div className='text-gray-600 mb-4 md:mb-0'>
          <img src={Logo} alt='finvestec logo' className='h-32' />
        </div>
        <div className='text-gray-600 text-center md:text-right'>
          <p className='font-semibold'>Address:</p>
          <p>finvestec GmbH</p>
          <p>Kister Str. 61</p>
          <p>97204 Höchberg</p>
          <p>Germany</p>
          <p className='font-semibold mt-2'>Contact:</p>
          <p>0931/730 442 86</p>
          <p>
            <a href='mailto:hello@finvestec-gmbh.de' className='text-customLink'>
              hello@finvestec-gmbh.de
            </a>
          </p>
        </div>
      </div>
      <div className='w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0 mt-4'>
        <p>&copy; 2024 Finvestec. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
