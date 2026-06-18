<template>
  <div class="landing-banner" id="home">
    <div class="img-container">
      <img :src="'/images/media/backgrounds/7.png'" />
    </div>
    <section class="section main-banner-section">
      <div class="container main-banner-container pb-lg-0">
        <div class="row pt-xl-3">
          <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-8">
            <div class="banner-content">
              <p class="fs-14 fw-medium text-primary mb-3">
                <span class="landing-section-heading text-default"
                  ><i
                    class="ti ti-inner-shadow-top-right-filled text-primary me-1 fs-10"
                  ></i
                  >XXXXX</span
                >
              </p>
              <p class="landing-banner-heading fw-semibold mb-3">
                XXXX
                <span class="fw-semibold text-primary">XXXX</span>
              </p>
              <div class="fs-16 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse necessitatibus eius vel repudiandae ipsam obcaecati laborum rem eos quae. Suscipit sed, quo nam fugit temporibus nemo dolorem laboriosam magni perspiciatis.
              </div>
              <router-link
                to="/dashboard"
                class="m-1 btn px-4 btn-secondary btn-wave waves-effect waves-light"
              >
                Learn More
                <i class="ri-arrow-right-line ms-2 align-middle"></i>
              </router-link>
            </div>
          </div>
          <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-4 my-auto">
            <div class="text-end landing-main-image landing-heading-img">
              <img :src="'/images/media/png/7.png'" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
