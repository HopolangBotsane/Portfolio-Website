import { useRef } from "react"
import emailjs from "@emailjs/browser"
import styles from "./ContactSection.module.css"

function ContactSection() {

  const form = useRef()

  const sendEmail = (e) => {
  e.preventDefault()

  emailjs
    .sendForm('service_2gq4w09', 'template_lsbnpoh', form.current, {
    publicKey: '2yapzmlCM-yINhrel',
  })
  .then(
    () => {
      console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    )
  }

  return (
    <div className={styles.ContactSection}>
        <h1 className={styles.sectionHeading}>Get In Touch</h1>
        <div className="form-left">
            <form ref={form} onSubmit={sendEmail}>
                <label>From:</label>
                <input className="user-email-input" type="email" placeholder="Enter email address" name="user_email" />
                <label>Message</label>
                <textarea className="user-text-input" name="message" placeholder="Enter message"/>
                <input className="send-btn" type="submit" value="Send" />
            </form>
        </div>

        <h1>OR</h1>

        <div className={styles.formRight}>
            <h1 className={styles.formRightHeading}>WhatsApp</h1>
            <p className={styles.formRightParagraph}>000 000 0000</p>
        </div>

    </div>
  )
}

export default ContactSection