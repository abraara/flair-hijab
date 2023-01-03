import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const ContactPage = () => {
  const form = useRef();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4kit2al', 'template_vlofdbi', form.current, 'csAFxIQKXWLwc-pcI')
      .then((result) => {
          console.log(result.text);
          Toast.fire({
            icon: 'success',
            title: 'Message Sent!'
          })

      }, (error) => {
          console.log(error.text);
          Toast.fire({
            icon: 'error',
            title: 'Error occured, try again.'
          })
      });
      form.current.reset()
  };

  return (
    
<main>
  <div className="py-4 lg:py-8 px-8 md:px-2 mx-auto max-w-screen-md">
      <h2 className = "mb-4 text-4xl tracking-tight font-extrabold text-center">Contact Us</h2>
      <p className = " mb-5 lg:mb-8 font-light text-center text-gray-500 sm:text-xl">Any pricing questions? Want to send feedback about any of our products? Need more details about a certain item? Let us know.</p>
      <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" name='name' id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-pink-300 focus:ring-pink-300 focus:border-pink-300 block w-full p-2.5" required />
            </div>
          <div>
              <label htmlFor="email" className="block mb-2">Your email</label>
              <input type="email" name='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-pink-300 focus:ring-pink-300 focus:border-pink-300 block w-full p-2.5" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2">Subject</label>
              <input type="text" name='subject' id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-pink-300 focus:ring-pink-300 focus:border-pink-300 block w-full p-2.5" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2">Your message</label>
              <textarea id="message" name='message' rows="6" className="block p-2.5 w-full min-h-max text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 hover:border-pink-300 focus:ring-pink-300 focus:border-pink-300"></textarea>
          </div>
          <button type="submit" name='send' className="py-2 px-5 font-medium text-center rounded-lg bg-pink-300 border border-pink-400 sm:w-fit hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 hover:text-white ease-in-out duration-300">Send Message</button>
      </form>
  </div>
  </main>
  );
};

export default ContactPage;