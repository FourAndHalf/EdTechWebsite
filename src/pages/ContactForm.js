
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ContactForm() {
    const [data, setData] = useState({name:"", email:"", subject:"", message:""});
  
    const form = useRef()

  
     const handleChange = (e) =>{
        const name = e.target.name//name
        const value = e.target.value//value
        setData({...data,[name]:value})

       
    }
//The specific property corresponding to the name extracted from the input field is updated with the new value.
//  This is achieved by enclosing the name in square brackets [name] within the object literal. 
// For example, if name is "email" and value is "example@example.com", the updated property will be { email: "example@example.com" }.



   const sendEmail = (e) => {
    
    
   
   
        e.preventDefault();
        
        emailjs.sendForm('service_8zvn8hf', 'template_3r8xb6j', form.current, 'fby2htD9JgaET9_-i')
          .then((result) => {
              console.log(result.text);
              toast.success("successfully submitted your query")
              setData({ name: "", email: "", subject: "", message: "" });  // Reset form fields
          }, (error) => {
              console.log(error.text);
          });
      };
    //  e.target.reset()
   
   
  return (
    <div>
      {/* CONTACT US FORM */}
   
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
                                        <input type="text" className="form-control border-0 p-4" id="name" name="name" value ={data.name} onChange={handleChange} placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control border-0 p-4" id="email" name="email" value={data.email} onChange={handleChange} placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control border-0 p-4" id="subject" name="subject" value ={data.subject} onChange={handleChange}   placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control border-0 py-3 px-4" rows="5" id="message" name="message" value ={data.message} onChange={handleChange}  placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                                    
                            </div>
                            </form>
                                
                                {/* <p>{data.name},{data.email}</p> */}
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
