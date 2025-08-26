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
    <div className={styles.contactSection}>
        <h1 className={styles.sectionHeading}>Get In Touch</h1>

        <div className={styles.c}></div>

        <div className={styles.formLeft}>
            <form ref={form} onSubmit={sendEmail}>
              
              <div className="emailInputContainer">
                <label>From:</label>
                <input className={styles.userEmailInput} type="email" placeholder="Enter email address" name="user_email" />
              </div>

              <div className="messageInputContainer">
                <label>Message</label>
                <textarea className={styles.userTextInput} name="message" placeholder="Enter message"/>
              </div>

              <input className={styles.sendBtn} type="submit" value="Send" />

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