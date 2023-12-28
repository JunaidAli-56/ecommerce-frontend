import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
    return (
        <>
            <MetaTag title="Forgot Password" />
            <BreadCrumb title="Forgot Password" />
            <div className="forgot-wrapper py-lg-5 py-3 bg-light">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <div className="auth-card">
                                <form>
                                    <h5 className='text-center mb-2 fs-4'>Reset Your Password</h5>
                                    <p className='desc text-center'>We will send you an email to reset password</p>
                                    <div className="mb-3">
                                        <input type="email" name='email' placeholder='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center flex-column'>
                                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                                        <p className='my-2'>-- or --</p>
                                        <Link to='/login' className='btn btn-dark text-white w-100'>
                                            Cancel
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword