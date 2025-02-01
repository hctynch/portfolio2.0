import { DiMysql } from 'react-icons/di';
import {
  FaC,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaLinux,
  FaReact,
} from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiSpring } from 'react-icons/si';
const skills = [
  { name: 'Java', icon: <FaJava className='h-15 w-15 sm:h-20 sm:w-20' /> },
  { name: 'C', icon: <FaC className='h-15 w-15 sm:h-20 sm:w-20' /> },
  { name: 'Spring', icon: <SiSpring className='h-15 w-15 sm:h-20 sm:w-20' /> },
  { name: 'Docker', icon: <FaDocker className='h-15 w-15 sm:h-20 sm:w-20' /> },
  { name: 'Git', icon: <FaGitAlt className='h-15 w-15 sm:h-20 sm:w-20' /> },
  { name: 'React', icon: <FaReact className='h-15 w-15 sm:h-20 sm:w-20' /> },
  { name: 'MySQL', icon: <DiMysql className='h-15 w-15 sm:h-20 sm:w-20' /> },
  { name: 'Linux', icon: <FaLinux className='h-15 w-15 sm:h-20 sm:w-20' /> },
  {
    name: 'Tailwind',
    icon: <RiTailwindCssFill className='h-15 w-15 sm:h-20 sm:w-20' />,
  },
];

function SkillSection() {
  return (
    <div
      id='skills'
      className='text-white font-[Source_Code_Pro] flex flex-col justify-center md:items-center mt-30 md:mt-50 lg:mt-70'>
      <div className='mx-auto md:w-2/3 lg:w-1/2 text-center'>
        <p className='relative text-3xl md:text-5xl inline-block'>
          Skills
          <span className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[300%] sm:w-[400%] lg:w-[500%] h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent'></span>
        </p>
      </div>
      <div className='md:mx-auto max-w-full md:w-2/3 lg:w-7/12 md:text-pretty mt-5 lg:mt-8 flex flex-wrap justify-center gap-3 sm:gap-7 lg:gap-10'>
        {skills.map((item, index) => (
          <div
            key={index}
            className='hover:scale-110 ease-in-out transition-transform duration-300 flex flex-col justify-center items-center border border-white/60 rounded-3xl w-30 h-30 md:w-50 md:h-40 bg-gradient-to-b from-red-500/70 backdrop-blur-lg'>
            <div>{item.icon}</div>
            <div className='mt-4 text-lg'>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SkillSection;
