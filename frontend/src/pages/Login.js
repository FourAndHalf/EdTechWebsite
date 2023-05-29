import React from 'react'
import { useState } from 'react'
import Registration from './Registration'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';



function Login() {

    const [data, setData] = useState({ email:"" , password:""})
   
    const navigate = useNavigate();

    const handleChange = (e) =>
    {
        const name = e.target.value
        const value = e.target.value
        setData({...data,[name]:value})

    }

    async function submit (e)
    {
        e.preventDefault()
        

        try{
            await axios.post("http://localhost:8080/",
             {email : data.email , password : data.password}) 
                     
        
        .then (res =>{
            if(res.data == "exist")
            {
                navigate('/home', {state:{id:email}})
            }
            else if(res.data = "not exist")
            {
               alert("user have not signUp")
            }


        })

        .catch (e=>{
            alert("wrong details")
            console.log(e)

        })
    }
    catch(e){
        console.log(e)
    }

}



  return (
    // <div className='login'>

    //     {/* <form action ="POST">
    //         <input type='email'  name='email' value={data.email} onChange={handleChange} placeholder = 'email' />
    //         <input type='password' name='password' value={data.password} onChange={handleChange} placeholder ='password' />
    //         <input type='submit'  />
    //     </form> */}

    <div>
    {/* CONTACT US FORM */}
 
    <div className="container-fluid py-5">
              <div className="container py-5">
                  <div className="text-center mb-5">
                      
                      <h1>Login</h1>
                  </div>
                  <div className="row justify-content-center">
                      <div className="col-lg-8">
                          <div className="contact-form bg-secondary rounded p-5">
                              <div id="success"></div>

                              <form method = 'post'  name="sentMessage" id="contactForm" noValidate>
                                  
                                  <div className="control-group">
                                      <input type="text" className="form-control border-0 p-4" id="email" name="email" value ={data.email} onChange={handleChange} placeholder="Email" required="required" data-validation-required-message="Please enter your name" />
                                      <p className="help-block text-danger"></p>
                                  </div>
                                  <div className="control-group">
                                      <input type="email" className="form-control border-0 p-4" id="password" name="password" value={data.password} onChange={handleChange} placeholder="Password" required="required" data-validation-required-message="Please enter your email" />
                                      <p className="help-block text-danger"></p>
                                  </div>
                                  
                                  <div className="text-center">
                                      <button className="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton" onClick={submit}>Login</button>
                                  
                          </div>
                          </form>
                              
                              {/* <p>{data.name},{data.email}</p> */}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
       
      
    </div>
  )
}

export default Login
