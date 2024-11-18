const Card = ({ title, content, icon: Icon }) => {
  return (
    <>
      <div className='max-w-sm text-center'>
        <div className='flex justify-center items-center p-4'>
          <Icon className='text-primary text-7xl transition-colors' />
        </div>
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white'>
            {title}
          </h5>
          <p className='mb-3 font-normal text-white dark:text-gray-400'>
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
