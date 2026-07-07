import "./MobileContact.css";
function MobileContact() {
  return <div className="mobile-contact"><h1>Contact</h1>
        <div className="mobile-home">
        <form action="" className="contact_form">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Your Name" required />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Your email" required />
          <label htmlFor="message">Message</label>
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div> </div>;
}
export default MobileContact;
