import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import MetaTag from '../components/MetaTag'

const Contact = () => {
  return (
    <div>
      <MetaTag title="Contact us" />
      <BreadCrumb title="Contact us" />
      <div className="contact-wrapper py-lg-5 py-3 bg-light">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.22746457724!2d74.00470982255571!3d31.483103649645578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703704121258!5m2!1sen!2s" width="600" height="400" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='border-0 w-100'></iframe>
            </div>
            <div className="col-12 mt-lg-5 mt-3">
              <div className="contact-form-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className='form-control' placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className='form-control' placeholder='Mobile' />
                    </div>
                    <div>
                      <textarea name="" id="" className='form-control w-100' placeholder='Comments' cols="30" rows="4"></textarea>
                    </div>
                    <div>
                      <button className="btn bg-dark text-white rounded-5 py-2 px-3">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title">Get in touch with us</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact