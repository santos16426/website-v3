import SocialLinks from './common/SocialLinks'

const ContactMe: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#EFEEEF] py-12 grid place-content-center text-center">
      <p className="text-5xl lg:text-[8rem] font-bold p-8 text-gray-500 transition-all hover:text-black">
        Have a project in mind?
      </p>
      <p className="text-3xl font-bold p-8 text-gray-300 ">
        Drop me an email{' '}
        <span
          onClick={() =>
            (window.location.href = 'mailto:santos16426@gmail.com')
          }
          className="text-black cursor-pointer hover:underline underline-offset-8"
        >
          santos16426@gmail.com
        </span>
      </p>
      <SocialLinks />
    </div>
  )
}

export default ContactMe
