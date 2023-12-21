import { useState, useRef } from 'react';
import styles from './ContactMe.module.scss';
import { FillButton } from '../common/Button';
import SocialLinks from '../common/SocialLinks';
import emailjs from 'emailjs-com';

const SuccessMessage = () => (
  <div className="bg-green-500 text-white p-4 rounded-md mb-4">
    Email sent successfully!
  </div>
);

const ContactMe: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(formRef.current){
        
        try {
            await emailjs.sendForm('service_1w5p6m4', 'template_pu1424f', formRef.current, 'HEnN8mgxdp9sM-wRP');
            setShowSuccess(true);
            setTimeout(() => {
                if (formRef.current) {
                    formRef.current.reset();
                    setShowSuccess(false);
                }
            }, 3000);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={`flex flex-row ${styles.formWrapper}`}>
      
        <div className={styles.contactDetails}>
            <div className='heading text-3xl font-bold'>
                <span className="text-orange-500">&lt;</span>
                <span className=''>Contact Me</span>
                <span className="text-orange-500">/&gt;</span>
            </div>
            <div className="labelIcon flex flex-row py-2 mt-5 text-center">
                <div><i className='bx bxs-phone' ></i> </div>
                <div>+639 76 399 2426</div>  
            </div>
            <div className="labelIcon flex flex-row py-2 text-center">
                <div><i className='bx bxs-envelope' ></i> </div>
                <div>santos16426@gmail.com</div>  
            </div>
            <div className="labelIcon flex flex-row py-2 text-center">
                <div><i className='bx bxs-pin' ></i> </div>
                <div>Philippines</div>  
            </div>
            <SocialLinks />
        </div>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className={`flex flex-col  gap-2 px-32 py-20 ${styles.form}`}>
            <p>Write me a message</p>
            <div className="flex gap-2">
              <input type="email" name="email" placeholder="Email" className="border rounded-md p-2" />
              <input type="text" name="phoneNumber" placeholder="Phone number" className="border rounded-md p-2" />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="border rounded-md p-2" />
            <textarea className="border rounded-md p-2" name="message" placeholder="Message" />
              {/* {showSuccess && <SuccessMessage />} */}
            <div className="flex flex-row justify-space-between">
              <div />
              <FillButton label="Send" icon={<i className="bx bxs-send text-lg"></i>} onClick={handleSubmit} />
            </div>
            
          </div>
        </form>
      
      </div>
    </div>
  );
};

export default ContactMe;
