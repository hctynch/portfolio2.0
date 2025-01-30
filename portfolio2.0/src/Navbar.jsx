function Navbar() {

  const navs = [
    {title:"About", href:"#about"},
    {title:"Skills", href:"#skills"},
    {title:"Projects", href:"#projects"},
  ]

  return (
    <div className="fixed z-50 flex h-16 w-full top-6 items-center justify-center md:h-20">
      <div className="m-auto flex h-16 lg:w-full w-lg items-center justify-between shadow-white/5 shadow-lg lg:top-6  lg:h-20 lg:max-w-screen-lg lg:mx-auto bg-white/5 backdrop-blur-lg rounded-full">
        <a href="#home">
          <p className="ml-5 sm:ml-8 mr-auto text-3xl sm:text-5xl font-[Source_Code_Pro] font-medium text-white">
            HT
          </p>
        </a>
        <div className="absolute top-6 left-1/5 sm:left-1/3 z-10 flex h-screen w-full">
        {navs.map((item, index) =>
          <a key={index} href={item.href} className="mx-5 sm:mx-8">
            <div className="text-sm sm:text-lg text-white font-[Source_Code_Pro] font-bold">
              {item.title}
            </div>
          </a>
        )}
        </div>
        <a key="resume" 
          className="z-50 cursor-pointer absolute top-3 right-4 sm:top-5 sm:right-12" 
          href="/Hunt_Tynch_Resume.pdf" 
          download>
          <div className="rounded-full text-center items-center flex justify-center w-24 h-10 bg-gradient-to-b from-cyan-500 to-purple-500 text-white font-[Source_Code_Pro] font-medium">
            Resume
          </div>
        </a>
      </div>
    </div>
  )
}
export default Navbar