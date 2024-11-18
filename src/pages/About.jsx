import { FaTruck } from 'react-icons/fa';
import { TbTruckDelivery } from "react-icons/tb";
import { FaPlane } from "react-icons/fa6";
import { MdStorage } from "react-icons/md";
import Card from '../components/Card';

const About = ({ isHomePage }) => {
  const cardData = [
    {
      title: 'Flota de vehículos',
      content:
        'Disponemos de una flota de vehículos propia con la que podemos cubrir la mayor parte de las necesidades de nuestros clientes',
      icon: FaTruck,
    },
    {
      title: 'Envíos Nacionales',
      content:
        'Gestionamos envíos a todo el país, desde el almacenaje inicial hasta la entrega garantizada en tiempo y forma',
      icon: TbTruckDelivery,
    },
    {
      title: 'Envíos internacionales',
      content:
        'Rapidez y puntualidad en el envío internacional de mercancías. Envío a cualquier parte del mundo',
      icon: FaPlane,
    },
    {
      title: 'Logística y almacenaje',
      content:
        'Logística integral con control de mercancías y almacenaje seguro de mercancías en nuestras instalaciones',
      icon: MdStorage,
    },
  ];
  return (
    <>
      <div className={`bg-black opacity-90 text-white ${isHomePage ? 'mt-0' : 'mt-20'} `}>
        <div className='flex flex-col items-center justify-start w-full h-full'>
          <img
            src='/logo-sls-blanco.png'
            className={`h-20 ${isHomePage ? 'hidden' : 'block'}`}
            alt='Sls Logistics'
          />
          <h1 className='text-primary text-3xl font-bold self-center mt-10'>
            Sobre nosotros
          </h1>
          <div className='p-10 text-justify leading-loose'>
            <p>
              En SLS Logistics, nos especializamos en transporte, mensajería,
              logística y almacenaje, ofreciendo soluciones personalizadas para
              cada cliente. Nuestro objetivo es adaptarnos a tus necesidades con
              un enfoque cercano y eficiente.
            </p>
            <p>
              Contamos con una flota propia de vehículos que nos permite
              responder de manera ágil a las demandas de nuestros clientes,
              garantizando un servicio integral que cubre desde el almacenaje
              inicial hasta la entrega final, siempre en tiempo y forma.
            </p>
            <p>
              Además, gestionamos envíos tanto a nivel nacional como
              internacional, asegurando rapidez y puntualidad en cada entrega,
              sin importar el destino.
            </p>
            <p>
              Nuestra experiencia en logística integral incluye el control y
              almacenaje seguro de mercancías en nuestras instalaciones,
              brindándote la tranquilidad de saber que tus productos están en
              las mejores manos.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            {cardData.map((card) => (
              <Card
              key={card.title}
                title={card.title}
                content={card.content}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
