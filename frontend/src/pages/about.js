import React, { useState }  from 'react'

import about from '../img/about.jpg'

const About = () => {
    const [subscriberEmail, setSubscriberEmail] = useState('');
    const [signUpForm,  setSignUpForm] = useState({
        name: '',
        email: '',
        course: '',
    });

    const getSubscriberEmail = async ( event ) => {
        event.preventDefault();

        fetch('http://localhost:5000/api/subscribeEmail', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: subscriberEmail
            })
        });

        window.location.reload();
    };

    const getSignUp  = async ( event ) => {
        event.preventDefault();

        fetch('http://localhost:5000/api/signUp', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name: signUpForm.name,
                email: signUpForm.email,
                course: signUpForm.course
            })
        });

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


        {/* Navbar Start  */}
        <div className="container-fluid">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none" data-toggle="collapse" href="#navbar-vertical" style={{height: '67px', padding: '0 30px'}}>
                            <h5 className="text-primary m-0"><i className="fa fa-book-open mr-2"></i>Subjects</h5>
                            <i className="fa fa-angle-down text-primary"></i>
                        </a>
                        <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{width: 'calc(100% - 30px)', zIndex: '9'}}>
                            <div className="navbar-nav w-100">
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link" data-toggle="dropdown">Web Design <i className="fa fa-angle-down float-right mt-1"></i></a>
                                    <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                        <a href="" className="dropdown-item">HTML</a>
                                        <a href="" className="dropdown-item">CSS</a>
                                        <a href="" className="dropdown-item">jQuery</a>
                                    </div>
                                </div>
                                <a href="" className="nav-item nav-link">Apps Design</a>
                                <a href="" className="nav-item nav-link">Marketing</a>
                                <a href="" className="nav-item nav-link">Research</a>
                                <a href="" className="nav-item nav-link">SEO</a>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav py-0">
                                    <a href="/" className="nav-item nav-link active">Home</a>
                                    <a href="about" className="nav-item nav-link">About</a>
                                    <a href="course" className="nav-item nav-link">Courses</a>
                                    <a href="teacher" className="nav-item nav-link">Teachers</a>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Blog</a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <a href="blog" className="dropdown-item">Blog List</a>
                                            <a href="single" className="dropdown-item">Blog Detail</a>
                                        </div>
                                    </div>
                                    <a href="contact" className="nav-item nav-link">Contact</a>
                                </div>
                                <a className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href="/join">Join Now</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        {/* Navbar End */}


        {/*  Header Start  */}
            <div class="container-fluid page-header" style={{marginBottom: '90px'}}>
                <div class="container">
                    <div class="d-flex flex-column justify-content-center" style={{minHeight: '300px'}}>
                        <h3 class="display-4 text-white text-uppercase">About</h3>
                        <div class="d-inline-flex text-white">
                            <p class="m-0 text-uppercase"><a class="text-white" href="">Home</a></p>
                            <i class="fa fa-angle-double-right pt-1 px-3"></i>
                            <p class="m-0 text-uppercase">About</p>
                        </div>
                    </div>
                </div>
            </div>
        {/*  Header End  */}


         {/* About Start  */}
            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <img class="img-fluid rounded mb-4 mb-lg-0" src={about} alt="" />
                        </div>
                        <div class="col-lg-7">
                            <div class="text-left mb-4">
                                <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>About Us</h5>
                                <h1>Innovative Way To Learn</h1>
                            </div>
                            <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
                            <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        {/* About End  */}


