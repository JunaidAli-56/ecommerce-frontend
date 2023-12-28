import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <MetaTag title="Login" />
            <BreadCrumb title="Login" />
            <div className="login-wrapper py-lg-5 py-3 bg-light">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <div className="login-card">
                                <form>
                                    <h5 className='text-center mb-4 fs-3'>Login</h5>
                                    <div className="mb-3">
                                        <input type="email" name='email' placeholder='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name='password' placeholder='Password' className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className='mb-3'>
                                        <Link to="/forgot-password">
                                            forgot-password ?
                                        </Link>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <button type="submit" className="btn btn-primary">Login</button>
                                        <Link to='/register'>
                                            Register now
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

export default Login