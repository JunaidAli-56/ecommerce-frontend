import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'

const ShippingPolicy = () => {
  return (
    <>
      <MetaTag title="Shipping Policy" />
      <BreadCrumb title="Shipping Policy" />
      <section className="shipping-wrapper bg-light py-lg-5 py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="policy-card">

            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ShippingPolicy