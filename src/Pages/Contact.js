import React from "react";
import ContactBanner from "../Components/ContactBanner";
import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";
import NewsLitter from "../Components/NewsLitter";

function Contact() {
  return (
    <div className="mt-5 pt-5">
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
      <NewsLitter />
    </div>
  );
}

export default Contact;
