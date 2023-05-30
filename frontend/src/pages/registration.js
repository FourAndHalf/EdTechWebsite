import React from 'react'
import Login from './login'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Registration() {

    const [data, setData] = useState({ name: "", email:"" , course:""})
   
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
            await axios.post("http://localhost:3000/registration", {name: data.name, email : data.email , course : data.course}) 
                     navigate('/home')
        
        .then(res=>{
            if(res.data=="exist"){
                alert("User already exists")
            }
            else if(res.data=="notexist"){
                history("/home",{state:{id:email}})
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })

    }
        catch (e){
            console.error(e)

        }
    }

  



  return (
    <div>
      <div className="container-fluid bg-registration py-5" style={{margin: '90px 0'}}>
<div className="container py-5">
    <div className="row align-items-center">
        <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="mb-4">
                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Need Any Courses</h5>
                <h1 className="text-white">30% Off For New Students</h1>
            </div>
            <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor</p>
            <ul className="list-inline text-white m-0">
                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
            </ul>
        </div>
        <div className="col-lg-5">
            <div className="card border-0">
                <div className="card-header bg-light text-center p-4">
                    <h1 className="m-0">Sign Up Now</h1>
                </div>
                <div className="card-body rounded-bottom bg-primary p-5">
                    <form action = "POST">
                        <div className="form-group">
                            <input type="text" className="form-control border-0 p-4" name = "name" value = {data.value}  placeholder="Your name" required="required" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control border-0 p-4" name = "email" value = {data.value}placeholder="Your email" required="required" />
                        </div>
                       
                        <div className="form-group">
                            <select className="custom-select border-0 px-4" style={{height: '47px'}} name = "email" value = {data.value}>
                                <option selected>Select a course</option>
                                <option value="1">Cybersecurity</option>
                                <option value="2">Full stacks development</option>
                                <option value="3">testing</option>
                            </select>
                        </div>
                        <div>
                            <button className="btn btn-dark btn-block border-0 py-3" type="submit">Sign Up Now</button>
                        </div>
                       
                    </form>
                    <div className="mt-4 ">
                    <p>Already have an account? <a href="/login">Log In</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default Registration