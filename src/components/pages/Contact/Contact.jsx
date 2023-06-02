import React, {useRef} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wny7tz8', 'template_k4tb4gr', form.current, 'kxbcMPjZlhPLLKcZZ')
        .then((result) => {
          toast.success('Success! Mail sent Successfully', {
            position: toast.POSITION.TOP_RIGHT
          });
          e.target.reset()
        }, (error) => {
          toast.error('Error! Email failed to send.', {
            position: toast.POSITION.TOP_RIGHT
          });
        });
  };
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        <form className="p-8 md:mx-4 bg-white rounded-md shadow-md" onSubmit={sendEmail} ref={form}>
          <div className="m-3">
            <h3 className="text-2xl text-gray-800 font-bold mb-6">
              Get in Touch
            </h3>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your Email"
                  className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  rows="6"
                  className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3 text-right">
                <input
                  type="submit"
                  value="Send Message"
                  className="rounded bg-purple-600 text-center border-0 py-3 px-6 text-white leading-7 tracking-wide hover:bg-purple-800 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;