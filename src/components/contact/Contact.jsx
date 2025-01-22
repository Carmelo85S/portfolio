import '../../style/contact/contact.css';

const Contact = () => {
  return (
    <section className="contact-wrapper">
        <section className="contact-container">
            <section className="contact-container-text">
                <h2 className="contact-heading">
                    Do you wanna know more about me?
                </h2>
                <p className="info">
                    Feel free to send me a message through this form. 
                    Whether you have a question, a project idea, or just want to connect, 
                    I’d love to hear from you! I look forward to starting a conversation and exploring how we can work together.
                </p>

            </section>
            <section className="form-container">
                <form action="">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" required />

                    <label htmlFor="surname">Surname: </label>
                    <input type="text" id="surname" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder="Write your message here" required/>

                    <button className="submit" type="submit">Submit</button>
                </form>
            </section>
        </section>
      
    </section>
  )
}

export default Contact
