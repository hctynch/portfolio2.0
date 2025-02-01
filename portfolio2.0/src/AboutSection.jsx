function AboutSection() {
  return (
    <div
      id='about'
      className='text-white font-[Source_Code_Pro] flex flex-col justify-center md:items-center mt-30 md:mt-50 lg:mt-70'>
      <div className='mx-auto md:w-2/3 lg:w-1/2 text-center'>
        <p className='relative text-3xl md:text-5xl inline-block'>
          About
          <span className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[350%] sm:w-[450%] lg:w-[550%] h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent'></span>
        </p>
      </div>
      <div className='ml-5 md:mx-auto text-start md:w-2/3 lg:w-1/2 md:text-pretty mt-3 md:mt-5'>
        <p className='text-md md:text-xl'>
          Hi, I’m Hunt Tynch; A Software Engineer passionate about backend
          development. With expertise in Java, C, and frameworks like Spring, I
          specialize in creating efficient APIs, data-driven applications, and
          server-side solutions that power seamless user experiences. I earned
          my Bachelor’s in Computer Science from NC State University, where I
          honed my skills in software design, algorithms, and system
          architecture. My academic projects and hands-on experience have
          deepened my understanding of creating clean, maintainable code for
          real-world applications. When I’m not solving coding challenges, I
          enjoy gaming and playing basketball, which keeps me energized and
          focused. Recently, I have got into Linux ricing. I’m always excited to
          collaborate, tackle new technologies, and deliver impactful software
          solutions. Check out my projects below or reach out to start a
          conversation—I’d love to connect!
        </p>
      </div>
    </div>
  );
}
export default AboutSection;
