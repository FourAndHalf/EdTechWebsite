import React from 'react'

const Join = () => {
  return (
    <>
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
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
                            />
                        </div>
                        <div>
                            <label for="lastname" className="formbold-form-label"> Last name </label>
                            <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            className="formbold-form-input"
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
                            />
                        </div>
                        <div>
                            <label for="phone" className="formbold-form-label"> Phone number </label>
                            <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="formbold-form-input"
                            />
                        </div>
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
                        />
                    </div>

                    <div className="formbold-mb-3">
                        <label for="address2" className="formbold-form-label">
                            Street Address Line 2
                        </label>
                        <input
                            type="text"
                            name="address2"
                            id="address2"
                            className="formbold-form-input"
                        />
                    </div>

                    <div className="formbold-input-flex">
                        <div>
                            <label for="state" className="formbold-form-label"> State/Prvince </label>
                            <input
                            type="text"
                            name="state"
                            id="state"
                            className="formbold-form-input"
                            />
                        </div>
                        <div>
                            <label for="country" className="formbold-form-label"> Country </label>
                            <input
                            type="text"
                            name="country"
                            id="country"
                            className="formbold-form-input"
                            />
                        </div>
                    </div>

                    <div className="formbold-input-flex">
                        <div>
                            <label for="post" className="formbold-form-label"> Post/Zip code </label>
                            <input
                            type="text"
                            name="post"
                            id="post"
                            className="formbold-form-input"
                            />
                        </div>
                        <div>
                            <label for="area" className="formbold-form-label"> Area Code </label>
                            <input
                            type="text"
                            name="area"
                            id="area"
                            className="formbold-form-input"
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
                            <a href="#"> terms, conditions, and policies</a>
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