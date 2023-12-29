import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
    return (
        <>
            <MetaTag title="Reset Password" />
            <BreadCrumb title="Reset Password" />
            <div className="reset-password-wrapper py-lg-5 py-3 bg-light">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <div className="auth-card">
                                <form>
                                    <h5 className='text-center mb-4 fs-3'>Reset Password</h5>
                                    <div className="mb-3">
                                        <input type="password" name='password' placeholder='Password' className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name='confirmPassword' placeholder='Confirm Password' className="form-control" id="exampleInputPassword2" />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center flex-column'>
                                        <button type="submit" className="btn btn-primary w-100">Reset</button>
                                        <p className='my-2'>-- or --</p>
                                        <Link to='/login' className='w-100 btn btn-dark text-white'>
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

export default ResetPassword;