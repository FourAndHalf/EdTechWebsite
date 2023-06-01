import React, { useState } from 'react'

import blog_1 from '../img/blog-1.jpg'
import blog_2 from '../img/blog-2.jpg'
import blog_3 from '../img/blog-3.jpg'
import blog_big from '../img/blog-80x80.jpg'
import user from '../img/user.jpg'

const Blog = () => {
    const [subscriberEmail, setSubscriberEmail] = useState('');

    const handleClickBlog = () => {
        window.location.assign("/addBlog") 
    }
    
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
                                    <a href="/" className="nav-item nav-link">Home</a>
                                    <a href="about" className="nav-item nav-link">About</a>
                                    <a href="course" className="nav-item nav-link">Courses</a>
                                    <a href="teacher" className="nav-item nav-link">Teachers</a>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle active" data-toggle="dropdown">Blog</a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <a href="blog" className="dropdown-item active">Blog Grid</a>
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
        {/* <!-- Navbar End --> */}


        {/* <!-- Header Start --> */}
            <div className="container-fluid page-header" style={{marginBottom: '90px'}}>
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{minHeight: '300px'}}>
                        <h3 className="display-4 text-white text-uppercase">Blog</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                            <i className="fa fa-angle-double-right pt-1 px-3"></i>
                            <p className="m-0 text-uppercase">Blog</p>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- Header End --> */}


        {/* <!-- Blog Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row pb-3">
                                <div className="col-lg-6 mb-4">
                                    <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                        <img className="img-fluid" src={blog_1} alt="" />
                                        <a className="blog-overlay text-decoration-none" href="">
                                            <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                            <p className="text-primary m-0">Jan 01, 2050</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                        <img className="img-fluid" src={blog_2} alt="" />
                                        <a className="blog-overlay text-decoration-none" href="">
                                            <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                            <p className="text-primary m-0">Jan 01, 2050</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                        <img className="img-fluid" src={blog_3} alt="" />
                                        <a className="blog-overlay text-decoration-none" href="">
                                            <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                            <p className="text-primary m-0">Jan 01, 2050</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                        <img className="img-fluid" src={blog_1} alt="" />
                                        <a className="blog-overlay text-decoration-none" href="">
                                            <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                            <p className="text-primary m-0">Jan 01, 2050</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                        <img className="img-fluid" src={blog_2} alt="" />
                                        <a className="blog-overlay text-decoration-none" href="">
                                            <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                            <p className="text-primary m-0">Jan 01, 2050</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                        <img className="img-fluid" src={blog_3} alt="" />
                                        <a className="blog-overlay text-decoration-none" href="">
                                            <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                            <p className="text-primary m-0">Jan 01, 2050</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination pagination-lg justify-content-center mb-0">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-lg-4 mt-5 mt-lg-0">
                        {/* <!-- Author Bio --> */}
                            <div className="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
                                <img src={user} className="img-fluid rounded-circle mx-auto mb-3" style={{width: '100px'}} />
                                <h3 className="text-primary mb-3">John Doe</h3>
                                <h3 className="text-uppercase mb-4" style={{letterSpacing: '5px'}}>Tag Cloud</h3>
                                <p className="text-white m-0">Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est  ipsum erat kasd amet elitr</p>
                            </div>

                        {/*      Create blog     */}
                            <div className="mb-5">
                                <button onClick={handleClickBlog}className='input-group btn btn-primary' style={{justifyContent: 'center'}}>Add Blog</button>
                            </div>
            
                        {/* <!-- Search Form --> */}
                            <div className="mb-5">
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control form-control-lg" placeholder="Keyword" />
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-transparent text-primary"><i
                                                    className="fa fa-search"></i></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
            
                        {/* <!-- Category List --> */}
                            <div className="mb-5">
                                <h3 className="text-uppercase mb-4" style={{letterSpacing: '5px'}}>Categories</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a href="" className="text-decoration-none h6 m-0">Web Design</a>
                                        <span className="badge badge-primary badge-pill">150</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a href="" className="text-decoration-none h6 m-0">Web Development</a>
                                        <span className="badge badge-primary badge-pill">131</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a href="" className="text-decoration-none h6 m-0">Online Marketing</a>
                                        <span className="badge badge-primary badge-pill">78</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a href="" className="text-decoration-none h6 m-0">Keyword Research</a>
                                        <span className="badge badge-primary badge-pill">56</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <a href="" className="text-decoration-none h6 m-0">Email Marketing</a>
                                        <span className="badge badge-primary badge-pill">98</span>
                                    </li>
                                </ul>
                            </div>
            
                        {/* <!-- Recent Post --> */}
                            <div className="mb-5">
                                <h3 className="text-uppercase mb-4" style={{letterSpacing: '5px'}}>Recent Post</h3>
                                <a className="d-flex align-items-center text-decoration-none mb-3" href="">
                                    <img className="img-fluid rounded" src={blog_big} alt="" />
                                    <div className="pl-3">
                                        <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                        <small>Jan 01, 2050</small>
                                    </div>
                                </a>
                                <a className="d-flex align-items-center text-decoration-none mb-3" href="">
                                    <img className="img-fluid rounded" src={blog_big} alt="" />
                                    <div className="pl-3">
                                        <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                        <small>Jan 01, 2050</small>
                                    </div>
                                </a>
                                <a className="d-flex align-items-center text-decoration-none mb-3" href="">
                                    <img className="img-fluid rounded" src={blog_big} alt="" />
                                    <div className="pl-3">
                                        <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                        <small>Jan 01, 2050</small>
                                    </div>
                                </a>
                            </div>
            
                        {/* <!-- Tag Cloud --> */}
                            <div className="mb-5">
                                <h3 className="text-uppercase mb-4" style={{letterSpacing: '5px'}}>Tag Cloud</h3>
                                <div className="d-flex flex-wrap m-n1">
                                    <a href="" className="btn btn-outline-primary m-1">Design</a>
                                    <a href="" className="btn btn-outline-primary m-1">Development</a>
                                    <a href="" className="btn btn-outline-primary m-1">Marketing</a>
                                    <a href="" className="btn btn-outline-primary m-1">SEO</a>
                                    <a href="" className="btn btn-outline-primary m-1">Writing</a>
                                    <a href="" className="btn btn-outline-primary m-1">Consulting</a>
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
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </>
  )
}

export default Blog