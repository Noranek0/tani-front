<template>
  <section class="section landing-footer text-fixed-white">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6 col-12">
          <div class="px-4">
            <p class="mb-2 fw-medium fs-14 text-fixed-white">Subscribe :</p>
            <ul class="list-unstyled fw-normal landing-footer-list">
              <li>
                <div
                  class="input-group p-1 border bg-white rounded-pill gap-2 mb-4"
                >
                  <input
                    type="text"
                    class="form-control rounded-pill border-0 bg-transparent"
                    placeholder="Subscribe to our news letter.."
                  />
                  <div class="btn btn-primary rounded-pill">Subscribe</div>
                </div>
                <p class="mb-2 fw-medium fs-14 text-fixed-white">
                  Follow Us On :
                </p>
                <div class="mb-0">
                  <div class="btn-list">
                    <button
                      v-for="social in socialMedia"
                      :class="social.color"
                      class="btn btn-sm btn-icon rounded-pill btn-wave waves-effect waves-light"
                    >
                      <i
                        :class="social.icon"
                        class="fw-bold lh-1 align-middle"
                      ></i>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-12">
          <div class="px-4">
            <h6
              class="fw-medium fs-14 text-primary text-decoration-underline link-offset-3"
            >
              PAGES
            </h6>
            <ul class="list-unstyled op-8 fw-normal landing-footer-list">
              <li v-for="item in pageMenus">
                <a :href="item.href" class="text-fixed-white">{{
                  item.title
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-12">
          <div class="px-4">
            <h6
              class="fw-medium fs-14 text-primary text-decoration-underline link-offset-3"
            >
              INFO
            </h6>
            <ul class="list-unstyled op-8 fw-normal landing-footer-list">
              <li v-for="item in infoMenus">
                <a :href="item.href" class="text-fixed-white">{{
                  item.title
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-12 mb-md-0 mb-3">
          <div class="px-4">
            <p class="fw-medium mb-3">
              <router-link to="/dashboard/sales"
                ><img
                  src="/images/brand-logos/desktop-dark.png"
                  alt=""
                  class="landing-footer-logo"
              /></router-link>
            </p>
            <p class="mb-2 op-6 fw-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit et magnam,<br />
              fuga est mollitia eius, quo illum illo inventore optio aut quas
              omnis rem. Dolores accusan.
            </p>
            <div class="d-flex gap-4 op-9 mt-4">
              <a
                href="javascript:void(0);"
                class="text-primary fw-medium fs-14 text-decoration-underline link-offset-1"
                >Contact Us</a
              >
              <span class="op-3">|</span>
              <a
                href="javascript:void(0);"
                class="text-primary fw-medium fs-14 text-decoration-underline link-offset-1"
                >Terms & Conditions</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const socialMedia = [
  {
    icon: "ri-facebook-line",
    color: "btn-primary",
  },
  {
    icon: "ri-twitter-x-line",
    color: "btn-secondary",
  },
  {
    icon: "ri-instagram-line",
    color: "btn-danger",
  },
  {
    icon: "ri-github-line",
    color: "btn-warning",
  },
  {
    icon: "ri-youtube-line",
    color: "btn-info",
  },
];
const pageMenus = [
  {
    title: "Jadwal",
    href: "#",
  },
  {
    title: "Proyek",
    href: "#",
  },
  {
    title: "Portfolio",
    href: "#",
  },
];
const infoMenus = [
  {
    title: "Contact US",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Terms & Conditions",
    href: "#",
  },
];
</script>
