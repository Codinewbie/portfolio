import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Contact = () => {
  return (
 
    <div id="Contact" className="px-5 md:px-10 bg-white ">
      <div className="container py-[70px] md:py-[100px]">
        <h3 className="text-lg uppercase font-extrabold text-blue-600 mb-1">Don't be shy! Hit me up! 👇</h3>
        <h2 className="text-2xl font-bold mb-5">CONTACT</h2>

        {/* // <!-- contact cards --> */}
        <div className="flex flex-cols  md:items-center gap-14 mt-16">
            
          {/*card1*/}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full duration-300 bg-white hover:bg-gray-100 border border-neutral-200 inline-flex items-center justify-center text-blue-600">
              <i className="bx bx-at text-3xl md:text-4xl"></i>
            </div>
            <div className="flex flex-col gap-0 md:gap-1">
              <h2 className="text-sm md:text-base uppercase font-bold">Email</h2>
              <a
                href="mailto:amanks2580@gmail.com"
                target="_blank"
                className="font-semibold text-neutral-600 hover:text-blue-600"
                title="Email"
              >
                amanks2580@gmail.com
              </a>
            </div>
          </div>
          {/* card1ends */}
          {/* card2 */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full duration-300 bg-white hover:bg-gray-100 border border-neutral-200 inline-flex items-center justify-center text-blue-600">
              <i className="<bx bxl-whatsapp text-3xl md:text-4xl"></i>
            </div>
            <div className="flex flex-col gap-0 md:gap-1">
              <h2 className="text-sm md:text-base uppercase font-bold">WhatsApp</h2>
              <a
                href="tel:+91 9569502492"
                target="_blank"
                className="font-semibold text-neutral-600 hover:text-blue-600"
                title="WhatsApp"
              >
              9569502492
              </a>
            </div>
          </div>
          {/*card2 ends*/}
        </div>
      </div>
    </div>

  );
};

export default Contact;
