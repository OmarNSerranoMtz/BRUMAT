import React, { useState } from "react";
import db from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Contact({ data }) {
  // const [contactRequest, setContactRequest] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone2, setPhone] = useState(0);
  const [message, setMessage] = useState("");

  const contact = collection(db, "contact");
  const mail = collection(db, "mail");
  const sendTo = ["omar.serrano90@gmail.com"];

  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  const onSubmit = async () => {
    try {
      await addDoc(contact, {
        name: name,
        email: email,
        phone: phone2,
        message: message,
        created: serverTimestamp(),
      });
    } catch (err) {
      console.error(err);
    }
    try {
      await addDoc(mail, {
        to: sendTo,
        message: {
          subject: "Nueva Solicitud de Información",
          text: message,
          html: "This is the <code>HTML</code> section of the email body.",
        },
      });
    } catch (err) {
      console.error(err);
    }
    alert("Datos Enviados");
    window.location.reload();
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Ponte en contacto</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <fieldset>
            <div>
              <label htmlFor="contactName">
                Nombre <span className="required">*</span>
              </label>
              <input
                placeholder="Nombre"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="contactEmail">
                e-mail <span className="required">*</span>
              </label>
              <input
                placeholder="e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="contactSubject">
                Teléfono <span className="required">*</span>
              </label>
              <input
                placeholder="Teléfono"
                onChange={(e) => setPhone(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="contactMessage">
                Mensaje <span className="required">*</span>
              </label>
              <textarea
                cols="50"
                rows="15"
                placeholder="Mensaje"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button className="submit" onClick={onSubmit}>
                {" "}
                Submit
              </button>
            </div>
          </fieldset>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Tu mensaje fue enviado, gracias!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Dirección y teléfono</h4>
            <p className="address">
              {contactName}
              <br />
              {contactEmail}
              <br />
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
