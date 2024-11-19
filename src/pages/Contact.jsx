import { FaRegPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdSchedule } from "react-icons/md";
import Card from '../components/Card';

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
  ]
  return (
    <>
    <div className='bg-black opacity-80'>
      <div className='bg-gradient-to-r from-primary to-gray-800 w-full h-48'></div>
      <div className='-mt-20 mb-6 px-4'>
        <div className='mx-auto max-w-6xl shadow-md shadow-primary p-8 relative bg-white rounded-lg'>
          <h2 className='text-xl text-gray-700 font-bold'>
            Cuéntanos en qué podemos ayudarte:
          </h2>

          <form className='mt-8 grid sm:grid-cols-2 gap-6'>
            <div>
              <input
                type='text'
                placeholder='Nombre'
                className='w-full rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#efc753]'
              />
            </div>
            <div>
              <input
                type='email'
                placeholder='Email'
                className='w-full rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#efc753]'
              />
            </div>
            <div>
              <input
                type='number'
                placeholder='Teléfono de contacto'
                className='w-full rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#efc753]'
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='Dirección'
                className='w-full rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#efc753]'
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='Empresa'
                className='w-full rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#efc753]'
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='Asunto'
                className='w-full rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#efc753]'
              />
            </div>
            <div>
              <textarea
                placeholder='Mensaje'
                rows='6'
                className='col-span-full w-full rounded-lg px-4 border border-gray-300 text-sm pt-3 outline-[#efc753]'></textarea>
            </div>
            <div className='flex items-center col-span-full'>
              <input id='checkbox1' type='checkbox' className='w-4 h-4 mr-3' />
              <label htmlFor='checkbox1' className='text-sm text-gray-400'>
                Estoy de acuerdo con los{' '}
                <Link href='javascript:void(0);' className='underline'>
                  términos y condiciones
                </Link>{' '}
                y{' '}
                <Link href='javascript:void(0);' className='underline'>
                  la política de privacidad
                </Link>
              </label>
            </div>

            <button
              type='button'
              className='text-gray-700 w-max bg-[#efc753] hover:bg-blue-600 rounded-lg text-sm px-4 py-3 mt-4 tracking-wide'>
              <FaRegPaperPlane className='mr-2 inline' size={18} />
              Enviar Mensaje
            </button>
          </form>
        </div>
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
