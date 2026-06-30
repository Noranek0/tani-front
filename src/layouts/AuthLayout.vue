<template>
  <div class="container-lg">
    <div
      class="row justify-content-center align-items-center authentication authentication-basic h-100"
    >
      <div class="col-xl-11">
        <div class="row justify-content-center">
          <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
            <div class="my-5 d-flex justify-content-center">
              <router-link to="/dashboard/sales">
                <img
                  :src="'/images/brand-logos/desktop-logo.png'"
                  alt=""
                  class="authentication-brand desktop-logo"
                />
                <img
                  :src="'/images/brand-logos/desktop-dark.png'"
                  alt="img"
                  class="authentication-brand desktop-dark"
                />
              </router-link>
            </div>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const setBodyClass = (action: string) => {
  if (action === "add") {
    document.body.classList.add("authentication-background");
  } else {
    document.body.classList.remove("authentication-background");
  }
};

onMounted(() => {
  setBodyClass("add");
  
  // Listen for route changes to remove class on navigation
  router.beforeEach(() => {
    setBodyClass("remove");
  });

  return () => {
    setBodyClass("remove");
  };
});
</script>
