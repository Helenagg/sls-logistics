import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
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
      <div className='h-1 bg-black opacity-80' ref={navRef}></div>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          isScrolled ? 'translate-y-0 bg-black' : '-translate-y-full'
        } border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img
              src='/logo-sls-blanco.png'
              className='h-10'
              alt='Sls Logistics'
            />
          </Link>
          <button
            data-collapse-toggle='navbar-solid-bg'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-solid-bg'
            aria-expanded='false'
          >
            <span className='sr-only'>Abrir menú principal</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          <div
            className='hidden w-full md:block md:w-auto md:pr-10'
            id='navbar-solid-bg'
          >
            <ul className='flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
              <li>
                <Link
                  to='/sobre-nosotros'
                  className='block py-2 px-3 md:p-0 text-white hover:text-primary rounded'
                  aria-current='page'
                >
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  to='/contacto'
                  className='block py-2 px-3 md:p-0 text-white hover:text-primary rounded'
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='block py-2 px-3 md:p-0 text-white hover:text-primary rounded'
                >
                  Actualidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
