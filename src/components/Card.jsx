const Card = ({ title, content, content2, icon: Icon, isContactPage }) => {
  return (
    <>
      <div className='max-w-sm text-center'>
        <div className='flex justify-center items-center p-4'>
          <Icon className={`text-primary ${isContactPage ? 'text-5xl' : 'text-7xl'} transition-colors`} />
        </div>
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white'>
            {title}
          </h5>
          <p className='mb-3 font-normal text-white dark:text-gray-400'>
            {content}
          </p>
          {isContactPage && (
             <p className='mb-3 font-normal text-white dark:text-gray-400'>
             {content2}
           </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
