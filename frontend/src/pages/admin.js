import React from 'react'

const Admin = () => {
  return (
    <>
        {/* Topbar Start */}
            <div className="admin-topbar bg-white shadow-sm">
                <div className="row justify-content-center align-items-center py-4 px-xl-5">
                    <a href="" className="text-decoration-none">
                            <h1>
                                ADMINSTRATOR
                            </h1>
                    </a>
                </div>
            </div>  
        {/* Topbar End */}    

        {/* Newsletter Subscriber list */}
            <div className="col-lg-7 mt-4">
                <a href="" className="text-decoration-none">
                    <h3 className="">Newsletter Subscriber List</h3>
                </a>
            </div>

        {/* Joiners List */}
            <div className="col-lg-7 mt-4">
                <a href="" className="text-decoration-none">
                    <h3 className="">Joiners List</h3>
                </a>
            </div>

        {/* Query List */}
            <div className="col-lg-7 mt-4">
                <a href="" className="text-decoration-none">
                    <h3 className="">Contact Query List</h3>
                </a>
            </div>

        {/* Sign Up List */}
            <div className="col-lg-7 mt-4">
                <a href="" className="text-decoration-none">
                    <h3 className="">Sign Up List</h3>
                </a>
            </div>

    </>
  )
}

export default Admin