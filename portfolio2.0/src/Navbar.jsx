function Navbar() {

  const navs = [
    {title:"About", href:"#about"},
    {title:"Skills", href:"#skills"},
    {title:"Projects", href:"#projects"},
  ]

  return (
    <div className="fixed z-50 flex h-16 w-full top-6 items-center justify-center md:h-20">
      <div className="m-auto flex h-16 md:w-full w-lg items-center justify-between shadow-white/5 shadow-lg md:top-6  md:h-20 md:max-w-screen-lg md:mx-auto bg-white/5 backdrop-blur-lg rounded-full">
        <a href="#home" className="z-50">
          <p className="ml-5 md:ml-8 mr-auto text-3xl md:text-5xl font-[Source_Code_Pro] font-medium text-white hover:underline">
            HT
          </p>
        </a>
        <div className="mx-auto absolute top-6 justify-end md:justify-center z-10 flex h-screen w-full ">
        {navs.map((item, index) =>
          <a key={index} href={item.href} className="mx-5 md:mx-8">
            <div className="text-sm md:text-lg text-white font-[Source_Code_Pro] font-bold hover:underline">
              {item.title}
            </div>
          </a>
        )}
        </div>
        <a key="resume" 
          className="hidden md:flex z-50 cursor-pointer absolute right-4 md:top-5 md:right-12" 
          href="/Hunt_Tynch_Resume.pdf" 
          download>
          <div className="rounded-2xl text-center items-center flex justify-center w-18 h-10 bg-gradient-to-b from-cyan-500 to-purple-500 text-white font-[Source_Code_Pro] font-medium">
            Resume
          </div>
        </a>
        <a className="md:hidden z-50"
          href="/Hunt_Tynch_Resume.pdf" 
          download>
            <div className="fixed top-22 left-2 rounded-2xl text-center items-center flex justify-center w-18 h-10 bg-gradient-to-b from-cyan-500 to-purple-500 text-white font-[Source_Code_Pro] font-medium">
            Resume
          </div>
        </a>
      </div>
    </div>
  )
}
export default Navbar