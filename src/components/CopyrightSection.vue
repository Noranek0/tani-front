<template>
  <div class="text-center landing-main-footer py-3 text-muted">
    <span class="text-muted fs-15">
      Copyright ©
      <span>{{ currentYear }}</span>. Designed with <i class="fa fa-heart text-danger"></i> by
      <a
        target="_blank"
        class="text-primary fw-medium"
        ><u>{{ creatorName }}</u></a
      >. All rights reserved.
    </span>
  </div>
</template>

<script setup lang="ts">
const creatorName = "Noranek0"
const currentYear = new Date().getFullYear();
</script>
