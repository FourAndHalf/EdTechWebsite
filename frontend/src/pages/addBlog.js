import React, { useEffect, useState } from 'react'

const AddBlog = () => {
    const [blogData, setBlogData] = useState({
        author: "",
        email: "",
        date: "",
        keyword: "",
        image: "",
        heading: "",
        desc: ""
    })

    const createBlog = (event) => {

        fetch('http://localhost:5000/api/blogPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: blogData.author,
                email: blogData.email,
                date: blogData.date,
                keyword: blogData.keyword,
                heading: blogData.heading,
                content: blogData.desc
            })
        })
    }

    useEffect(() => {
        let today = new Date().toISOString().split('T')[0];
        document.getElementById('date').setAttribute('max', today);
    }, []);

  return (
    <>
        {/* Topbar Start */}
            <div className="container-fluid d-none d-lg-block bg-white shadow-sm">
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

        {/* Form Start */}
            <div className="formbold-main-wrapper">
                <div className="formbold-form-wrapper">
                    <form onSubmit={createBlog}>
                        <div className="formbold-form-title">
                            <h2 className="text-primary">Create Blog</h2>
                        </div>

                        <div className="formbold-mb-3">
                            <label className="formbold-form-label">
                                Author
                            </label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                className="formbold-form-input"
                                onChange={(event) => setBlogData({...blogData, author: event.target.value})}
                                value={blogData.author}
                                required
                            />
                        </div>

                        <div className="formbold-mb-3">
                            <label className="formbold-form-label"> Email </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="formbold-form-input"
                                onChange={(event) => setBlogData({...blogData, email: event.target.value})}
                                value={blogData.email}
                                required
                            />
                        </div>

                        <div className="formbold-mb-3">
                            <label className="formbold-form-label">
                                Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                className="formbold-form-input"
                                onChange={(event) => setBlogData({...blogData, date: event.target.value})}
                                value={blogData.date}
                                required
                            />
                        </div>

                        <div className="formbold-mb-3">
                            <label className="formbold-form-label">
                                Topic                        
                            </label>
                            <select className="formbold-form-input" placeholder='Select a course' style={{height: '47px'}} onChange={(event) => setBlogData({...blogData, keyword: event.target.value})} value={blogData.keyword} required >
                                <option value="0" >Select Topic</option>
                                <option value="Web Design">Web Design</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Cybersecurity">Cybersecurity</option>
                                <option value="SEO">SEO</option>
                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                <option value="Online Marketing">Online Marketing</option>
                                <option value="Email Marketing">Email Marketing</option>
                            </select>
                        </div>

                        <div className="formbold-mb-3">
                            <label className="formbold-form-label">
                                Heading
                            </label>
                            <input
                                type="text"
                                name="heading"
                                id="heading"
                                className="formbold-form-input"
                                onChange={(event) => setBlogData({...blogData, heading: event.target.value})}
                                value={blogData.heading}
                                required
                            />
                        </div>

                        <div className="formbold-mb-3">
                            <label className="formbold-form-label">
                                Content for the blog
                            </label>
                            <textarea
                                name="desc"
                                id="desc"
                                className="formbold-form-input"
                                onChange={(event) => setBlogData({...blogData, desc: event.target.value})}
                                value={blogData.desc}
                                rows="10"
                                required
                            />
                        </div>

                        <button type='submit' className="formbold-btn">Post Blog</button>
                    </form>
                </div>
            </div>
    </>
  )
}

export default AddBlog