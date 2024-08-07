import React, { useRef } from "react";
import Heading from "./Heading";
import emailjs from "@emailjs/browser";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xt76h59",
        "template_9sliy8a",
        form.current,
        "wXmZF1Irpkpu36XVX"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Your message has been sent successfully. I'll contact you soon"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="pt-[-30px] relative bg-[#343a40] text-white screen w-full flex md:flex-row flex-col justify-center items-center md:gap-20 gap-10"
    >
      <div className="heading absolute top-5">
        <Heading text="CONTACT" subtext="Connect with me" />
      </div>
      <div className="form md:mt-36 mt-24">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col  items-center gap-10"
          action="#"
        >
          <div className="details flex md:flex-row flex-col justify-center items-center gap-10">
            <input
              type="text"
              name="user_name"
              className="py-2 px-4 md:w-[250px] w-[75vw] rounded-lg bg-[#212529] border"
              placeholder="Enter your name"
            />
            <input
              type="email"
              name="user_email"
              className="py-2 px-4 md:w-[450px] w-[75vw] rounded-lg bg-[#212529] border"
              placeholder="Enter your email"
            />
          </div>
          <textarea
            className="px-4 p-2 w-full rounded-lg  bg-[#212529] border"
            rows={8}
            placeholder="Enter your message"
            name="message"
          ></textarea>
          <input type="submit" value="Send" className="btn w-[200px]" />
        </form>
      </div>
      <div className="icons md:mt-20 flex md:flex-col justify-center items-center gap-10">
        <a href="https://github.com/SaniyaLadanavar16" target="_blank">
          <BsGithub size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/-saniya/"
          target="_blank"
        >
          <BsLinkedin size={40} />
        </a>
        <a href="https://www.instagram.com/_saniya_16__/" target="_blank">
          <BsInstagram size={40} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
