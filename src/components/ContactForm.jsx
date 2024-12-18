import { FaRegPaperPlane } from 'react-icons/fa';
import AccessibleButton from './Accessibility/AccessibleButton';
import AccessibleLink from './Accessibility/AccessibleLink';

const ContactForm = () => {
  return (
    <>
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
              <AccessibleLink to='/privacidad' className='underline' aria-label='Ir a política de privacidad'>
                política de privacidad
              </AccessibleLink>{' '}
              y he revisado el{' '}
              <AccessibleLink href='/legal' className='underline' aria-label='Ir a aviso legal'>
                aviso legal
              </AccessibleLink>
            </label>
          </div>

          <AccessibleButton
            type='button'
            arialabel='Enviar Mensaje'
            className='text-gray-700 w-max bg-[#efc753] hover:bg-blue-600 rounded-lg text-sm px-4 py-3 mt-4 tracking-wide'>
            <FaRegPaperPlane className='mr-2 inline' size={18} />
            Enviar Mensaje
          </AccessibleButton>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
