import React, { useState } from 'react'

import carousalImage_1 from '../img/carousel-1.jpg'
import carousalImage_2 from '../img/carousel-2.jpg'
import carousalImage_3 from '../img/carousel-3.jpg'
import about from '../img/about.jpg'
import cat_1 from '../img/cat-1.jpg'
import cat_2 from '../img/cat-2.jpg'
import cat_3 from '../img/cat-3.jpg'
import cat_4 from '../img/cat-4.jpg'
import cat_5 from '../img/cat-5.jpg'
import cat_6 from '../img/cat-6.jpg'
import cat_7 from '../img/cat-7.jpg'
import cat_8 from '../img/cat-8.jpg'
import course_1 from '../img/course-1.jpg'
import course_2 from '../img/course-2.jpg'
import course_3 from '../img/course-3.jpg'
import course_4 from '../img/course-4.jpg'
import course_5 from '../img/course-5.jpg'
import course_6 from '../img/course-6.jpg'
import team_1 from '../img/team-1.jpg'
import team_2 from '../img/team-2.jpg'
import team_3 from '../img/team-3.jpg'
import team_4 from '../img/team-4.jpg'
import blog_1 from '../img/blog-1.jpg'
import blog_2 from '../img/blog-2.jpg'
import blog_3 from '../img/blog-3.jpg'

