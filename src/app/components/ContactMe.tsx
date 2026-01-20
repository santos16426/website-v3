import SocialLinks from './common/SocialLinks'

const ContactMe: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#EFEEEF] py-8 sm:py-12 grid place-content-center text-center px-4 sm:px-6 md:px-8">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[8rem] p-4 sm:p-6 lg:p-8 text-gray-500 transition-all hover:text-black leading-tight sm:leading-normal">
        Have a project in mind?
      </p>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-4 sm:p-6 lg:p-8 text-gray-300 leading-relaxed">
        Drop me an email{' '}
        <span
          onClick={() =>
            (window.location.href = 'mailto:santos16426@gmail.com')
          }
          className="text-black cursor-pointer hover:underline underline-offset-4 sm:underline-offset-8 break-all sm:break-normal"
        >
          santos16426@gmail.com
        </span>
      </p>
      <SocialLinks />
    </div>
  )
}

export default ContactMe
