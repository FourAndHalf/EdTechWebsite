
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { set } from 'mongoose';


function ContactForm() {
    const [data, setData] = useState({
        name:"", 
        email:"", 
        subject:"", 
        message:""
    });
  
    const form = useRef()

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_8zvn8hf', 'template_3r8xb6j', form.current, 'fby2htD9JgaET9_-i')
            .then((result) => {
                console.log(result.text);
                toast.success("successfully submitted your query")
            }, (error) => {
                console.log(error.text);
            });

        fetch('http://localhost:5000/api/contactUs', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            })
        });

        window.location.reload();
    };
   
  return (
    <div>
      {/* <!-- Contact Form -->  */}
   
      <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Contact</h5>
                        <h1>Contact For Any Query</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form bg-secondary rounded p-5">
                                <div id="success"></div>
                                    <form method = 'post' ref = {form} onSubmit={sendEmail} name="sentMessage" id="contactForm" noValidate>
                                        <div className="control-group">
                                            <input type="text" className="form-control border-0 p-4" id="name" name="name" onChange={(event) => setData({...data, name: event.target.value})} value ={data.name} placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="email" className="form-control border-0 p-4" id="email" name="email" value={data.email} onChange={(event) => setData({...data, email: event.target.value})} placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="text" className="form-control border-0 p-4" id="subject" name="subject" value ={data.subject} onChange={(event) => setData({...data, subject: event.target.value})} placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <textarea className="form-control border-0 py-3 px-4" rows="5" id="message" name="message" value ={data.message} onChange={(event) => setData({...data, message: event.target.value})}  placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Ask Query</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        {/* <!-- Contact End --> */}
</div>
  )
}

export default ContactForm
