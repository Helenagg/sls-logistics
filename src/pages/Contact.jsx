import { FaPhoneVolume } from 'react-icons/fa6';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { MdSchedule } from 'react-icons/md';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const cardData = [
    {
      title: 'Teléfono',
      content: '+34 678 218 915',
      content2: '+34 622 468 165',
      icon: FaPhoneVolume,
    },
    {
      title: 'Email',
      content: 'info@slsanbar.es',
      content2: '',
      icon: MdOutlineMarkEmailRead,
    },
    {
      title: 'Horarios de Oficina',
      content: 'Lunes a Viernes',
      content2: '9:00-14:00 y 16:00-20:00',
      icon: MdSchedule,
    },
  ];
  return (
    <>
      <div className='bg-gray-900'>
        <div className='bg-gradient-to-b from-primary to-gray-900 w-full h-72'>
          <div className='flex flex-col items-center justify-start w-full h-full'>
            <h1 className='text-primary text-3xl font-bold self-center mt-40'>
              Contacto
            </h1>
          </div>
        </div>
        <div className='-mt-10 mb-6 px-4'>
          <ContactForm />
        </div>
        <div className='mt-8 md:px-24 grid grid-cols-1 md:grid-cols-3'>
          {cardData.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              content={card.content}
              content2={card.content2}
              icon={card.icon}
              isContactPage
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
