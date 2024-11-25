import videoCover from '/assets/video/cover-slslogistics.mp4';
import AccessibleLink from './Accessibility/AccessibleLink';

const Cover = () => {
  return (
    <>
      <div className='relative w-full h-screen overflow-hidden'>
        <video
          className='absolute top-0 left-0 w-full h-full object-cover'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoCover} type='video/mp4' />
          Tu navegador no soporta el video.
        </video>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
        <div className='relative z-10 flex flex-col items-center justify-start gap-28 w-full h-full'>
          <h1 className='text-white text-5xl font-bold self-center mt-40'>
            COMPROMETIDOS CON TU NEGOCIO
          </h1>
          <h3 className='text-primary text-2xl font-bold self-center mt-4'>
            EMPRESA DE TRANSPORTE DE ALIMENTACIÓN
          </h3>
            <AccessibleLink to='/sobre-nosotros' aria-label='Nuestros servicios' className='bg-transparent border border-primary text-primary rounded-sm p-2'>Nuestros servicios</AccessibleLink>
          <p className='text-base text-white text-center -mt-16 px-40'>
            Somos una empresa dedicada al transporte, mensajería, logística y
            almacenaje.  Os ofrecemos un trato personalizado y nos ajustamos a vuestras
            necesidades.
          </p>
        </div>
      </div>
    </>
  );
};

export default Cover;