{/*  Registration Start  */}
<div className="container-fluid bg-registration py-5" style={{margin: '90px 0'}}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="mb-4">
                                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Need Any Courses</h5>
                                <h1 className="text-white">30% Off For New Students</h1>
                            </div>
                            <p className="text-white">Eduzell IT Solutions offers a comprehensive range of IT services to help clients optimize their technology infrastructure and improve their business processes. With customized solutions tailored to meet the specific needs of each individual’s career and business, Eduzell is committed to delivering the highest quality services to its clients. With responsive support, competitive pricing, and training and support, Eduzell is a great choice for anyone looking to advance their IT skills</p>
                            <ul className="list-inline text-white m-0">
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Excellent training facility</li>
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Industry experieced staff</li>
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Timely review of progress</li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0">
                                <div className="card-header bg-light text-center p-4">
                                    <h1 className="m-0">Sign Up Now</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-primary p-5">
                                    <form onSubmit={getSignUp}>
                                        <div className="form-group">
                                            <input type="text" className="form-control border-0 p-4" placeholder="Your name" required="required" onChange={(event) => setSignUpForm({...signUpForm, name: event.target.value})} value={signUpForm.name} />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control border-0 p-4" placeholder="Your email" required="required" onChange={(event) => setSignUpForm({...signUpForm, email: event.target.value})} value={signUpForm.email} />
                                        </div>
                                        <div className="form-group">
                                            <select className="custom-select border-0 px-4" placeholder='Select a course' style={{height: '47px'}} onChange={(event) => setSignUpForm({...signUpForm, course: event.target.value})} value={signUpForm.course} >
                                                <option value="" disabled>Select a course</option>
                                                <option value="FrontEnd Development">FrontEnd Development</option>
                                                <option value="BackEnd Development">BackEnd Development</option>
                                                <option value="FullStack Development">FullStack Development</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button className="btn btn-dark btn-block border-0 py-3" type="submit">Sign Up Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*  Registration End  */}

         {/*  Footer Start  */}
            <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{marginTop: '90px'}}>
                <div className="row pt-5">
                    <div className="col-lg-7 col-md-12">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: '5px'}}>Get In Touch</h5>
                                <p><i className="fa fa-map-marker-alt mr-2"></i>Kochi, India</p>
                                <p><i className="fa fa-phone-alt mr-2"></i>+91 9941475245</p>
                                <p><i className="fa fa-envelope mr-2"></i>info@eduzell.com</p>
                                <div className="d-flex justify-content-start mt-4">
                                    <a className="btn btn-outline-light btn-square mr-2" href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-square mr-2" href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-square mr-2" href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-outline-light btn-square" href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: '5px'}}>Our Courses</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-white mb-2" href="https://www.coursera.org/search?query=web%20design"><i className="fa fa-angle-right mr-2"></i>Web Design</a>
                                    <a className="text-white mb-2" href="https://www.coursera.org/search?query=web%20design"><i className="fa fa-angle-right mr-2"></i>Apps Design</a>
                                    <a className="text-white mb-2" href="https://www.coursera.org/search?query=web%20design"><i className="fa fa-angle-right mr-2"></i>Marketing</a>
                                    <a className="text-white mb-2" href="https://www.coursera.org/search?query=web%20design"><i className="fa fa-angle-right mr-2"></i>Research</a>
                                    <a className="text-white" href="https://www.coursera.org/search?query=web%20design"><i className="fa fa-angle-right mr-2"></i>SEO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 mb-5">
                        <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: '5px'}}>Newsletter</h5>
                        <p>Subscribe to our newsletter to stay up-to-date with the latest news and updates. Get exclusive content, special offers, and more delivered straight to your inbox.</p>
                        <div className="w-100">
                            <form onSubmit={getSubscriberEmail} className="input-group">
                                <input type="email" className="form-control border-light" style={{padding: '30px'}} placeholder="Your Email Address" onChange={(event) => setSubscriberEmail(event.target.value)} value={subscriberEmail} />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary px-4">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
                <div className="row">
                    <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="m-0 text-white">&copy; <a href="#">Eduzell Technologies</a>. All Rights Reserved. 
                        </p>
                    </div>
                    <div className="col-lg-6 text-center text-md-right">
                        <ul className="nav d-inline-flex">
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="/about">Privacy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="/about">Terms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="/about">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="/about">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        {/*  Footer End  */}

        {/*  Back to Top  */}
            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="fa fa-angle-double-up"></i></a>
    </>
  )
}

export default About