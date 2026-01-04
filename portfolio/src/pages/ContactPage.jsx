import { Link } from "react"

const ContactPage = () => {

    const handleEmailClick = () => {
    const email = "botsanethatoo37@gmail.com";
    const subject = encodeURIComponent("Hello Thato, I would like to have a word with you");
    
    window.location.href = `mailto:${email}?subject=${subject}`;
  };

  return (
    <div>
        <Link onClick={handleEmailClick()}>
            Email Me
        </Link>
    </div>
  )
}

export default ContactPage