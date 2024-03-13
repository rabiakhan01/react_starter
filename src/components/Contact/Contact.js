import React, {useRef, useState} from "react";
import Buttons from "../Buttons/Button";
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [isDone, setisDone] = useState(false);

    const form = useRef();

  const sendEmail = (e) => {
  

    emailjs
      .sendForm('service_fyrpivy', 'template_4qc4o5a', form.current, {
        publicKey: 'k4GAq3oVOU4q5jbY6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      setisDone(true);
      
  };


    return (
        <div className="flex h-full pl-24">
            <div>
                <div>
                    <span className="text-3xl font-bold text-black">Get in touch </span><br />
                    <span className="text-3xl font-bold text-yellow-500">Contact me</span>
                    <div className="w-46  h-96 rounded-xl bg-sky-200 blur-3xl right-96 top-64">
                    </div>
                    

                </div>
            </div>
            <div className="flex justify-center relative flex-1">
                <form className="flex flex-col gap-3 items-center" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className=" w-80 h-8 outline-none p-1.5 border-2 border-yellow-500 rounded-lg text-sm z-10" placeholder="Name" />
                    <input type="email" name="user_email" className=" w-80 h-8 outline-none p-1.5 border-2 border-yellow-500 rounded-lg text-sm z-10" placeholder="Email" />
                    <textarea name="message" className="h-16 w-80 outline-none p-1.5 border-2 border-yellow-500 rounded-lg text-sm z-10" placeholder="Messaege" />
                    <Buttons name="Send"/> 
                    <span>{isDone && "Thanks for connecting me I will reply you soon." }</span>
                    <div className=" absolute  w-80 h-2/5 rounded-xl bg-purple-200 blur-3xl right-72 -top-8">
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Contact;
