import React, { useState } from 'react';

const ContactUs = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subject, setSubject] = useState('Orders');
    const [message, setMessage] = useState('');

    return (
        <div>
            <h2>Contact us</h2>
            <br></br>
            <form>
                <label>First Name: </label>
                <input 
                    type="text" 
                    required
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} />
                <br></br>
                <label>Last Name: </label>
                <input 
                    type="text"
                    required 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} />
                <br></br>
                <br></br>
                <label>What Can We Help You With? </label>
                <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                >
                    <option value="Orders">Orders</option>
                    <option value="Avalability">Avalability</option>
                    <option value="General">General</option>
                </select>
                <br></br>
                <br></br>
                <label>Message</label>
                <br></br>
                <textarea 
                    required
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} />
                <br></br>
                <input 
                    type="submit" 
                    value="Submit" />
                <br></br>
                <br></br>
                <label>Preview of your message: </label>
                <br></br>
                <br></br>
                <label><b>Full name: </b></label>
                <p>{firstName} {lastName}</p>
                <label><b>Subject:</b></label>
                <p>{subject}</p>
                <label><b>Message:</b></label>
                <p>{message}</p>
                <p>Helloooooooooooooooooo</p>
            </form>
        </div>
    );
}

export default ContactUs;