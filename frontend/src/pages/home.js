import React from 'react'

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
import testimonial_1 from '../img/testimonial-1.jpg'
import testimonial_2 from '../img/testimonial-2.jpg'
import testimonial_3 from '../img/testimonial-3.jpg'
import blog_1 from '../img/blog-1.jpg'
import blog_2 from '../img/blog-2.jpg'
import blog_3 from '../img/blog-3.jpg'

const Home = () => {
  return (
    <>
        {/* Topbar Start */}
            <div className="container-fluid d-none d-lg-block">
                <div className="row align-items-center py-4 px-xl-5">
                    <div className="col-lg-3">
                        <a href="" className="text-decoration-none">
                            <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1>
                        </a>
                    </div>
                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                            <div className="text-left">
                                <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                                <small>123 Street, New York, USA</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
                            <div className="text-left">
                                <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                                <small>info@example.com</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                            <div className="text-left">
                                <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                                <small>+012 345 6789</small>
                            </div>
                        </div>
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
                                <a className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href="registration">Join Now</a>
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
                            <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
                            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        {/* About End */}
        
        {/*  Registration Start  */}
        <div class="container-fluid bg-registration py-5" style={{margin: '90px 0'}}>
                <div class="container py-5">
                    <div class="row align-items-center">
                        <div class="col-lg-7 mb-5 mb-lg-0">
                            <div class="mb-4">
                                <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Need Any Courses</h5>
                                <h1 class="text-white">30% Off For New Students</h1>
                            </div>
                            <p class="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                                dolor</p>
                            <ul class="list-inline text-white m-0">
                                <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                                <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                                <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                            </ul>
                        </div>
                        <div class="col-lg-5">
                            <div class="card border-0">
                                <div class="card-header bg-light text-center p-4">
                                    <h1 class="m-0">Sign Up Now</h1>
                                </div>
                                <div class="card-body rounded-bottom bg-primary p-5">
                                    <form>
                                        <div class="form-group">
                                            <input type="text" class="form-control border-0 p-4" placeholder="Your name" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control border-0 p-4" placeholder="Your email" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <select class="custom-select border-0 px-4" style={{height: '47px'}}>
                                                <option selected>Select a course</option>
                                                <option value="1">Course 1</option>
                                                <option value="2">Course 1</option>
                                                <option value="3">Course 1</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button class="btn btn-dark btn-block border-0 py-3" type="submit">Sign Up Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*  Registration End  */}

        
        {/*  Category Start */}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Subjects</h5>
                        <h1>Explore Top Subjects</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={cat_1} alt="" />
                                <a className="cat-overlay text-white text-decoration-none" href="">
                                    <h4 className="text-white font-weight-medium">Web Design</h4>
                                    <span>100 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={cat_2} alt="" />
                                <a className="cat-overlay text-white text-decoration-none" href="">
                                    <h4 className="text-white font-weight-medium">Development</h4>
                                    <span>100 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={cat_3} alt="" />
                                <a className="cat-overlay text-white text-decoration-none" href="">
                                    <h4 className="text-white font-weight-medium">Game Design</h4>
                                    <span>100 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={cat_4} alt="" />
                                <a className="cat-overlay text-white text-decoration-none" href="">
                                    <h4 className="text-white font-weight-medium">Apps Design</h4>
                                    <span>100 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={cat_5} alt="" />
                                <a className="cat-overlay text-white text-decoration-none" href="">
                                    <h4 className="text-white font-weight-medium">Marketing</h4>
                                    <span>100 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={cat_6} alt="" />
                                <a className="cat-overlay text-white text-decoration-none" href="">
                                    <h4 className="text-white font-weight-medium">Research</h4>
                                    <span>100 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={cat_7} alt="" />
                                <a className="cat-overlay text-white text-decoration-none" href="">
                                    <h4 className="text-white font-weight-medium">Content Writing</h4>
                                    <span>100 Courses</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={cat_8} alt="" />
                                <a className="cat-overlay text-white text-decoration-none" href="">
                                    <h4 className="text-white font-weight-medium">SEO</h4>
                                    <span>100 Courses</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*  Category Start  */}


        {/*  Courses Start  */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Courses</h5>
                        <h1>Our Popular Courses</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <img className="img-fluid" src={course_1} alt="" />
                                <div className="bg-secondary p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                        <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                    </div>
                                    <a className="h5" href="">Web design & development courses for beginner</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                            <h5 className="m-0">$99</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <img className="img-fluid" src={course_2} alt="" />
                                <div className="bg-secondary p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                        <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                    </div>
                                    <a className="h5" href="">Web design & development courses for beginner</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                            <h5 className="m-0">$99</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <img className="img-fluid" src={course_3} alt="" />
                                <div className="bg-secondary p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                        <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                    </div>
                                    <a className="h5" href="">Web design & development courses for beginner</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                            <h5 className="m-0">$99</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <img className="img-fluid" src={course_4} alt="" />
                                <div className="bg-secondary p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                        <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                    </div>
                                    <a className="h5" href="">Web design & development courses for beginner</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                            <h5 className="m-0">$99</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <img className="img-fluid" src={course_5} alt="" />
                                <div className="bg-secondary p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                        <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                    </div>
                                    <a className="h5" href="">Web design & development courses for beginner</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                            <h5 className="m-0">$99</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <img className="img-fluid" src={course_6} alt="" />
                                <div className="bg-secondary p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                        <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                    </div>
                                    <a className="h5" href="">Web design & development courses for beginner</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                            <h5 className="m-0">$99</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*  Courses End  */}


        

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
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-secondary p-4">
                                    <h5>Jhon Doe</h5>
                                    <p className="m-0">Web Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src={team_2} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-secondary p-4">
                                    <h5>Jhon Doe</h5>
                                    <p className="m-0">Web Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src={team_3} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-secondary p-4">
                                    <h5>Jhon Doe</h5>
                                    <p className="m-0">Web Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src={team_4} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-secondary p-4">
                                    <h5>Jhon Doe</h5>
                                    <p className="m-0">Web Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*  Team End  */}


        {/*  Testimonial Start  */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Testimonial</h5>
                        <h1>What Say Our Students</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                    <img className="img-fluid mx-auto mb-3" src={testimonial_1} alt="" />
                                    <h5 className="m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                    <img className="img-fluid mx-auto mb-3" src={testimonial_2} alt="" />
                                    <h5 className="m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                    <img className="img-fluid mx-auto mb-3" src={testimonial_3} alt="" />
                                    <h5 className="m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*  Testimonial End  */}


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
                                    <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                    <p className="text-primary m-0">Jan 01, 2050</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={blog_2} alt="" />
                                <a className="blog-overlay text-decoration-none" href="">
                                    <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                    <p className="text-primary m-0">Jan 01, 2050</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={blog_3} alt="" /> 
                                <a className="blog-overlay text-decoration-none" href="">
                                    <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                    <p className="text-primary m-0">Jan 01, 2050</p>
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
                                <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                                <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                                <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                                <div className="d-flex justify-content-start mt-4">
                                    <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-outline-light btn-square" href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: '5px'}}>Our Courses</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Web Design</a>
                                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Apps Design</a>
                                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Marketing</a>
                                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Research</a>
                                    <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>SEO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 mb-5">
                        <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: '5px'}}>Newsletter</h5>
                        <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                        <div className="w-100">
                            <div className="input-group">
                                <input type="text" className="form-control border-light" style={{padding: '30px'}} placeholder="Your Email Address" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary px-4">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
                <div className="row">
                    <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="m-0 text-white">&copy; <a href="#">Domain Name</a>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                        </p>
                    </div>
                    <div className="col-lg-6 text-center text-md-right">
                        <ul className="nav d-inline-flex">
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">Privacy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">Terms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">Help</a>
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