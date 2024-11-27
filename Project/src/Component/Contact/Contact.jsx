import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "81fc3329-12e1-4830-b722-b2ae03089fa8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className='contact'>

            <div className='contact-col'>
                <h3>
                    Send us a message <img src={msg_icon} />
                </h3>
                <p>
                    Feel free to reach out through contact from or find contact<br />
                    information below.Yours feedback, questions and suggestion are <br />
                    important to us as we  strive  to provide exceptional service to our <br />
                    university community.
                </p>
                <ul>
                    <li><img src={mail_icon} />Contact@rrgi.in</li>
                    <li><img src={phone_icon} />+91-830-355-9818</li>
                    <li><img src={location_icon} />Bakshi ka Talab Sitapur Road Lucknow U.P</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name="name" placeholder='Enter your name required' />
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your mobile number' required />
                    <label>Write your messages here</label>
                    <textarea name="message" rows="6" placeholder='Enter your meassage' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
