import React, { useState } from 'react'

import blog_1 from '../img/blog-1.jpg'
import blog_2 from '../img/blog-2.jpg'
import blog_3 from '../img/blog-3.jpg'
import blog_big from '../img/blog-80x80.jpg'
import user from '../img/user.jpg'

const Blog = () => {
    const [subscriberEmail, setSubscriberEmail] = useState('');
    
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

        {/* <!-- Navbar Start --> */}
            <div class="container-fluid">
                <div class="row border-top px-xl-5">
                    <div class="col-lg-3 d-none d-lg-block">
                        <a class="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none" data-toggle="collapse" href="#navbar-vertical" style={{height: '67px', padding: '0 30px'}}>
                            <h5 class="text-primary m-0"><i class="fa fa-book-open mr-2"></i>Subjects</h5>
                            <i class="fa fa-angle-down text-primary"></i>
                        </a>
                        <nav class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{width: 'calc(100% - 30px)', zIndex: '9'}}>
                            <div class="navbar-nav w-100">
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link" data-toggle="dropdown">Web Design <i class="fa fa-angle-down float-right mt-1"></i></a>
                                    <div class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                        <a href="" class="dropdown-item">HTML</a>
                                        <a href="" class="dropdown-item">CSS</a>
                                        <a href="" class="dropdown-item">jQuery</a>
                                    </div>
                                </div>
                                <a href="" class="nav-item nav-link">Apps Design</a>
                                <a href="" class="nav-item nav-link">Marketing</a>
                                <a href="" class="nav-item nav-link">Research</a>
                                <a href="" class="nav-item nav-link">SEO</a>
                            </div>
                        </nav>
                    </div>
                    <div class="col-lg-9">
                        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="" class="text-decoration-none d-block d-lg-none">
                                <h1 class="m-0"><span class="text-primary">E</span>COURSES</h1>
                            </a>
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div class="navbar-nav py-0">
                                    <a href="/" class="nav-item nav-link">Home</a>
                                    <a href="about" class="nav-item nav-link">About</a>
                                    <a href="course" class="nav-item nav-link">Courses</a>
                                    <a href="teacher" class="nav-item nav-link">Teachers</a>
                                    <div class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle active" data-toggle="dropdown">Blog</a>
                                        <div class="dropdown-menu rounded-0 m-0">
                                            <a href="blog" class="dropdown-item active">Blog Grid</a>
                                            <a href="single" class="dropdown-item">Blog Detail</a>
                                        </div>
                                    </div>
                                    <a href="contact" class="nav-item nav-link">Contact</a>
                                </div>
                                <a class="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href="/join">Join Now</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        {/* <!-- Navbar End --> */}


        {/* <!-- Header Start --> */}
            <div class="container-fluid page-header" style={{marginBottom: '90px'}}>
                <div class="container">
                    <div class="d-flex flex-column justify-content-center" style={{minHeight: '300px'}}>
                        <h3 class="display-4 text-white text-uppercase">Blog</h3>
                        <div class="d-inline-flex text-white">
                            <p class="m-0 text-uppercase"><a class="text-white" href="">Home</a></p>
                            <i class="fa fa-angle-double-right pt-1 px-3"></i>
                            <p class="m-0 text-uppercase">Blog</p>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- Header End --> */}


        {/* <!-- Blog Start --> */}
            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="row pb-3">
                                <div class="col-lg-6 mb-4">
                                    <div class="blog-item position-relative overflow-hidden rounded mb-2">
                                        <img class="img-fluid" src={blog_1} alt="" />
                                        <a class="blog-overlay text-decoration-none" href="">
                                            <h5 class="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                            <p class="text-primary m-0">Jan 01, 2050</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="blog-item position-relative overflow-hidden rounded mb-2">
                                        <img class="img-fluid" src={blog_2} alt="" />
                                        <a class="blog-overlay text-decoration-none" href="">
                                            <h5 class="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                            <p class="text-primary m-0">Jan 01, 2050</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="blog-item position-relative overflow-hidden rounded mb-2">
                                        <img class="img-fluid" src={blog_3} alt="" />
                                        <a class="blog-overlay text-decoration-none" href="">
                                            <h5 class="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                            <p class="text-primary m-0">Jan 01, 2050</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="blog-item position-relative overflow-hidden rounded mb-2">
                                        <img class="img-fluid" src={blog_1} alt="" />
                                        <a class="blog-overlay text-decoration-none" href="">
                                            <h5 class="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                            <p class="text-primary m-0">Jan 01, 2050</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="blog-item position-relative overflow-hidden rounded mb-2">
                                        <img class="img-fluid" src={blog_2} alt="" />
                                        <a class="blog-overlay text-decoration-none" href="">
                                            <h5 class="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                            <p class="text-primary m-0">Jan 01, 2050</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="blog-item position-relative overflow-hidden rounded mb-2">
                                        <img class="img-fluid" src={blog_3} alt="" />
                                        <a class="blog-overlay text-decoration-none" href="">
                                            <h5 class="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                            <p class="text-primary m-0">Jan 01, 2050</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <nav aria-label="Page navigation">
                                        <ul class="pagination pagination-lg justify-content-center mb-0">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span class="sr-only">Next</span>
                                            </a>
                                        </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
            
                        <div class="col-lg-4 mt-5 mt-lg-0">
                        {/* <!-- Author Bio --> */}
                            <div class="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
                                <img src={user} class="img-fluid rounded-circle mx-auto mb-3" style={{width: '100px'}} />
                                <h3 class="text-primary mb-3">John Doe</h3>
                                <h3 class="text-uppercase mb-4" style={{letterSpacing: '5px'}}>Tag Cloud</h3>
                                <p class="text-white m-0">Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est  ipsum erat kasd amet elitr</p>
                            </div>
            
                        {/* <!-- Search Form --> */}
                            <div class="mb-5">
                                <form action="">
                                    <div class="input-group">
                                        <input type="text" class="form-control form-control-lg" placeholder="Keyword" />
                                        <div class="input-group-append">
                                            <span class="input-group-text bg-transparent text-primary"><i
                                                    class="fa fa-search"></i></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
            
                        {/* <!-- Category List --> */}
                            <div class="mb-5">
                                <h3 class="text-uppercase mb-4" style={{letterSpacing: '5px'}}>Categories</h3>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a href="" class="text-decoration-none h6 m-0">Web Design</a>
                                        <span class="badge badge-primary badge-pill">150</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a href="" class="text-decoration-none h6 m-0">Web Development</a>
                                        <span class="badge badge-primary badge-pill">131</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a href="" class="text-decoration-none h6 m-0">Online Marketing</a>
                                        <span class="badge badge-primary badge-pill">78</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a href="" class="text-decoration-none h6 m-0">Keyword Research</a>
                                        <span class="badge badge-primary badge-pill">56</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a href="" class="text-decoration-none h6 m-0">Email Marketing</a>
                                        <span class="badge badge-primary badge-pill">98</span>
                                    </li>
                                </ul>
                            </div>
            
                        {/* <!-- Recent Post --> */}
                            <div class="mb-5">
                                <h3 class="text-uppercase mb-4" style={{letterSpacing: '5px'}}>Recent Post</h3>
                                <a class="d-flex align-items-center text-decoration-none mb-3" href="">
                                    <img class="img-fluid rounded" src={blog_big} alt="" />
                                    <div class="pl-3">
                                        <h6 class="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                        <small>Jan 01, 2050</small>
                                    </div>
                                </a>
                                <a class="d-flex align-items-center text-decoration-none mb-3" href="">
                                    <img class="img-fluid rounded" src={blog_big} alt="" />
                                    <div class="pl-3">
                                        <h6 class="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                        <small>Jan 01, 2050</small>
                                    </div>
                                </a>
                                <a class="d-flex align-items-center text-decoration-none mb-3" href="">
                                    <img class="img-fluid rounded" src={blog_big} alt="" />
                                    <div class="pl-3">
                                        <h6 class="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                        <small>Jan 01, 2050</small>
                                    </div>
                                </a>
                            </div>
            
                        {/* <!-- Tag Cloud --> */}
                            <div class="mb-5">
                                <h3 class="text-uppercase mb-4" style={{letterSpacing: '5px'}}>Tag Cloud</h3>
                                <div class="d-flex flex-wrap m-n1">
                                    <a href="" class="btn btn-outline-primary m-1">Design</a>
                                    <a href="" class="btn btn-outline-primary m-1">Development</a>
                                    <a href="" class="btn btn-outline-primary m-1">Marketing</a>
                                    <a href="" class="btn btn-outline-primary m-1">SEO</a>
                                    <a href="" class="btn btn-outline-primary m-1">Writing</a>
                                    <a href="" class="btn btn-outline-primary m-1">Consulting</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- Blog End --> */}


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


        {/* <!-- Back to Top --> */}
            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="fa fa-angle-double-up"></i></a>
    </>
  )
}

export default Blog