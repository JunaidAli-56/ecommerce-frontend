import React from 'react'
import HeroSection from '../components/HeroSection'
import SpecialProduct from '../components/SpecialProduct'
import ItemsCard from '../components/ItemsCard/ItemsCard'
import Brands from '../components/BrandCarousel/Brands'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import MetaTag from '../components/MetaTag'

const Home = () => {
  return (
    <>
      <MetaTag title="Home" />
      {/* Hero Section */}
      <div className='container flex-wrap'>
        <div className="row my-lg-5 my-3">
          <div className="col p-0">
            <HeroSection />
          </div>
        </div>
      </div>
      <div className='container-fluid bg-light'>
        {/* Services */}
        <section className='services-wrapper py-lg-5 py-3'>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card card-div">
                  <div className="row inner-row">
                    <div className="col-3">
                      <div className="img-div">
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/service-01_70x.png?v=1654865803" alt="" /></div>
                    </div>
                    <div className="col-9">
                      <div>
                        <h5>free shipping</h5>
                        <p>from all orders <br />
                          over $100
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card card-div">
                  <div className="row inner-row">
                    <div className="col-3">
                      <div className="img-div">
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/service-02_70x.png?v=1654865804" alt="" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div>
                        <h5>daily surprise
                          offer
                        </h5>
                        <p>save upto 25% <br />
                          off
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card card-div">
                  <div className="row inner-row">
                    <div className="col-3">
                      <div className="img-div">
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/service-03_70x.png?v=1654865803" alt="" /></div>
                    </div>
                    <div className="col-9">
                      <div>
                        <h5>support 24/7</h5>
                        <p>shop with an <br />
                          expert
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card card-div">
                  <div className="row inner-row">
                    <div className="col-3">
                      <div className="img-div">
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/service-05_70x.png?v=1654865803" alt="" /></div>
                    </div>
                    <div className="col-9">
                      <div>
                        <h5>secure payments</h5>
                        <p>100% protectd <br />
                          payments
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Items product 8-Card */}
        <section className='items-wrapper py-lg-5 py-3'>
          <div className="container">
            <div className="row">
              <div className="col shadow-light rounded-4 bg-white">
                <ItemsCard />
              </div>
            </div>
          </div>
        </section>
        {/* Feature Collection */}
        <section className='featured-wrapper py-3 py-lg-5'>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className='section-heading mb-4'>Feature Collection</h3>
              </div>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
        {/* Famous product */}
        <section className='famous-wrapper py-3 py-lg-5'>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img src="images/famous-1.webp" alt="famous" className='img-fluid' />
                  <div className="famous-card-content text-white position-absolute">
                    <h5>Big Screen</h5>
                    <h6>Smart Watch Series 7</h6>
                    <p>from $399 or $16.62/mo. from 24/mo.</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img src="images/famous-2.webp" alt="famous" className='img-fluid' />
                  <div className="famous-card-content position-absolute">
                    <h5>Studio Display</h5>
                    <h6>600 nits of brightness</h6>
                    <p>27-inch 5k Retina display</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img src="images/famous-3.webp" alt="famous" className='img-fluid' />
                  <div className="famous-card-content position-absolute">
                    <h5>Smart Phones</h5>
                    <h6>Smart Phones 13 pro</h6>
                    <p>Now in Green. From $999 or $116.62/mo. from 24/mo.</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img src="images/famous-4.webp" alt="famous" className='img-fluid' />
                  <div className="famous-card-content position-absolute">
                    <h5>Home Speaker</h5>
                    <h6>Room-filling Sound</h6>
                    <p>From $699 or $116.62/mo. from 24/mo.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* special product */}
        <section className='speacial-wrapper py-3 py-lg-5'>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className='mb-4'>Speacial Product</h3>
              </div>
            </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </section>
        {/* Popular product */}
        <section className='popular-wrapper py-3 py-lg-5'>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3>Our Popular Product</h3>
              </div>
            </div>
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>

        <section className='marquee-wrapper py-3 py-lg-5'>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Brands />
              </div>
            </div>
          </div>
        </section>
        <section className='blog-wrapper py-3 py-lg-5'>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className='section-heading mb-4'>Our Latest Blogs</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home;