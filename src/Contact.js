import React from "react";
import ContactForm from "./ContactForm";

// const Contact = () => (
//   <section id="contact" className="contact">
//     <h2>無料相談・技術的なご質問もお気軽に</h2>
//     <p>30秒で完了するフォームからご連絡ください。</p>
//     <ContactForm />
//   </section>
// );

const Contact = () => (
  <section id="contact" className="contact">
    <h2>無料相談・技術的なご質問もお気軽に</h2>
    <div className="section-content">
      <p>30秒で完了するフォームからご連絡ください。</p>
      <ContactForm />
    </div>
  </section>
);

export default Contact;
