import { GiClick } from 'react-icons/gi';

const projects = [
  {
    name: 'Portfolio2',
    href: 'https://github.com/hctynch/portfolio2.0',
    stack: 'React, TailwindCSS',
    descrip: [
      'Designed an updated portfolio using React and TailwindCSS.',
      'You are currently viewing this project.',
    ],
    img: 'portfolio2.png',
  },
  {
    name: 'Foxhound Score Tracker',
    href: 'https://github.com/hctynch/mastersgtp',
    stack: 'Spring, React, MySql, Docker',
    descrip: [
      'Created a full-stack score tracking system using Spring, React, MySql, and Docker.',
      'Developed a REST API in Spring to handle scoring logic and storage in MySql.',
      'Frontend is React based.',
      'Dockerized database, backend, and frontend for easy deployment.',
    ],
    img: '',
  },
  {
    name: 'First Personal Portfolio',
    href: 'https://github.com/hctynch/hctynch.github.io',
    stack: 'React, TailwindCSS',
    descrip: [
      'First portfolio created using React and TailwindCSS.',
      'Learned the basics of Tailwind styling going through the documentation.',
    ],
    img: 'portfolio1.png',
  },
];

function ProjectSection() {
  return (
    <div
      id='projects'
      className='text-white font-[Source_Code_Pro] flex flex-col justify-center md:items-center mt-30 md:mt-50 lg:mt-70'>
      <div className='mx-auto md:w-2/3 lg:w-1/2 text-center'>
        <p className='relative text-3xl md:text-5xl inline-block'>
          Projects
          <span className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[250%] sm:w-[300%] lg:w-[425%] h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent'></span>
        </p>
      </div>
      <div className='relative max-w-full md:w-full md:text-pretty mt-5 lg:mt-8 flex flex-wrap justify-center gap-3 sm:gap-7 lg:gap-10'>
        {projects.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className='relative w-full md:w-2/3 lg:w-2/5 border border-white/70 rounded-xl hover:border-red-500'>
            {/* Content that will blur on hover */}
            <div className='flex flex-col items-center p-4 transition duration-300 ease-in-out hover:blur-md'>
              <p className='text-white my-5 text-xl'>{item.name}</p>
              <p className='text-white text-sm mb-5 -mt-5'>
                Stack: {[item.stack]}
              </p>
              {item.img && (
                <img
                  src={item.img}
                  className='w-[400px] sm:w-[700px] md:w-[900px] rounded-xl'
                />
              )}
              <ul className='flex flex-col items-center text-white text-center mt-10 list-disc list-inside'>
                {item.descrip.map((desc, index) => (
                  <li
                    key={index}
                    className='my-5 w-5/6'>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hover message overlay */}
            <p className='absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/60 rounded-xl'>
              Click to go to Repo
            </p>
            <p className='underline underline-offset-8 decoration-red-600 pb-10 sm:pb-0 flex items-center justify-center text-white text-lg font-semibold opacity-100 sm:opacity-0 sm:h-0 bg-black/60 rounded-xl'>
              Click to go to Repo{' '}
              <GiClick className='ml-4 h-8 w-8 animate-pulse' />
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
export default ProjectSection;
