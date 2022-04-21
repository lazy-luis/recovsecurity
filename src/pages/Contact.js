import { BsTelephone } from "react-icons/bs";
import { BiEnvelopeOpen } from "react-icons/bi";
const Contact = () => {
  return (
    <div className="contact-page">
      <h4> Get In Touch With Us </h4>
      <div className="contact-flex">
        <div className="contact-text">
          <h6> For Enquiries Or To Schedule A Confidential Appointment </h6>
          <div className="contact-text-single">
            <p>
              <BsTelephone />
              Give Us A Call
            </p>
            <label> +1-424-409-5126 </label>
          </div>
          <div className="contact-text-single">
            <p>
              <BiEnvelopeOpen />
              Drop Us A Mail
            </p>
            <label> info@recov-security.com </label>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <label> Full Name </label>
            <input type="text" placeholder="Full Name" required />
            <label> Email Address </label>
            <input type="email" placeholder="Email Address" required />
            <label> Email Subject </label>
            <input type="text" placeholder="Email Subject" required />
            <label> Message </label>
            <textarea rows="6" placeholder="Send A Message" required></textarea>
            <button> Request Contact </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
