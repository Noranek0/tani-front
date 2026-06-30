<template>
  <div class="card custom-card my-4">
    <div class="card-body p-5">
      <p class="h4 mb-2 fw-semibold">Sign Up</p>
      <p class="mb-4 text-muted">
        Sign up now to create a free account and join us!
      </p>
      <div class="row gy-3">
        <div class="col-xl-12">
          <label for="signup-firstname" class="form-label text-default"
            >Email Address</label
          >
          <input
            type="email"
            class="form-control form-control-lg"
            id="signup-firstname"
            placeholder="Enter Email ID"
          />
        </div>
        <div class="col-xl-12">
          <label for="signup-password" class="form-label text-default"
            >Password</label
          >
          <div class="position-relative">
            <PasswordInput
              initialValue=""
              name="newpassword"
              id="newpassword"
              placeholder="password"
            />
          </div>
        </div>
      </div>
      <div class="d-grid mt-4">
        <router-link to="/dashboard/sales" class="btn btn-lg btn-primary"
          >Create Account</router-link
        >
      </div>
      <div class="text-center">
        <p class="mt-3 mb-0">
          Already have an account?
          <router-link
            to="/authentication/sign-in/sign-in-basic"
            class="fw-medium text-primary"
            >Sign In</router-link
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

<script setup lang="ts">
import PasswordInput from '~/components/forms/PasswordInput.vue';
</script>
