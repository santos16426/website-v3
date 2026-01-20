import SocialLinks from './common/SocialLinks'

const ContactMe: React.FC = () => {
  return (
    <section className="w-full h-screen bg-[#EFEEEF] py-8 sm:py-12 grid place-content-center text-center px-4 sm:px-6 md:px-8" aria-label="Contact section">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[8rem] p-4 sm:p-6 lg:p-8 text-gray-500 transition-all hover:text-black leading-tight sm:leading-normal" id="contact">
        Have a project in mind?
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-4 sm:p-6 lg:p-8 text-gray-600 leading-relaxed">
        Drop me an email{' '}
        <a
          href="mailto:santos16426@gmail.com"
          className="text-black cursor-pointer hover:underline underline-offset-4 sm:underline-offset-8 break-all sm:break-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded"
          aria-label="Send email to santos16426@gmail.com"
        >
          santos16426@gmail.com
        </a>
      </p>
      <SocialLinks />
    </section>
  )
}

export default ContactMe
