import React, { useState } from 'react'

const Join = () => {
    const [joinUsForm, setJoinUsForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        education: "",
        course: "",
        address: "",
        locality: "",
        state: "",
        pincode: ""
    })

    const joinUs = (event) => {
        event.preventDefault();
       
        fetch("http://localhost:5000/api/joinUs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: joinUsForm.firstName,
                lastName: joinUsForm.lastName,
                email: joinUsForm.email,
                phoneNumber: joinUsForm.phone,
                education: joinUsForm.education,
                course: joinUsForm.course,
                address: joinUsForm.address,
                locality: joinUsForm.locality,
                state: joinUsForm.state,
                pincode: joinUsForm.pincode
            })
        })
       
        window.location.reload();
    };
       

  return (
    <>
        {/* Topbar Start */}
        <div className="container-fluid d-none d-lg-block">
                <div className="row align-items-center py-4 px-xl-5">
                    <div className="col-lg-3">
                        <a href="/" className="text-decoration-none">
                            <h1 className="m-0"><span className="text-primary">E</span>DUZELL</h1>
                        </a>
                    </div>
                    <div className="col-lg-3 text-right">
                        <a href="https://goo.gl/maps/LCV73H7W8qj7VLiY9" className="text-decoration-none">
                            <div className="d-inline-flex align-items-center">
                                <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                                <div className="text-left">
                                    <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                                    <small>Kochi, India</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 text-right">
                        <a href="mailto:eduzellTechnologies@gmail.com" className="text-decoration-none">
                            <div className="d-inline-flex align-items-center">
                                <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
                                <div className="text-left">
                                    <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                                    <small>eduzell@gmail.com</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 text-right">
                        <a href="tel:1234567890" className="text-decoration-none">
                            <div className="d-inline-flex align-items-center">
                                <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                                <div className="text-left">
                                    <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                                    <small>+91 9976485712</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        {/* Topbar End */}

        {/* Join Us */}
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <form action={joinUs}>
                    <div className="formbold-form-title">
                        <h2 className="text-primary">Join Us</h2>
                    </div>

                    <div className="formbold-input-flex">
                        <div>
                            <label for="firstname" className="formbold-form-label">
                            First name
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                className="formbold-form-input"
                                onChange={(event) => setJoinUsForm({...joinUsForm, firstName: event.target.value})}
                                value={joinUsForm.firstName}
                            />
                        </div>
                        <div>
                            <label for="lastname" className="formbold-form-label"> Last name </label>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                className="formbold-form-input"
                                onChange={(event) => setJoinUsForm({...joinUsForm, lastName: event.target.value})}
                                value={joinUsForm.lastName}
                            />
                        </div>
                    </div>

                    <div className="formbold-input-flex">
                        <div>   
                            <label for="email" className="formbold-form-label"> Email </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="formbold-form-input"
                                onChange={(event) => setJoinUsForm({...joinUsForm, email: event.target.value})}
                                value={joinUsForm.email}
                            />
                        </div>
                        <div>
                            <label for="phone" className="formbold-form-label"> Phone number </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                className="formbold-form-input"
                                onChange={(event) => setJoinUsForm({...joinUsForm, phone: event.target.value})}
                                value={joinUsForm.phone}
                            />
                        </div>
                    </div>

                    <div className="formbold-mb-3">
                        <label for="education" className="formbold-form-label">
                            Education
                        </label>
                        <input
                            type="text"
                            name="education"
                            id="education"
                            className="formbold-form-input"
                            onChange={(event) => setJoinUsForm({...joinUsForm, education: event.target.value})}
                            value={joinUsForm.education}
                        />
                    </div>

                    <div className="formbold-mb-3">
                        <label for="course" className="formbold-form-label">
                            Course                        
                        </label>
                        <select className="formbold-form-input" placeholder='Select a course' style={{height: '47px'}} onChange={(event) => setJoinUsForm({...joinUsForm, course: event.target.value})} value={joinUsForm.course} >
                            <option value="FrontEnd Development">FrontEnd Development</option>
                            <option value="BackEnd Development">BackEnd Development</option>
                            <option value="FullStack Development">FullStack Development</option>
                        </select>
                    </div>

                    <div className="formbold-mb-3">
                        <label for="address" className="formbold-form-label">
                            Street Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            className="formbold-form-input"
                            onChange={(event) => setJoinUsForm({...joinUsForm, address: event.target.value})}
                            value={joinUsForm.address}
                        />
                    </div>

                    <div className="formbold-mb-3">
                        <label for="locality" className="formbold-form-label">
                            Locality
                        </label>
                        <input
                            type="text"
                            name="locality"
                            id="locality"
                            className="formbold-form-input"
                            onChange={(event) => setJoinUsForm({...joinUsForm, locality: event.target.value})}
                            value={joinUsForm.locality}
                        />
                    </div>

                    <div className="formbold-input-flex">
                        <div>
                            <label for="state" className="formbold-form-label"> State </label>
                            <input
                                type="text"
                                name="state"
                                id="state"
                                className="formbold-form-input"
                                onChange={(event) => setJoinUsForm({...joinUsForm, state: event.target.value})}
                                value={joinUsForm.state}
                            />
                        </div>
                        <div>
                            <label for="pincode" className="formbold-form-label"> Pincode </label>
                            <input
                                type="text"
                                name="pincode"
                                id="pincode"
                                className="formbold-form-input"
                                onChange={(event) => setJoinUsForm({...joinUsForm, pincode: event.target.value})}
                                value={joinUsForm.pincode}
                            />
                        </div>
                    </div>

                    <div className="formbold-checkbox-wrapper">
                        <label for="supportCheckbox" className="formbold-checkbox-label">
                            <div className="formbold-relative">
                            <input
                                type="checkbox"
                                id="supportCheckbox"
                                className="formbold-input-checkbox"
                                required
                            />
                            <div className="formbold-checkbox-inner">
                                <span className="formbold-opacity-0">
                                <svg
                                    width="11"
                                    height="8"
                                    viewBox="0 0 11 8"
                                    fill="none"
                                    className="formbold-stroke-current"
                                >
                                    <path
                                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                        stroke-width="0.4"
                                    ></path>
                                </svg>
                                </span>
                            </div>
                            </div>
                            I agree to the defined
                            <a href="/about"> terms, conditions, and policies</a>
                        </label>
                    </div>

                    <button className="formbold-btn">Register Now</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Join