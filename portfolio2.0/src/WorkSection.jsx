const work = [
  {
    name: 'R&D Summer Employee',
    dates: 'May-July of 2023 & 2024',
    descrip: [
      'Worked in the R&D Department of Ashland’s specialty extraction division, Avoca LLC.',
      'Researched DNA sequencing of transgenic sage plants to achieve higher sclareol yields.',
      'Collected and organized data into Excel.',
      'Worked in the greenhouse and multiple farming plots to upkeep crops, gather samples, etc.',
    ],
    img: 'sage.jpg',
  },
];

function WorkSection() {
  return (
    <div
      id='experience'
      className='text-white font-[Source_Code_Pro] flex flex-col justify-center md:items-center mt-30 md:mt-50 lg:mt-70'>
      <div className='mx-auto md:w-2/3 lg:w-1/2 text-center'>
        <p className='relative text-3xl md:text-5xl inline-block'>
          Work
          <span className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[500%] sm:w-[600%] lg:w-[1000%] h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent'></span>
        </p>
      </div>
      <div className='relative max-w-full md:w-full md:text-pretty mt-5 lg:mt-8 flex flex-wrap justify-center gap-3 sm:gap-7 lg:gap-10'>
        {work.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className='relative w-full md:w-2/3 lg:w-2/5 border border-white/70 rounded-xl hover:border-red-500'>
            {/* Content that will blur on hover */}
            <div className='flex flex-col items-center p-4 transition duration-300 ease-in-out'>
              <p className='text-white my-5 text-xl'>{item.name}</p>
              {item.img && (
                <img
                  src={item.img}
                  className='w-[400px] sm:w-[500px] md:w-[600px]'
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
          </a>
        ))}
      </div>
    </div>
  );
}

export default WorkSection;
