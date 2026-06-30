<template>
  <div class="card custom-card my-4">
    <div class="card-body p-5">
      <p class="h4 mb-2 fw-semibold">Sign In</p>
      <p class="mb-4 text-muted fw-normal">
        Welcome back, John! We're glad to see you again!
      </p>
      <div class="row gy-3">
        <div class="col-xl-12">
          <label for="signin-username" class="form-label text-default"
            >User Name</label
          >
          <input
            type="text"
            class="form-control form-control-lg"
            id="signin-username"
            placeholder="user name"
          />
        </div>
        <div class="col-xl-12 mb-2">
          <label for="signin-password" class="form-label text-default d-block"
            >Password<router-link
              to="/authentication/reset-password/reset-basic"
              class="float-end link-danger op-5 fw-medium fs-12"
              >Forget password ?</router-link
            ></label
          >
          <div class="position-relative">
            <PasswordInput
              initialValue=""
              name="Confirmpassword"
              id="Confirmpassword"
              placeholder="password"
            />
          </div>
          <div class="mt-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label
                class="form-check-label fw-normal fs-13"
                for="defaultCheck1"
              >
                Remember password ?
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="d-grid mt-4">
        <router-link to="/dashboard/sales" class="btn btn-lg btn-primary"
          >Sign In</router-link
        >
      </div>
      <div class="text-center">
        <p class="text-muted mt-3 mb-0">
          Dont have an account?
          <router-link
            to="/authentication/sign-up/sign-up-basic"
            class="text-primary fw-medium"
            >Sign Up</router-link
          >
        </p>
      </div>
      
      <!--
      <div class="text-center my-4 authentication-barrier">
        <span class="text-muted fs-12">Or SignIn With</span>
      </div>
      <div
        class="d-flex align-items-center justify-content-between gap-3 mb-3 flex-wrap"
      >
        <button
          class="btn primary-dash-border auth-google-icon btn-lg border d-flex align-items-center justify-content-center flex-fill"
        >
          <span class="avatar avatar-xs">
            <img src="/images/media/apps/google.png" alt="" />
          </span>
          <span class="lh-1 ms-2 fs-13 text-default fw-medium">Google</span>
        </button>
        <button
          class="btn secondary-dash-border auth-facebook-icon btn-lg border d-flex align-items-center justify-content-center flex-fill"
        >
          <span class="avatar avatar-xs">
            <img src="/images/media/apps/facebook.png" alt="" />
          </span>
          <span class="lh-1 ms-2 fs-13 text-default fw-medium">Facebook</span>
        </button>
        <button
          class="btn danger-dash-border auth-twitter-icon btn-lg border d-flex align-items-center justify-content-center flex-fill"
        >
          <span class="avatar avatar-xs">
            <img src="/images/media/apps/twitter.png" alt="" class="invert-1" />
          </span>
          <span class="lh-1 ms-2 fs-13 text-default fw-medium">Twitter</span>
        </button>
      </div>
      -->
    </div>
  </div>
</template>
