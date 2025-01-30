import { AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

function Contacts() {
  return (
    <div className="z-50 fixed bottom-2 left-6 sm:left-8 flex flex-col opacity-70">
      <a href="https://linkedin.com/in/hunt-tynch" className="hover:scale-120  transform transition-transform duration-300">
        <AiFillLinkedin className="my-2 w-10 h-10 md:w-15 md:h-15 text-white hover:text-blue-500"/>
      </a>
      <a href="mailto:tynchhunt@gmail.com" className="hover:scale-120  transform transition-transform duration-300">
      <AiFillMail className="my-2 w-10 h-10 md:w-15 md:h-15 text-white hover:text-blue-500"/>
      </a>
      <a href="https://www.instagram.com/h.tynch04" className="hover:scale-120  transform transition-transform duration-300">
      <AiFillInstagram className="my-2 w-10 h-10 md:w-15 md:h-15 text-white hover:text-blue-500"/>
      </a>
    </div>
  )
}
export default Contacts