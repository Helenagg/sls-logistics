import { Link } from "react-router-dom";
import AccessibleButton from "./Accesibility/AccessibleButton";

const HorizontalCard = () => {
  return (
    <>
      <div className='flex flex-col items-center bg-gray-900 border border-gray-400 rounded-lg shadow md:flex-row  dark:border-gray-700 dark:bg-gray-800'>
        <div className="w-full md:w-1/3 p-0">
        <img
          className='object-contain w-full h-full rounded-l-lg'
          src='/assets/img/truck.jpg'
          alt=''
        />
        </div>
        <div className='flex flex-col justify-between p-4 leading-normal w-full md:w-2/3 mx-4'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white'>
            Actualidad
          </h5>
          <p className='mb-3 font-normal text-white dark:text-gray-400'>
            En nuestro apartado de actualidad encontrarás noticias de interés relacionadas con el sector del transporte de mercancias.
          </p>
          <AccessibleButton className='bg-transparent border border-primary hover:border-white text-primary hover:text-white rounded-sm p-2 w-1/4 mt-2'>
            <Link to='/actualidad'>Ir a actualidad</Link>
          </AccessibleButton>
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
