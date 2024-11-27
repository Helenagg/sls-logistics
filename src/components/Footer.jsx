import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import AccessibleLink from './Accessibility/AccessibleLink';

const Footer = () => {
  return (
    <>
      <footer className='bg-gradient-to-b from-gray-900 to-primary pt-0 md:pt-10'>
        <div className='mx-auto w-full max-w-screen-xl px-6 p-4 py-6 lg:py-8'>
          <div className='md:flex md:justify-between'>
            <div className='mb-6 md:mb-0'>
              <AccessibleLink to='/' className='flex items-center' aria-label='Ir a página de inicio'>
                <img
                  src='/logo-sls-blanco.png'
                  className='h-10 me-3'
                  alt='Logo SLS Logistics'
                />
                <span className='hidden self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                  SLS Logistics
                </span>
              </AccessibleLink>
            </div>
            <div>
              <ul className='text-primary dark:text-gray-400 font-medium flex gap-10'>
                <li className='border border-primary rounded-lg bg-transparent p-3'>
                  <AccessibleLink to='/' aria-label='Ir a página de Facebook' className='hover:underline '>
                    <FaFacebookSquare size={30} />
                  </AccessibleLink>
                </li>
                <li className='border border-primary rounded-lg bg-transparent p-3'>
                  <AccessibleLink to='/' className='hover:underline' aria-label='Ir a página de Linkedin'>
                    <FaLinkedin size={30} />
                  </AccessibleLink>
                </li>
                <li className='border border-primary rounded-lg bg-transparent p-3'>
                  <AccessibleLink to='/' className='hover:underline' aria-label='Ir a página de Instagram'>
                    <FaInstagram size={30} />
                  </AccessibleLink>
                </li>
              </ul>
            </div>
            <div className='grid grid-cols-1 gap-8 sm:gap-8 sm:grid-cols-2'>
              <div>
                <h2 className='mt-6 md:mt-0 mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white'>
                  Información
                </h2>
                <ul className='text-gray-200 dark:text-gray-400 font-medium'>
                  <li className='mb-2'>
                    <AccessibleLink to='/sobre-nosotros' className='hover:underline' aria-label='Ir a quiénes somos'>
                      Quiénes Somos
                    </AccessibleLink>
                  </li>
                  <li className='mb-2'>
                    <AccessibleLink to='/contacto' className='hover:underline' aria-label='Ir a contacto'>
                      Contacto
                    </AccessibleLink>
                  </li>
                  <li>
                    <AccessibleLink to='/actualidad' className='hover:underline' aria-label='Ir a actualidad'>
                      Actualidad
                    </AccessibleLink>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white'>
                  Legal
                </h2>
                <ul className='text-gray-200 dark:text-gray-400 font-medium'>
                  <li className='mb-2'>
                    <AccessibleLink to='/privacidad' className='hover:underline' aria-label='Ir a política de privacidad'>
                      Política de privacidad
                    </AccessibleLink>
                  </li>
                  <li className='mb-2'>
                    <AccessibleLink to='/cookies' className='hover:underline' aria-label='Ir a política de cookies'>
                      Política de Cookies
                    </AccessibleLink>
                  </li>
                  <li className='mb-2'>
                    <AccessibleLink to='/accesibilidad' className='hover:underline' aria-label='Ir a declaración de accesibilidad'>
                      Declaración de Accesibilidad
                    </AccessibleLink>
                  </li>
                  <li className='mb-2'>
                    <AccessibleLink to='/legal' className='hover:underline' aria-label='Ir a aviso legal'>
                      Aviso Legal
                    </AccessibleLink>
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
