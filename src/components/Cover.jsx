const Cover = () => {
  return (
    <>
      <div className='relative w-full h-screen overflow-hidden'>
       
        <iframe
          className='absolute top-0 left-0 w-full h-full'
          src='https://www.youtube.com/embed/XafW4d9XfSE?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&playsinline=1&loop=1&playlist=XafW4d9XfSE'
          title='YouTube video player'
          frameborder='0'
          allow='autoplay; encrypted-media'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen></iframe>
        <div className='relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50'>
          <h1 className='text-white text-4xl font-bold'>
            Bienvenidos a nuestra web
          </h1>
        </div>
      </div>
    </>
  );
};

export default Cover;
