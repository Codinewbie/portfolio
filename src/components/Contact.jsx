import React from 'react';
import 'boxicons/css/boxicons.min.css';

// Contact data array
const CONTACT_INFO = [
  {
    id: 1,
    iconClass: 'bx bx-at',
    label: 'Email',
    href: 'mailto:amanks2580@gmail.com',
    text: 'amanks2580@gmail.com',
    title: 'Email',
  },
  {
    id: 2,
    iconClass: 'bx bxl-whatsapp',
    label: 'WhatsApp',
    href: 'tel:+91 9569502492',
    text: '9569502492',
    title: 'WhatsApp',
  },
];

const Contact = () => {
  return (
    <div id="Contact" className="bg-white">
      <div className="container py-[70px]">
        {/* Header Section */}
        <h3 className="text-lg uppercase font-extrabold text-blue-600 mb-1">
          Don't be shy! Hit me up! 👇
        </h3>
        <h2 className="text-2xl font-bold mb-5">CONTACT</h2>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row gap-14 mt-16">
          {CONTACT_INFO.map(({ id, iconClass, label, href, text, title }) => (
            <div key={id} className="flex items-center gap-2 md:gap-3">
              {/* Icon Section */}
              <div className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full duration-300 bg-white hover:bg-gray-100 border border-neutral-200 inline-flex items-center justify-center text-blue-600">
                <i className={`${iconClass} text-3xl md:text-4xl`}></i>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-0 md:gap-1">
                <h2 className="text-sm md:text-base uppercase font-bold">{label}</h2>
                <a
                  href={href}
                  target="_blank"
                  className="font-semibold text-neutral-600 hover:text-blue-600"
                  title={title}
                >
                  {text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
