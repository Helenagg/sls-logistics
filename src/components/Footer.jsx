import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className='bg-gradient-to-b from-gray-900 to-primary'>
        <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
          <div className='md:flex md:justify-between'>
            <div className='mb-6 md:mb-0'>
              <Link to='/' className='flex items-center'>
                <img
                  src='/logo-sls-blanco.png'
                  className='h-10 me-3'
                  alt='FlowBite Logo'
                />
                <span className='hidden self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                  SLS Logistics
                </span>
              </Link>
            </div>
            <div>
              <ul className='text-primary dark:text-gray-400 font-medium flex gap-10'>
                <li className='border border-primary rounded-lg bg-transparent p-3'>
                  <Link to='/' className='hover:underline '>
                    <FaFacebookSquare size={30} />
                  </Link>
                </li>
                <li className='border border-primary rounded-lg bg-transparent p-3'>
                  <Link to='/' className='hover:underline'>
                    <FaLinkedin size={30} />
                  </Link>
                </li>
                <li className='border border-primary rounded-lg bg-transparent p-3'>
                  <Link to='/' className='hover:underline'>
                    <FaInstagram size={30} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='grid grid-cols-1 gap-8 sm:gap-8 sm:grid-cols-2'>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white'>
                  Información
                </h2>
                <ul className='text-gray-200 dark:text-gray-400 font-medium'>
                  <li className='mb-2'>
                    <Link to='/sobre-nosotros' className='hover:underline'>
                      Quiénes Somos
                    </Link>
                  </li>
                  <li className='mb-2'>
                    <Link to='/contacto' className='hover:underline'>
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link to='/actualidad' className='hover:underline'>
                      Actualidad
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white'>
                  Legal
                </h2>
                <ul className='text-gray-200 dark:text-gray-400 font-medium'>
                  <li className='mb-2'>
                    <Link to='/' className='hover:underline'>
                      Política de privacidad
                    </Link>
                  </li>
                  <li className='mb-2'>
                    <Link to='/' className='hover:underline'>
                      Política de Cookies
                    </Link>
                  </li>
                  <li className='mb-2'>
                    <Link to='/' className='hover:underline'>
                      Declaración de Accesibilidad
                    </Link>
                  </li>
                  <li className='mb-2'>
                    <Link to='/' className='hover:underline'>
                      Aviso Legal
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
          <div className='flex justify-center'>
            <img
              className=''
              src='/logo-fondos.png'
              alt='Logo Fondos Next Generation'
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
