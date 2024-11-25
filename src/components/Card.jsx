import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import AccessibleButton from './Accesibility/AccessibleButton';

const Card = ({
  title,
  content,
  content2,
  src,
  icon: Icon,
  isContactPage,
  isBlogPage,
}) => {
  return (
    <>
      <div className='max-w-sm'>
        <div
          className={`flex justify-center items-center ${
            isBlogPage ? '' : 'p-4'
          }`}
        >
          {isBlogPage ? (
            <img src={src} alt={title} className='rounded-t-md' />
          ) : (
            <Icon
              className={`text-primary ${
                isContactPage ? 'text-5xl' : 'text-7xl'
              } transition-colors`}
            />
          )}
        </div>
        <div
          className={`${
            isBlogPage ? 'bg-white rounded-b-md' : 'text-center'
          } p-5`}
        >
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white'>
            {title}
          </h5>
          <p
            className={`mb-3 font-normal ${
              isBlogPage ? 'text-gray-800' : 'text-white'
            } dark:text-gray-400`}
          >
            {content}
          </p>
          {isContactPage && (
            <p className='mb-3 font-normal text-white dark:text-gray-400'>
              {content2}
            </p>
          )}
          {isBlogPage ? (
            <AccessibleButton type='button' className='text-gray-800 '>
              <Link to='/' className='flex gap-4'>
                Leer más{''}
                <FaArrowRightLong className='mt-1.5' />{' '}
              </Link>
            </AccessibleButton>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
