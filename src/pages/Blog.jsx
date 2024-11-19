import Card from "../components/Card";

const Blog = ({ isHomePage }) => {
    const blogData = [
        {
            title: 'Actualidad en logísitica',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, illo.',
            src: '/assets/img/post.jpg'
        },
        {
            title: 'Actualidad en logísitica',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, illo.',
            src: '/assets/img/post.jpg'
        },
        {
            title: 'Actualidad en logísitica',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, illo.',
            src: '/assets/img/post.jpg'
        },
        {
            title: 'Actualidad en logísitica',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, illo.',
            src: '/assets/img/post.jpg'
        },
        {
            title: 'Actualidad en logísitica',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, illo.',
            src: '/assets/img/post.jpg'
        },
        {
            title: 'Actualidad en logísitica',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, illo.',
            src: '/assets/img/post.jpg'
        },
    ]

  return (
    <div className={`bg-gray-900 text-white`}>
      <div className='flex flex-col items-center justify-start w-full h-full'>
        <img
          src='/logo-sls-blanco.png'
          className={`h-20 ${isHomePage ? 'hidden' : 'block'}`}
          alt='Sls Logistics'
        />
        <h1 className='text-primary text-3xl font-bold self-center mt-10'>
          Noticias de actualidad
        </h1>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {blogData.map((post) => (
                <Card 
                    key={post.title}
                    title={post.title}
                    content={post.content}
                    src={post.src}
                    isBlogPage
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
