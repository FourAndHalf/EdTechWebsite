
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';


function ContactForm() {
    const [data, setData] = useState({name:"", email:"", subject:"", message:""});

  
     const handleChange = (e) =>{
        const name = e.target.name//name
        const value = e.target.value//value
        setData({...data,[name]:value})

       
    }
// //The specific property corresponding to the name extracted from the input field is updated with the new value.
//  This is achieved by enclosing the name in square brackets [name] within the object literal. 
// For example, if name is "email" and value is "example@example.com", the updated property will be { email: "example@example.com" }.



   const handleSubmit = (e) => {
    
    e.preventDefault()
    toast("successfully submitted your query")
     
   
   }

  return (
    <div>
      {/* CONTACT US FORM */}
    <form method = 'post' onSubmit={handleSubmit}>
      <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="text-center mb-5">
                        <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Contact</h5>
                        <h1>Contact For Any Query</h1>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="contact-form bg-secondary rounded p-5">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                    <div class="control-group">
                                        <input type="text" class="form-control border-0 p-4" id="name" name="name" value ={data.name} onChange={handleChange} placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group">
                                        <input type="email" class="form-control border-0 p-4" id="email" name="email" value={data.email} onChange={handleChange} placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group">
                                        <input type="text" class="form-control border-0 p-4" id="subject" name="subject" value ={data.subject} onChange={handleChange}   placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group">
                                        <textarea class="form-control border-0 py-3 px-4" rows="5" id="message" name="message" value ={data.message} onChange={handleChange}  placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="text-center">
                                        <button onSubmit={handleSubmit}class="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                                    
                            </div>
                            
                                </form>
                                {/* <p>{data.name},{data.email}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        {/* <!-- Contact End --> */}
     
    </div>
  )
}

export default ContactForm
