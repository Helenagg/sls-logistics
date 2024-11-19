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
      <div className='bg-black opacity-80'>
        <div className='bg-gradient-to-r from-primary to-gray-800 w-full h-48'></div>
        <div className='-mt-20 mb-6 px-4'>
          <ContactForm />
        </div>
        <div className='mt-8 px-24 grid grid-cols-3'>
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
