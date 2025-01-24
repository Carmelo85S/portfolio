import { useState } from 'react';
import Swal from 'sweetalert2';
import '../../style/contact/contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);
        
        formData.append("access_key", "6e6cf3cd-0c30-4fac-9437-12120650488f");
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // Show success message with SweetAlert2
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success",
                    confirmButtonText: "OK"
                });
                event.target.reset(); // Reset form fields
            } else {
                // Show error message with SweetAlert2
                Swal.fire({
                    title: "Error!",
                    text: data.message || "An error occurred. Please try again.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            }
        } catch (error) {
            // Handle network errors form
            Swal.fire({
                title: "Error!",
                text: "An error occurred while sending your message. Please try again later.",
                icon: "error",
                confirmButtonText: "OK"
            });
            console.error("Error during form submission:", error);
        } finally {
            setIsSubmitting(false); // Reset submitting state
        }
    };

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
                        I’d love to hear from you! I look forward to starting a conversation 
                        and exploring how we can work together.
                    </p>
                </section>
                <section className="form-container">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" required />

                        <label htmlFor="surname">Surname: </label>
                        <input type="text" name="surname" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder="Write your message here" required />

                        <button className="submit" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </section>
            </section>
        </section>
    );
};

export default Contact;