const Home = () => {

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
                                        <a href="https://www.coursera.org/search?query=html" className="dropdown-item">HTML</a>
                                        <a href="https://www.coursera.org/search?query=css" className="dropdown-item">CSS</a>
                                        <a href="https://www.coursera.org/search?query=jquery" className="dropdown-item">jQuery</a>
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

        {/* Carousal  Start  */}
            <div className="container-fluid p-0 pb-5 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#header-carousel" data-slide-to="1"></li>
                        <li data-target="#header-carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{minHeight: '300px'}}>
                            <img className="position-relative w-100" src={carousalImage_1} style={{minHeight: '300px', objectFit: 'cover'}} />
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                                    <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                                    <h1 className="display-3 text-white mb-md-4">Best Education From Your Home</h1>
                                    <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{minHeight: '300px'}}>
                            <img className="position-relative w-100" src={carousalImage_2} style={{minHeight: '300px', objectFit: 'cover'}} />
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                                    <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                                    <h1 className="display-3 text-white mb-md-4">Best Online Learning Platform</h1>
                                    <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{minHeight: '300px'}}>
                            <img className="position-relative w-100" src={carousalImage_3} style={{minHeight: '300px', objectFit: 'cover'}} />
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                                    <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                                    <h1 className="display-3 text-white mb-md-4">New Way To Learn From Home</h1>
                                    <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* Carousal End   */}

        {/* About Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid rounded mb-4 mb-lg-0" src={about} alt="" />
                        </div>
                        <div className="col-lg-7">
                            <div className="text-left mb-4">
                                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>About Us</h5>
                                <h1>Innovative Way To Learn</h1>
                            </div>
                            <p>At Eduzell Technologies, our mission is to nurture each child’s passion, curiosity, optimism, and educational success. Our philosophy is based on proven learning approaches and our digital resources, tools, and learning materials are developed by educational experts to incorporate leading pedagogical practices. We empower all kinds of educators to teach kids by providing the best educational resources in any form or device to be used at home, at school, and everywhere in-between. We celebrate the diversity of our users by offering differentiated resources that can meet a wide range of educational needs - and raise kids’ confidence in learning. We continue to provide academically sound content of the highest caliber and welcome input from our users as we address issues of equity, diversity, inclusivity, and representation.</p>
                            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        {/* About End */}
        
        {/* <!-- Category Start --> */}
        <div class="container-fluid py-5">
                <div class="container pt-5 pb-3">
                    <div class="text-center mb-5">
                        <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Subjects</h5>
                        <h1>Explore Top Subjects</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src={cat_1} alt="" />
                                <a class="cat-overlay text-white text-decoration-none" href="https://www.coursera.org/search?query=web%20design">
                                    <h4 class="text-white font-weight-medium">Web Design</h4>
                                    <span>25 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src={cat_2} alt="" />
                                <a class="cat-overlay text-white text-decoration-none" href="https://www.coursera.org/search?query=development">
                                    <h4 class="text-white font-weight-medium">Development</h4>
                                    <span>18 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src={cat_3} alt="" />
                                <a class="cat-overlay text-white text-decoration-none" href="https://www.coursera.org/search?query=game%20development&">
                                    <h4 class="text-white font-weight-medium">Game Design</h4>
                                    <span>6 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src={cat_4} alt="" />
                                <a class="cat-overlay text-white text-decoration-none" href="https://www.coursera.org/search?query=app%20design">
                                    <h4 class="text-white font-weight-medium">Apps Design</h4>
                                    <span>15 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src={cat_5} alt="" />
                                <a class="cat-overlay text-white text-decoration-none" href="https://www.coursera.org/search?query=marketing">
                                    <h4 class="text-white font-weight-medium">Marketing</h4>
                                    <span>10 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src={cat_6} alt="" />
                                <a class="cat-overlay text-white text-decoration-none" href="https://www.coursera.org/search?query=research">
                                    <h4 class="text-white font-weight-medium">Research</h4>
                                    <span>5 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src={cat_7} alt="" /> 
                                <a class="cat-overlay text-white text-decoration-none" href="https://www.coursera.org/search?query=Content%20writing">
                                    <h4 class="text-white font-weight-medium">Content Writing</h4>
                                    <span>20 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src={cat_8} alt="" />
                                <a class="cat-overlay text-white text-decoration-none" href="https://www.coursera.org/search?query=SEO">
                                    <h4 class="text-white font-weight-medium">SEO</h4>
                                    <span>13 Courses</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- Category Start --> */}

        {/* <!-- Courses Start --> */}
        <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="text-center mb-5">
                        <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Courses</h5>
                        <h1>Our Popular Courses</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="rounded overflow-hidden mb-2">
                                <img class="img-fluid" src={course_1} alt="" />
                                <div class="bg-secondary p-4">
                                    <div class="d-flex justify-content-between mb-3">
                                        <small class="m-0"><i class="fa fa-users text-primary mr-2"></i>35 Students</small>
                                        <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>03h 00m</small>
                                    </div>
                                    <a class="h5" href="https://www.coursera.org/specializations/web-design">Web design for everybody! Introduction to development</a>
                                    <div class="border-top mt-4 pt-4">
                                        <div class="d-flex justify-content-between">
                                            <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.8 <small>(449)</small></h6>
                                            <h5 class="m-0">₹999</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="rounded overflow-hidden mb-2">
                                <img class="img-fluid" src={course_2} alt="" />
                                <div class="bg-secondary p-4">
                                    <div class="d-flex justify-content-between mb-3">
                                        <small class="m-0"><i class="fa fa-users text-primary mr-2"></i>33 Students</small>
                                        <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>02h 30m</small>
                                    </div>
                                    <a class="h5" href="https://www.coursera.org/learn/introduction-to-cybersecurity-foundations">Introduction to cybersecurity foundations</a>
                                    <div class="border-top mt-4 pt-4">
                                        <div class="d-flex justify-content-between">
                                            <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.7 <small>(320)</small></h6>
                                            <h5 class="m-0">₹1999</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="rounded overflow-hidden mb-2">
                                <img class="img-fluid" src={course_3} alt="" />
                                <div class="bg-secondary p-4">
                                    <div class="d-flex justify-content-between mb-3">
                                        <small class="m-0"><i class="fa fa-users text-primary mr-2"></i>28 Students</small>
                                        <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>02h 30m</small>
                                    </div>
                                    <a class="h5" href="https://www.coursera.org/projects/build-a-full-website-using-wordpress">Build a full website using wordpress</a>
                                    <div class="border-top mt-4 pt-4">
                                        <div class="d-flex justify-content-between">
                                            <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.7 <small>(340)</small></h6>
                                            <h5 class="m-0">₹899</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="rounded overflow-hidden mb-2">
                                <img class="img-fluid" src={course_4} alt="" />
                                <div class="bg-secondary p-4">
                                    <div class="d-flex justify-content-between mb-3">
                                        <small class="m-0"><i class="fa fa-users text-primary mr-2"></i>26 Students</small>
                                        <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>04h 30m</small>
                                    </div>
                                    <a class="h5" href="https://www.coursera.org/learn/meta-cloud-computing">Cloud Computing! Introduction to AWS services</a>
                                    <div class="border-top mt-4 pt-4">
                                        <div class="d-flex justify-content-between">
                                            <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.2 <small>(112)</small></h6>
                                            <h5 class="m-0">₹1599</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="rounded overflow-hidden mb-2">
                                <img class="img-fluid" src={course_5} alt="" />
                                <div class="bg-secondary p-4">
                                    <div class="d-flex justify-content-between mb-3">
                                        <small class="m-0"><i class="fa fa-users text-primary mr-2"></i>25 Students</small>
                                        <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>03h 30m</small>
                                    </div>
                                    <a class="h5" href="https://www.coursera.org/learn/cloud-computing-foundations-duke">Cloud computing fundamentals and theories</a>
                                    <div class="border-top mt-4 pt-4">
                                        <div class="d-flex justify-content-between">
                                            <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.2 <small>(200)</small></h6>
                                            <h5 class="m-0">₹1599</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="rounded overflow-hidden mb-2">
                                <img class="img-fluid" src={course_6} alt="" />
                                <div class="bg-secondary p-4">
                                    <div class="d-flex justify-content-between mb-3">
                                        <small class="m-0"><i class="fa fa-users text-primary mr-2"></i>25 Students</small>
                                        <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>02h 00m</small>
                                    </div>
                                    <a class="h5" href="https://www.coursera.org/professional-certificates/facebook-social-media-marketing">Marketing & customer relations for beginner</a>
                                    <div class="border-top mt-4 pt-4">
                                        <div class="d-flex justify-content-between">
                                            <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.1 <small>(170)</small></h6>
                                            <h5 class="m-0">₹1299</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- Courses End --> */}

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

        {/*  Team Start  */}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Teachers</h5>
                        <h1>Meet Our Teachers</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src={team_1} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-secondary p-4">
                                    <h5>Janice Taylor</h5>
                                    <p className="m-0">Web Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src={team_2} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-secondary p-4">
                                    <h5>John Snow</h5>
                                    <p className="m-0">Network Specialist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src={team_3} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-secondary p-4">
                                    <h5>Mattie Swing</h5>
                                    <p className="m-0">Content Writer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src={team_4} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-secondary p-4">
                                    <h5>Mannie Martin</h5>
                                    <p className="m-0">Game Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*  Team End  */}


        {/*  Blog Start  */}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Our Blog</h5>
                        <h1>Latest From Our Blog</h1>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-4 mb-4">
                            <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={blog_1} alt="" />
                                <a className="blog-overlay text-decoration-none" href="">
                                    <h5 className="text-white mb-3">The Advent of AI in Development Space</h5>
                                    <p className="text-primary m-0">Jan 21, 2023</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={blog_2} alt="" />
                                <a className="blog-overlay text-decoration-none" href="">
                                    <h5 className="text-white mb-3">The Role of Colud Computing</h5>
                                    <p className="text-primary m-0">Nov 23, 2022</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={blog_3} alt="" /> 
                                <a className="blog-overlay text-decoration-none" href="">
                                    <h5 className="text-white mb-3">The State of Content Writing</h5>
                                    <p className="text-primary m-0">Sept 30, 2022</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*  Blog End  */}


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
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </>
  )
}

export default Home