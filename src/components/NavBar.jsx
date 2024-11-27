import { useEffect, useRef, useState } from 'react';
import AccessibleButton from './Accessibility/AccessibleButton';
import AccessibleLink from './Accessibility/AccessibleLink';
import { GrMenu } from 'react-icons/gr';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { root: null, threshold: 1.0 }
    );

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) observer.unobserve(navRef.current);
    };
  }, []);

  return (
    <>
      <div className='h-1 bg-gray-900' ref={navRef}></div>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          isScrolled ? 'translate-y-0 bg-gray-900' : '-translate-y-0'
        } border-gray-200 dark:bg-gray-800 dark:border-gray-700`}>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <AccessibleLink
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
            aria-label='Ir a página de inicio'>
            <img
              src='/logo-sls-blanco.png'
              className='h-10'
              alt='Logo SLS Logistics'
            />
          </AccessibleLink>
          <AccessibleButton
            data-collapse-toggle='navbar-solid-bg'
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-solid-bg'
            aria-expanded='false'
            arialabel='Abrir menú principal'>
            <span className='sr-only'>Abrir menú principal</span>
            <GrMenu size={30} />
          </AccessibleButton>
          <div
            className={`${isOpen ? 'block bg-gray-900 text-center' : 'hidden md:block'} w-full md:w-auto pr-0 md:pr-10 rounded-sm`}
            id='navbar-solid-bg'>
            <ul className='flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
              <li>
                <AccessibleLink
                  to='/sobre-nosotros'
                  className='block pb-2 px-3 md:p-0 text-white hover:text-primary rounded'
                  aria-current='page'
                  aria-label='Ir a quiénes somos'
                  onClick={() => setIsOpen(false)}
                  >
                  Quiénes Somos
                </AccessibleLink>
              </li>
              <li>
                <AccessibleLink
                  to='/contacto'
                  className='block py-2 px-3 md:p-0 text-white hover:text-primary rounded'
                  aria-label='Ir a contacto'
                  onClick={() => setIsOpen(false)}
                  >
                  Contacto
                </AccessibleLink>
              </li>
              <li>
                <AccessibleLink
                  to='/actualidad'
                  className='block py-2 pb-4 px-3 md:p-0 text-white hover:text-primary rounded'
                  aria-label='Ir a actualidad'
                  onClick={() => setIsOpen(false)}
                  >
                  Actualidad
                </AccessibleLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
