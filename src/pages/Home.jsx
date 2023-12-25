import React from 'react'
import HeroSection from '../components/HeroSection'
import SpecialProduct from '../components/SpecialProduct'
import MainProduct from '../components/MianProduct/MainProduct'
import ProductCard2 from '../components/ProductCard2/ProductCard2'
import SliderCard from '../components/SliderCard/SliderCard'
import Brands from '../components/BrandCarousel/Brands'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <>
      <div className='container flex-wrap'>
        <div className="row my-lg-5 my-3">
          <div className="col p-0">
            <HeroSection />
          </div>
        </div>
      </div>
      <div className='container-fluid bg-light'>
        <div className="container">
          {/* services */}
          <div className="row my-lg-5 my-3">
            <div className="container-fluid ">
              {/* services row */}
              <div className="row services-section-row my-lg-5 my-3">
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


              {/* product card row */}
              <div className="row product-card-row">
                <div className="col bg-white productCard-main-col">
                  <ProductCard2 />
                </div>
              </div>

              {/* featured collection row */}
              <div className="row feature-collection-row my-lg-5 my-3 p-0">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <SliderCard
                    img="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/24-01_260x.jpg?v=1655098000"
                    name="Sony"
                    h1="Kids headphones bulk 10 pack multi colored"
                    amount="30.00"
                  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <SliderCard
                    img="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/19_00_260x.jpg?v=1655097265"
                    name="Sony"
                    h1="Olympus pen E-PL9 kit with 14-42"
                    amount="100.00"
                  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <SliderCard
                    img="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/15_00_260x.jpg?v=1655096656"
                    name="Havells"
                    h1="Honor T1 7.0 1 GB RAM 8 GB ROM"
                    amount="150.00"
                  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <SliderCard
                    img="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_00_260x.jpg?v=1655096387"
                    name="Bajaj"
                    h1="Beoplay A1 Portable Bluetooth Speaker"
                    amount="60.00"

                  />
                </div>
              </div>

              {/* product card */}
              <div className="row product-card-row my-lg-5 my-3">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <MainProduct
                    img="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-01.jpg?v=1655701528"
                    heading="big screen"
                    desc="smart watches series 7"
                  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <MainProduct
                    img="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-02.jpg?v=1654920168"
                    heading="big screen"
                    desc="smart watches series 7"
                  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <MainProduct
                    img="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-03.jpg?v=1654920181"
                    heading="big screen"
                    desc="smart watches series 7"
                  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <MainProduct
                    img="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-04.jpg?v=1654920192"
                    heading="big screen"
                    desc="smart watches series 7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* special product */}
      <section className='speacial-wrapper py-3 py-lg-5'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Speacial Product</h3>
            </div>
          </div>
          <div className="row">
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
      {/* Famous product */}
      <section className='famous-wrapper py-3 py-lg-5'>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-1.webp" alt="famous" className='img-fluid'/>
                <div className="famous-card-content text-white position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>from $399 or $16.62/mo. from 24/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;