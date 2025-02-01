import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import { GiWolfHowl } from 'react-icons/gi';
function Hero() {
  return (
    <div
      className='w-full flex flex-col items-center mt-40 sm:mt-75 text-white font-[Source_Code_Pro]'
      id='home'>
      <div className='flex justify-center items-center'>
        <div className='relative mx-3 sm:mx-10 md:mx-20'>
          <img
            src='centered_pic.jpeg'
            className='h-[150px] w-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] object-cover object-top rounded-full border-red-500'
          />
          <div className='absolute inset-0 border-white/80 rounded-full h-[150px] w-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] animate-waterdrop'></div>
        </div>
        <div className='flex flex-col text-start justify-center items-start w-55 sm:min-w-100 md:w-115 lg:w-170'>
          <p className='text-3xl md:text-5xl'>Hunt Tynch</p>
          <div className='mt-1 flex flex-row justify-start opacity-60'>
            <FiMapPin className='text-xl mr-2 -ml-1 text-red-400 md:text-4xl md:mr-4 hover:animate-bounce' />
            <p className='text-md md:text-2xl md:mt-1.75'>Edenton, NC</p>
          </div>
          <div>
            <p className='text-lg md:text-xl lg:text-3xl mt-2'>
              Software Engineer, graduating from{' '}
              <div className='underline decoration-red-500 flex flex-col items-center sm:flex-row sm:items-center'>
                North Carolina State University
                <GiWolfHowl className='sm:ml-3 text-red-800 bg-white rounded-full -mt-7 ml-15 h-8 w-8 sm:h-10 sm:w-10 sm:-mt-0 lg:h-15 lg:w-15' />
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row opacity-100 w-80 mt-4 md:mt-10 lg:w-150'>
        <a
          href='https://linkedin.com/in/hunt-tynch'
          className='hover:animate-none hover:scale-120  transform transition-transform duration-300'>
          <AiFillLinkedin className='-ml-1 my-2 w-10 h-10 md:w-15 md:h-15 text-white hover:text-blue-500' />
        </a>
        <a
          href='https://github.com/hctynch'
          className='ml-auto hover:scale-120  transform transition-transform duration-300'>
          <AiFillGithub className='my-2 w-10 h-10 md:w-15 md:h-15 text-white hover:text-blue-500' />
        </a>
        <a
          href='mailto:tynchhunt@gmail.com'
          className='ml-auto hover:scale-120  transform transition-transform duration-300'>
          <AiFillMail className='my-2 w-10 h-10 md:w-15 md:h-15 text-white hover:text-blue-500' />
        </a>
        <a
          href='https://www.instagram.com/h.tynch04'
          className='ml-auto hover:scale-120  transform transition-transform duration-300'>
          <AiFillInstagram className='my-2 w-10 h-10 md:w-15 md:h-15 text-white hover:text-blue-500' />
        </a>
      </div>
    </div>
  );
}
export default Hero;
