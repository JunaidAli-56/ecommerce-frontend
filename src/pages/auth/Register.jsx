import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <MetaTag title="Register" />
            <BreadCrumb title="Register" />
            <div className="register-wrapper py-lg-5 py-3 bg-light">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <div className="auth-card">
                                <form>
                                    <h5 className='text-center mb-4 fs-3'>Create Account</h5>
                                    <div className="mb-3">
                                        <input type="text" name='name' placeholder='Name' className="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="tel" name='mobile' placeholder='Mobile' className="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" name='email' placeholder='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name='password' placeholder='Password' className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center flex-column'>
                                        <button type="submit" className="btn btn-primary w-100">Create</button>
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

export default Register