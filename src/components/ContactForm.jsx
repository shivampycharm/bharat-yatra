import React from "react";

function ContactForm() {
  return (
    <section className="form">
      <div className="heading">
        <h1>Send a message to us</h1>
      </div>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;
